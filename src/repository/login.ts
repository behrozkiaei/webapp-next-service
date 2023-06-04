import { OtpType } from "@/utils/enums";
import { AuthResult, AxiosDataResponse, User } from "@/utils/interfaces";
import { NajiResponse } from "@/utils/interfaces/naji.interface";
import { AxiosResponse } from "axios";
const axios = require("axios");

const axiosInstance =()=>{
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ;

  const axiosInstance = axios.create({
    baseURL: apiUrl,
  });
   return axiosInstance ; 
 }
 
export const signIn = async (
  mobile: string,
  otpType : OtpType = OtpType.Login ,
): Promise<AxiosDataResponse<any>> => {
  try {
    const response: AxiosResponse = await axiosInstance().post("/auth/signIn", {
      mobile,
      otpType
    });

    if (response.status == 200 || response.status == 201)
      return {
        status: response.data.status,
        message: response.data.message,
      };

    return {
      status: false,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const verifyOtpReq = async (
  mobile: string,
  password: string,
): Promise<AxiosDataResponse<AuthResult>> => {
  try {
    const response = await axiosInstance().post("/auth/verify-otp", {
      mobile,
      password,
      fromWeb: true,
    });
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const sendOtpWhenIsLoginReq = async (
  mobile: string,
  nationalCode: string
): Promise<AxiosDataResponse<any>> => {
  try {

      
      var token = window.localStorage ?  localStorage.getItem("token"):"";
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const axiosInstanceWithToken = axios.create({
        baseURL: apiUrl,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response: AxiosResponse = await axiosInstanceWithToken.post(
        "/naji/send-otp-when-is-login",
        {
          mobile,
          nationalCode,
        }
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

export const verifyOtpWhenIsLoginReq = async ({
  mobile,
  nationalCode,
  otp,
}: {
  mobile: string;
  nationalCode: string;
  otp: string;
}): Promise<AxiosDataResponse<any>> => {
  try {
      var token = localStorage.getItem("token");
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
      const axiosInstanceWithToken = axios.create({
        baseURL: apiUrl,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await axiosInstanceWithToken.post(
        "/naji/verify-otp-when-is-login",
        {
          mobile,
          nationalCode,
          otp,
        }
      );
      return {
        status: response.data.status,
        result: response.data.result,
      };
    
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const sendOtpWhenIsNotLoginReq = async (
  mobile: string,
  nationalCode: string
): Promise<AxiosDataResponse<any>> => {
  try {
    const response: AxiosResponse = await axiosInstance().post(
      "/naji-auth/send-otp-when-not-login",
      {
        mobile,
        nationalCode,
      }
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

export const verifyOtpWhenIsNotLoginReq = async ({
  mobile,
  nationalCode,
  otp,
}: {
  mobile: string;
  nationalCode: string;
  otp: string;
}): Promise<AxiosDataResponse<any>> => {
  try {
    const response = await axiosInstance().post(
      "/naji-auth/verify-otp-when-not-login",
      {
        mobile,
        nationalCode,
        otp,
      }
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

export const fetchMeRepo = async (): Promise<AxiosDataResponse<User>> => {
  try {
    if(window && typeof window !== 'undefined' && window.localStorage){
    // var token = "";
    var token = localStorage.getItem("token");
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.get("/users/me");
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  }
  return { status: false, message: "مشکل در برقراری سرور " };
  } catch (e) {
    console.log(e);
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const IncreaseAount = async (
  amount: string
): Promise<AxiosDataResponse<NajiResponse<any>>> => {
  try {
    if(window && typeof window !== 'undefined' && window.localStorage){
    var token =  localStorage.getItem("token");
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
    const axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console;
    const response = await axiosInstance.post("/wallet/user-increase-wallet", {
      amount: amount,
    });
    return {
      status: response.data.status,
      result: response.data.result,
      message: response.data.message,
    };
  }
  return { status: false, message: "مشکل در برقراری سرور " };
  } catch (e) {
    console.log(e);
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
