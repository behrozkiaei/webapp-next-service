import { AxiosResponse } from "axios";
import { axiosInstance, axiosInstanceNoAuth } from "./axios";
import { AxiosDataResponse } from "@/utils/interfaces";
import {
  BillAmountInquiryDto,
  PayBillNNotAuthed,
} from "@/utils/interfaces/bill.interface";
import { BillInquiryResponseRepoInterface } from "@/utils/interfaces/bill.interface";
import { CheckBillRepoResponseInterface } from "@/utils/interfaces/bill.interface";
import { BillPaymentResponse } from "@/utils/interfaces/bill.interface";
import { PayBillAuthed } from "@/utils/interfaces/bill.interface";

const axios = require("axios");
export const checkBillNNotAuthed = async (
  dto: PayBillNNotAuthed
): Promise<AxiosDataResponse<CheckBillRepoResponseInterface>> => {
  try {
    const response: AxiosResponse = await axiosInstanceNoAuth().post(
      "bill-no-auth/inquiry-by-pay-id-and-bill-id",
      {
        dto,
      }
    );

    if (response.status == 200 || response.status == 201)
      return {
        status: response.data.status,
        message: response.data.message,
        result: response.data.result,
      };

    return {
      status: false,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const payBillNNotAuthed = async (
  dto: PayBillNNotAuthed
): Promise<AxiosDataResponse<BillPaymentResponse>> => {
  try {
    const response: AxiosResponse = await axiosInstanceNoAuth().post(
      "bill-no-auth/pay-by-pay-id-bill-id",
      {
        dto,
      }
    );

    if (response.status == 200 || response.status == 201)
      return {
        status: response.data.status,
        message: response.data.message,
        result: response.data.result,
      };

    return {
      status: false,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
export const inquiryBillAuthed = async (
  dto: BillAmountInquiryDto
): Promise<AxiosDataResponse<BillInquiryResponseRepoInterface>> => {
  try {
    const response: AxiosResponse = await axiosInstance().post(
      "bill/inquiry-bill-amount",
      {
        dto,
      }
    );

    if (response.status == 200 || response.status == 201)
      return {
        status: response.data.status,
        message: response.data.message,
        result: response.data.result,
      };

    return {
      status: false,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};

export const payBillAuthed = async (
  dto: PayBillAuthed
): Promise<AxiosDataResponse<BillPaymentResponse>> => {
  try {
    const response: AxiosResponse = await axiosInstance().post(
      "bill/pay-bill-authed",
      {
        dto,
      }
    );

    if (response.status == 200 || response.status == 201)
      return {
        status: response.data.status,
        message: response.data.message,
        result: response.data.result,
      };

    return {
      status: false,
    };
  } catch (error) {
    return { status: false, message: "مشکل در برقراری سرور " };
  }
};
