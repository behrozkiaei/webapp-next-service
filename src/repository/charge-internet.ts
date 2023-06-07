import { AxiosDataResponse } from "@/utils/interfaces";
import { InternetDto, InternetPackageInterface, chargeDto } from "@/utils/interfaces/charge-internet";
import { AxiosResponse } from "axios";
import { axiosInstance, axiosInstanceNoAuth } from "./axios";


export const buyCharge = async (
    dto: chargeDto
  ): Promise<AxiosDataResponse<any>> => {
    try {
      const response: AxiosResponse = await axiosInstance().post("/transaction/buyCharge", {
        ...dto,
      });
  
      if (response.status == 200 || response.status == 201)
        return {
          status: response.data.status,
          message: response.data.message,
          result : response.data.result
        };
  
      return {
        status: false,
      };
    } catch (error) {
      return { status: false, message: "مشکل در برقراری سرور " };
    }
  };

  export const buyInternet = async (
    dto: InternetDto
  ): Promise<AxiosDataResponse<any>> => {
    try {
      const response: AxiosResponse = await axiosInstance().post("/transaction/buyInternet", {
        ...dto,
      });
  
      if (response.status == 200 || response.status == 201)
        return {
          status: response.data.status,
          message: response.data.message,
          result : response.data.result
        };
  
      return {
        status: false,
      };
    } catch (error) {
      return { status: false, message: "مشکل در برقراری سرور " };
    }
  };

  export const buyInternetNoAuth = async (
    dto: InternetDto
  ): Promise<AxiosDataResponse<any>> => {
    try {
      const response: AxiosResponse = await axiosInstanceNoAuth().post("/Services/buy-internet-no-auth", {
        ...dto,
      });
  
      if (response.status == 200 || response.status == 201)
        return {
          status: response.data.status,
          message: response.data.message,
          result : response.data.result
        };
  
      return {
        status: false,
      };
    } catch (error) {
      return { status: false, message: "مشکل در برقراری سرور " };
    }
  };

  export const buyChargeNoAuth = async (
    dto: chargeDto
  ): Promise<AxiosDataResponse<any>> => {
    try {
      const response: AxiosResponse = await axiosInstanceNoAuth().post("/Services/buy-charge-no-auth", {
        ...dto,
      });
  
      if (response.status == 200 || response.status == 201)
        return {
          status: response.data.status,
          message: response.data.message,
          result : response.data.result
        };
  
      return {
        status: false,
      };
    } catch (error) {
      return { status: false, message: "مشکل در برقراری سرور " };
    }
  };

  export const getPackages = async (): Promise<AxiosDataResponse<InternetPackageInterface[]>>=>{
    try {
        const response: AxiosResponse = await axiosInstanceNoAuth().get("/Services/getInternetPackages", {
        });
    
        if (response.status == 200 || response.status == 201)
          return {
            status: response.data.status,
            message: response.data.message,
            result : response.data.result
          };
    
        return {
          status: false,
        };
      } catch (error) {
        return { status: false, message: "مشکل در برقراری سرور " };
      }
  }