import IncreaseAmount from "@/components/increse-amount/increase-amount";
import {
  buyCharge,
  buyChargeNoAuth,
  buyInternet,
  buyInternetNoAuth,
  getPackages,
} from "@/repository/charge-internet";
import { IncreaseAount } from "@/repository/login";
import { AxiosDataResponse, User } from "@/utils/interfaces";
import {
  InternetDto,
  InternetPackageInterface,
  chargeDto,
} from "@/utils/interfaces/charge-internet";
import { StringMappingType } from "typescript";
import { create } from "zustand";

interface Payload {
  mobile: String;
  nationalCode?: string;
}

export interface ChargeAndInternetStoreInterface {
  payload: any;
  result?: any;
  isLoading: boolean;
  error: string;
  redirectUrl?: string;
  orderId?: string;
  internetOackages?: InternetPackageInterface[];
  set: (key: keyof ChargeAndInternetStoreInterface, value: any) => void;
  get: (key: keyof ChargeAndInternetStoreInterface) => any;
  buyCharge: (payload: chargeDto) => Promise<void>;
  buyInternet: (payload: InternetDto) => Promise<void>;
  getInternetPackages: () => Promise<void>;
}

const useChargeAndInternetStore = create<ChargeAndInternetStoreInterface>(
  (set, get) => ({
    payload: null,
    isLoading: false,
    error: "",
    set: (key, value) => set((state) => ({ ...state, [key]: value })),
    get: (key) => get()[key],
    buyCharge: async (payload: chargeDto) => {
      try {
        set((state) => ({ ...state, isLoading: true }));

        const token = localStorage.getItem("token");
        let res: AxiosDataResponse<any>;
        if (token) {
          res = await buyCharge(payload);
        } else {
          res = await buyChargeNoAuth(payload);
        }
        if (res?.result.redirectUrl) {
          set((state) => ({
            ...state,
            redirectUrl: res.result?.RedirectURL,
          }));
        }
        if (!res?.result.redirectUrl) {
          set((state) => ({
            ...state,
            result: res.result,
          }));
        }
        console.log(res);
        if (res.message) {
          set((state) => ({
            ...state,
            result: res.message,
          }));
        }
        console.log(get());
      } catch (e) {
        console.log(e);
        set((state) => ({
          ...state,
          result: e ?? "مشکل در برقراری سرویس",
        }));
      } finally {
        set((state) => ({ ...state, isLoading: false }));
      }
    },
    buyInternet: async (payload: InternetDto) => {
      try {
        try {
          set((state) => ({ ...state, isLoading: true }));

          const token = localStorage.getItem("token");
          let res: AxiosDataResponse<any>;
          if (token) {
            res = await buyInternet(payload);
          } else {
            res = await buyInternetNoAuth(payload);
          }
          if (res?.result.redirectUrl) {
            set((state) => ({
              ...state,
              redirectUrl: res.result?.RedirectURL,
            }));
            return;
          }
          if (res?.result.orderId) {
            set((state) => ({
              ...state,
              orderId: res.result.orderId,
            }));
            return;
          }
          console.log(res);
          if (res.message) {
            set((state) => ({
              ...state,
              result: res.message,
            }));
          }
          console.log(get());
        } catch (e) {
          console.log(e);
          set((state) => ({
            ...state,
            result: e ?? "مشکل در برقراری سرویس",
          }));
        } finally {
          set((state) => ({ ...state, isLoading: false }));
        }
      } catch (e) {
        console.log(e);
      } finally {
        set((state) => ({ ...state, isLoading: false }));
      }
    },
    getInternetPackages: async () => {
      try {
        set((state) => ({ ...state, isLoading: true }));
        const res = await getPackages();
        console.log(res);
        set((state) => ({
          ...state,
          internetOackages: res.result,
        }));
        console.log(get());
      } catch (e) {
        console.log(e);
      } finally {
        set((state) => ({ ...state, isLoading: false }));
      }
    },
  })
);

export default useChargeAndInternetStore;
