import {
  AddPlateRepo,
  DocumentStatusRepo,
  activePlatesRepo,
  countryLeavingStatusRepo,
  driverLicenseRepo,
  getNajiUserByMobileAndNationalRepo,
  getPlateByPlateInfo,
  getPlateRepo,
  negetivePointRepo,
  passportStatusRepo,
  violationAggregateRepo,
  violationAggregateWithoutRegistrationRepo,
  violationImageRepo,
  violationReportRepo,
} from "@/repository/naji";
import { NajiUiState } from "@/utils/enums";
import {
  QueryLiceseNegetivePoint,
  QueryWithNajiId,
  QueryWithPlateId,
} from "@/utils/interfaces";
import {
  ActivePlateResopnse,
  CountryLeavingResponse,
  DocumentStatusResponse,
  DriverLicenseResponse,
  InquiryWithNoAuth,
  NajiInquiryResult,
  NajiResponse,
  NajiUser,
  NegetivePointResponse,
  PassportResponse,
  Plate,
  ViolationAggregateResponse,
  ViolationAggregateWithoutRegistrationResponse,
  ViolationImageResponse,
  ViolationReportResponse,
} from "@/utils/interfaces/naji.interface";
import { OrderType } from "@/utils/interfaces/order.interface";
import {
  phoneNumberValidator,
  Plate as platePersianTool,
  verifyIranianNationalId,
} from "@persian-tools/persian-tools";
import { create } from "zustand";
export interface InquiryStoreState {
  payload: any;
  orderId?: string;
  data?: OrderType;
  najiUsers?: NajiUser[];
  userInquiries?: NajiInquiryResult[];
  userPlates?: Plate[];
  selectedNajiUser?: NajiUser;
  selectedPlate?: Plate;
  plates?: Plate[];
  isLoading: boolean;
  error: string;
  uiState?: NajiUiState;
  redirectLink?: string;

  najiMobileAndNatinalInquiryRes?: NajiResponse<NajiUser>;
  set: (key: keyof InquiryStoreState, value: any) => void;
  get: (key: keyof InquiryStoreState) => any;
  checkMobileAndNationalCodeExist: (
    mobile: string,
    nationalCode: string,
    canChangeState?: boolean
  ) => Promise<void>;

  checkPlateIfExist: (plate: Plate) => Promise<void>;
  addPlate: (plate: Plate) => Promise<void>;
  getPlates: () => Promise<void>;
  inquiryForviolationReport: (
    plateId: string,
    fromWallet: boolean
  ) => Promise<void>;
  inquiryForviolationAggregateReport: (
    plateId: string,
    fromWallet: boolean
  ) => Promise<void>;
  inquiryForviolationImageReport: (
    violationId: string,
    PlateId: string,
    fromWallet: boolean
  ) => Promise<void>;
  inquiryForviolationAggregateNotAuthReport: (
    data: InquiryWithNoAuth
  ) => Promise<void>;
  driverLicenseInquiry: (data: QueryWithNajiId) => Promise<void>;
  negetivePointInquiry: (data: QueryLiceseNegetivePoint) => Promise<void>;
  activePlteInquiry: (data: QueryWithNajiId) => Promise<void>;
  passportStatusInquiry: (data: QueryWithNajiId) => Promise<void>;
  ountryLeavingStatusInquiry: (data: QueryWithNajiId) => Promise<void>;
  DocumentStatusInquiry: (data: QueryWithPlateId) => Promise<void>;
}

const useInquiryStore = create<InquiryStoreState>((set, get) => ({
  payload: null,
  isLoading: false,
  isLoggedIn: false,
  error: "",
  set: (key, value) => set((state) => ({ ...state, [key]: value })),
  get: (key) => get()[key],
  checkMobileAndNationalCodeExist: async (
    mobile: string,
    nationalCode: string,
    canChangeState: boolean = false
  ) => {
    const uiState = get().uiState;
    if (phoneNumberValidator(mobile) && verifyIranianNationalId(nationalCode)) {
      try {
        set((state) => ({
          ...state,
          isLoading: true,
          uiState: NajiUiState.checkMobileAndNationalCodeExist,
        }));
        const res = await getNajiUserByMobileAndNationalRepo(
          mobile,
          nationalCode
        );
        console.log(res);
        const userVerified =
          res.status && res.result?.nationalCodeVerified && res.result.najiId;
        set((state) => ({
          ...state,
          selectedNajiUser: userVerified ? res.result : undefined,
          uiState:
            !userVerified && canChangeState
              ? NajiUiState.confirmNationAndMobileState
              : undefined,
        }));

        console.log(get());
      } catch (e) {
        console.log(e);
      } finally {
        set((state) => ({ ...state, isLoading: false }));
      }
    }
  },
  checkPlateIfExist: async (plate: Plate) => {
    if (plate?.complete) {
      const str = `${plate.firstPart}${plate.charPart}${plate.secondPart}${plate.countryPart}`;
      const valid = platePersianTool(str).isValid;
      if (!valid) {
        set((state) => ({ ...state, error: "plate not valid" }));
        return;
      }
      try {
        set((state) => ({ ...state, isLoading: true }));
        const res = await getPlateByPlateInfo(plate);
        if (res.status && res.result) {
          set((state) => ({ ...state, selectedPlate: res.result }));
          if (res.result.naji) {
            set((state) => ({ ...state, selectedNajiUser: res.result?.naji }));
          }
        }
        console.log(get());
      } catch {
      } finally {
        set((state) => ({ ...state, isLoading: false }));
        console.log(get());
      }
    }
  },
  inquiryForviolationReport: async (plateId, fromWallet) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await violationReportRepo({ plateId, fromWallet });
      if (res.status && res.result?.RedirectURL && fromWallet == false) {
        //redirectLink
        set((state) => ({
          ...state,
          redirectLink: res.result?.RedirectURL,
          orderId: res.result?.order?.id,
        }));
      }
      if (
        res.status &&
        !res.result?.RedirectURL &&
        fromWallet == true &&
        res.result
      ) {
        //save the result
        set((state) => ({ ...state, violationReport: res.result }));
        set((state) => ({ ...state, isLoading: false }));
      }
      if (!res.status && res.message) {
        set((state) => ({ ...state, error: res.message }));
        set((state) => ({ ...state, isLoading: false }));
      }
      console.log(res);
      console.log(get());
      return;
    } catch (e) {
      console.log(e);
    } finally {
      console.log(get());
    }
  },
  inquiryForviolationAggregateReport: async (plateId, fromWallet) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await violationAggregateRepo({ plateId, fromWallet });
      if (res.status && res.result?.RedirectURL && fromWallet == false) {
        //redirectLink
        set((state) => ({
          ...state,
          redirectLink: res.result?.RedirectURL,
          orderId: res.result?.order?.id,
        }));
      }
      if (
        res.status &&
        !res.result?.RedirectURL &&
        fromWallet == true &&
        res.result
      ) {
        //save the result
        set((state) => ({ ...state, violationAggregate: res.result }));
      }
      if (!res.status && res.message) {
        set((state) => ({ ...state, error: res.message }));
      }
      console.log(res);
      console.log(get());
      return;
    } catch (e) {
      console.log(e);
    } finally {
      console.log(get());
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  inquiryForviolationImageReport: async (violationId, plateId, fromWallet) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await violationImageRepo({
        violationId,
        plateId,
        fromWallet,
      });
      if (res.status && res.result?.RedirectURL && fromWallet == false) {
        //redirectLink
        set((state) => ({ ...state, redirectLink: res.result?.RedirectURL }));
      }
      if (
        res.status &&
        !res.result?.RedirectURL &&
        fromWallet == true &&
        res.result
      ) {
        //save the result
        set((state) => ({
          ...state,
          violationImage: res.result,
          orderId: res.result?.order?.id,
        }));
      }
      if (!res.status && res.message) {
        set((state) => ({ ...state, error: res.message }));
      }
      console.log(res);
      console.log(get());
      return;
    } catch (e) {
      console.log(e);
    } finally {
      console.log(get());
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  inquiryForviolationAggregateNotAuthReport: async (data) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await violationAggregateWithoutRegistrationRepo(data);
      set((state) => ({ ...state, redirectLink: res.result?.RedirectURL }));

      return;
    } catch (e) {
      console.log(e);
    } finally {
      console.log(get());
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  addPlate: async (plate: Plate) => {
    if (plate?.complete) {
      const str = `${plate.firstPart}${plate.charPart}${plate.secondPart}${plate.countryPart}`;
      const valid = platePersianTool(str).isValid;
      if (!valid) {
        set((state) => ({ ...state, error: "plate not valid" }));
        return;
      }
      const najiUser = get().selectedNajiUser;

      if (!najiUser && !plate.najiId) {
        set((state) => ({ ...state, error: "plate not valid" }));
        return;
      }
      try {
        const plateData = {
          ...plate,
          najiId: plate.najiId ?? najiUser?.id,
        };
        set((state) => ({ ...state, isLoading: true }));
        const res = await getPlateByPlateInfo(plate);
        console.log(res);
        if (!res.status) {
          const plateRes = await AddPlateRepo(plate);
          if (plateRes.status) {
            set((state) => ({ ...state, selectedPlate: plateRes.result }));
            useInquiryStore.getState().getPlates();
          }
        }
      } catch (error) {
        set((state) => ({
          ...state,
          message: error ?? "مشکلی در برقراری ارتباط با سرور",
        }));
      } finally {
        set((state) => ({ ...state, isLoading: false }));
        console.log(get());
      }
    }
  },
  getPlates: async () => {
    try {
      const res = await getPlateRepo();
      if (res.status && res.result.length > 0) {
        set((state) => ({ ...state, userPlates: res.result }));
      }
    } catch (error) {
    } finally {
      console.log(get());
    }
  },
  driverLicenseInquiry: async (data) => {
    try {
      const res = await driverLicenseRepo(data);
      const redirectStatus =
        res.status && res.result?.RedirectURL && data.fromWallet == false;
      redirectStatus &&
        set((state) => ({ ...state, redirectLink: res.result?.RedirectURL }));

      if (
        res.status &&
        !res.result?.RedirectURL &&
        data.fromWallet == true &&
        res.result
      ) {
        set((state) => ({
          ...state,
          driverLicense: res.result,
          orderId: res.result?.order?.id,
        }));
        return;
      }
      !res.status &&
        res.message &&
        set((state) => ({ ...state, error: res.message }));
      return;
    } catch (error) {
    } finally {
      console.log(get());
    }
  },
  negetivePointInquiry: async (data) => {
    try {
      const res = await negetivePointRepo(data);
      const redirectStatus =
        res.status && res.result?.RedirectURL && data.fromWallet == false;
      redirectStatus &&
        set((state) => ({ ...state, redirectLink: res.result?.RedirectURL }));

      if (
        res.status &&
        !res.result?.RedirectURL &&
        data.fromWallet == true &&
        res.result
      ) {
        set((state) => ({
          ...state,
          negetivePoint: res.result,
          orderId: res.result?.order?.id,
        }));
        return;
      }
      !res.status &&
        res.message &&
        set((state) => ({ ...state, error: res.message }));
      return;
    } catch (error) {
    } finally {
      console.log(get());
    }
  },
  activePlteInquiry: async (data: QueryWithNajiId) => {
    try {
      const res = await activePlatesRepo(data);
      const redirectStatus =
        res.status && res.result?.RedirectURL && data.fromWallet == false;
      redirectStatus &&
        set((state) => ({ ...state, redirectLink: res.result?.RedirectURL }));

      if (
        res.status &&
        !res.result?.RedirectURL &&
        data.fromWallet == true &&
        res.result
      ) {
        set((state) => ({
          ...state,
          activePlates: res.result,
          orderId: res.result?.order?.id,
        }));
        return;
      }
      !res.status &&
        res.message &&
        set((state) => ({ ...state, error: res.message }));
      return;
    } catch (error) {
    } finally {
      console.log(get());
    }
  },
  passportStatusInquiry: async (data: QueryWithNajiId) => {
    try {
      const res = await passportStatusRepo(data);
      const redirectStatus =
        res.status && res.result?.RedirectURL && data.fromWallet == false;
      redirectStatus &&
        set((state) => ({ ...state, redirectLink: res.result?.RedirectURL }));

      if (
        res.status &&
        !res.result?.RedirectURL &&
        data.fromWallet == true &&
        res.result
      ) {
        set((state) => ({
          ...state,
          passportStatus: res.result,
          orderId: res.result?.order?.id,
        }));
        return;
      }
      !res.status &&
        res.message &&
        set((state) => ({ ...state, error: res.message }));
      return;
    } catch (error) {
    } finally {
      console.log(get());
    }
  },
  ountryLeavingStatusInquiry: async (data: QueryWithNajiId) => {
    try {
      const res = await countryLeavingStatusRepo(data);
      const redirectStatus =
        res.status && res.result?.RedirectURL && data.fromWallet == false;
      redirectStatus &&
        set((state) => ({ ...state, redirectLink: res.result?.RedirectURL }));

      if (
        res.status &&
        !res.result?.RedirectURL &&
        data.fromWallet == true &&
        res.result
      ) {
        set((state) => ({
          ...state,
          countryLeavingStatus: res.result,
          orderId: res.result?.order?.id,
        }));
        return;
      }
      !res.status &&
        res.message &&
        set((state) => ({ ...state, error: res.message }));
      return;
    } catch (error) {
    } finally {
      console.log(get());
    }
  },
  DocumentStatusInquiry: async (data: QueryWithPlateId) => {
    try {
      const res = await DocumentStatusRepo(data);
      const redirectStatus =
        res.status && res.result?.RedirectURL && data.fromWallet == false;
      redirectStatus &&
        set((state) => ({ ...state, redirectLink: res.result?.RedirectURL }));
      const responseFromWallet = res.status && data.fromWallet && res.result;
      responseFromWallet &&
        set((state) => ({
          ...state,
          documentStatus: res.result,
          orderId: res.result?.order?.id,
        }));

      !res.status &&
        res.message &&
        set((state) => ({ ...state, error: res.message }));
      return;
    } catch (error) {
    } finally {
      console.log(get());
    }
  },
}));

export default useInquiryStore;
