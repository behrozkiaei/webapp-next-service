"use client";
const axios = require("axios");
import {
  AxiosDataResponse,
  QueryLiceseNegetivePoint,
  QueryWithNajiId,
  QueryWithPlateId,
  ViolationQuery,
} from "@/utils/interfaces";
import {
  ActivePlateResopnse,
  CountryLeavingResponse,
  DocumentStatusResponse,
  DriverLicenseResponse,
  InquiryWithNoAuth,
  NajiResponse,
  NajiUser,
  NegetivePointResponse,
  PassportResponse,
  Plate,
  ViolationAggregateResponse,
  ViolationAggregateWithoutRegistrationResponse,
  ViolationImageResponse,
  ViolationReportResponse,
  plateData,
} from "@/utils/interfaces/naji.interface";
import { OrderInterface } from "@/utils/interfaces/order.interface";

const axiosInstance =()=>{
 const token = window && typeof window != "undefined" ?  localStorage.getItem("token") :"";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
  return axiosInstance ; 
}

export const driverLicenseRepo = async (
  data: QueryWithNajiId
): Promise<AxiosDataResponse<NajiResponse<DriverLicenseResponse[]>>> => {
  try {

    const response = await axiosInstance().post("/naji/driver-license", data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const negetivePointRepo = async (
  data: QueryLiceseNegetivePoint
): Promise<AxiosDataResponse<NajiResponse<NegetivePointResponse>>> => {
  try {
    const response = await axiosInstance().post("/naji/negetive-point", data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const activePlatesRepo = async (
  data: QueryWithNajiId
): Promise<AxiosDataResponse<NajiResponse<ActivePlateResopnse[]>>> => {
  try {
    const response = await axiosInstance().post("/naji/active-plates", data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const passportStatusRepo = async (
  data: QueryWithNajiId
): Promise<AxiosDataResponse<NajiResponse<PassportResponse>>> => {
  try {
    const response = await axiosInstance().post("/naji/passport-status", data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const countryLeavingStatusRepo = async (
  data: QueryWithNajiId
): Promise<AxiosDataResponse<NajiResponse<CountryLeavingResponse>>> => {
  try {
    const response = await axiosInstance().post(
      "/naji/country-leaving-status",
      data
    );
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const violationReportRepo = async (
  data: QueryWithPlateId
): Promise<AxiosDataResponse<NajiResponse<ViolationReportResponse>>> => {
  try {
    const response = await axiosInstance().post("/naji/violation-report", data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const violationImageRepo = async (
  data: ViolationQuery
): Promise<AxiosDataResponse<NajiResponse<ViolationImageResponse>>> => {
  try {
    const response = await axiosInstance().post("/naji/violation-image", data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const violationAggregateRepo = async (
  data: QueryWithPlateId
): Promise<AxiosDataResponse<NajiResponse<ViolationAggregateResponse>>> => {
  try {
    const response = await axiosInstance().post(
      "/naji/violation-aggregate",
      data
    );
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const violationAggregateWithoutRegistrationRepo = async (
  data: InquiryWithNoAuth
): Promise<
  AxiosDataResponse<NajiResponse<ViolationAggregateWithoutRegistrationResponse>>
> => {
  try {
    const response = await axiosInstance().post(
      "/naji/violation-aggregate-without-registeration",
      data
    );
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const DocumentStatusRepo = async (
  data: QueryWithPlateId
): Promise<AxiosDataResponse<NajiResponse<DocumentStatusResponse>>> => {
  try {
    const response = await axiosInstance().post("/naji/document-status", data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const AddPlateRepo = async (
  data: Plate
): Promise<AxiosDataResponse<any>> => {
  try {
    const response = await axiosInstance().post("/naji/add-plate", data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const getPlateRepo = async (): Promise<AxiosDataResponse<any>> => {
  try {
    const response = await axiosInstance().get("/naji/plates");
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const deletePlateRepo = async (
  id: string
): Promise<AxiosDataResponse<any>> => {
  try {
    const response = await axiosInstance().delete(`/naji/remove-plate/${id}`);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const getPlatesRepo = async (
  id: string
): Promise<AxiosDataResponse<plateData>> => {
  try {
    const response = await axiosInstance().get(`/naji/plates`);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const getMyNajiUsers = async (
  id: string
): Promise<AxiosDataResponse<NajiUser[]>> => {
  try {
    const response = await axiosInstance().get(`/naji/plates`);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const myInuiryResultRepo = async (
  page = 0
): Promise<AxiosDataResponse<any>> => {
  try {
    const response = await axiosInstance().get(`/naji/my-inquiry-result/${page}`);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const myInuiryResultByIdRepo = async (
  id = 0
): Promise<AxiosDataResponse<any>> => {
  try {
    const response = await axiosInstance().get(
      `/naji/my-inquiry-result-by-id/${id}`
    );
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const getNajiUserByMoblieRepo = async (
  mobile: string
): Promise<AxiosDataResponse<NajiUser>> => {
  try {
    const response = await axiosInstance().get(
      `/naji/my-naji-user-by-mobile`,
      JSON.stringify({ mobile })
    );
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const getNajiUserByMobileAndNationalRepo = async (
  mobile: string,
  nationalCode: string
): Promise<AxiosDataResponse<NajiUser>> => {
  try {
    const response = await axiosInstance().post(
      `/naji/my-naji-user-by-mobile-and-national`,
      { mobile: mobile, nationalCode: nationalCode }
    );

    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const getPlateByPlateInfo = async (
  data: Plate
): Promise<AxiosDataResponse<Plate>> => {
  try {
    const response = await axiosInstance().post(`/naji/plate-by-info`, data);
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const getOrderById = async (
  id: string,
): Promise<AxiosDataResponse<OrderInterface>> => {
  try {
 
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
      const axiosInstanceWithToken = axios.create({
        baseURL: apiUrl,
       
      });
      const response = await axiosInstanceWithToken.get(
        `/transactions/order-by-id/${id}`
      );
      return {
        status: response.data.status,
        result: response.data.result,
        message: response.data.message,
      };
    
    return { status: false, message: "مشکل در برقراری سرور " };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
