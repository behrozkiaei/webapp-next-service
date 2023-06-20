import { OtpType } from "@/utils/enums";
import { AuthResult, AxiosDataResponse, User } from "@/utils/interfaces";
import { NajiResponse } from "@/utils/interfaces/naji.interface";
import { AxiosResponse } from "axios";
import { axiosInstance } from "./axios";
export const getAllOrders = async (
  from: string = "0",
  take : string = "10" 

): Promise<AxiosDataResponse<any>> => {
  try {
    const response: AxiosResponse = await axiosInstance().get(`/transaction/get-all-orders?from=${from}&take=${take}`);

    if (response.status == 200 || response.status == 201)
      return {
        status: response.data.status,
        message: response.data.message,
        result:response.data.result
      };

    return {
      status: false,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const getAllTransactions = async (
  from: string = "0",
  take : string = "10" 

): Promise<AxiosDataResponse<any>> => {
  try {
    const response: AxiosResponse = await axiosInstance().get(`/transaction/get-all-transactions?from=${from}&take=${take}`);

    if (response.status == 200 || response.status == 201)
      return {
        status: response.data.status,
        message: response.data.message,
        result:response.data.result
      };

    return {
      status: false,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

