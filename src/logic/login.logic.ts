"use client";


import {
  signIn,
  verifyOtpReq,
  sendOtpWhenIsLoginReq,
  verifyOtpWhenIsLoginReq,
  fetchMeRepo,
  verifyOtpWhenIsNotLoginReq,
  sendOtpWhenIsNotLoginReq,
} from "@/repository/login";
import useAuthStore, { StoreState } from "@/store/login";
import { OtpType } from "@/utils/enums";
import { getCache, setCache } from "@/utils/helpers/cache-repo";
export const enterMobile = async (
  mobile: string,
  otpType : OtpType,
  set: (key: keyof StoreState, value: any) => void
): Promise<boolean> => {
  // const { set } = useAuthStore();
  try {
    set("isLoading", true);
    const res = await signIn(mobile,otpType);
    console.log(res);
    if (res.status) {
      set("payload", {
        mobile,
      });
    }
    set("isLoading", false);
    return res.status;
  } catch {
    return false;
  }
};
export const sendOtpWhenIsLogin = async (
  mobile: string,
  nationalCode: string,
  set: (key: keyof StoreState, value: any) => void
): Promise<boolean> => {
  try {
    set("isLoading", true);
    const res = await sendOtpWhenIsLoginReq(mobile, nationalCode);
    if (res.status) {
      set("payload", {
        mobile,
        nationalCode,
      });
    }
    set("isLoading", false);
    return res.status;
  } catch {
    return false;
  }
};
export const sendOtpWhenIsNotLogin = async (
  mobile: string,
  nationalCode: string,
  set: (key: keyof StoreState, value: any) => void
): Promise<boolean> => {
  // const { set } = useAuthStore();
  try {
    set("isLoading", true);
    const res = await sendOtpWhenIsNotLoginReq(mobile, nationalCode);
    if (res.status) {
      set("payload", {
        mobile,
        nationalCode,
      });
    }
    set("isLoading", false);
    return res.status;
  } catch {
    return false;
  }
};
export const verifyOtp = async (
  code: string,
  mobile: string,
  set: (key: keyof StoreState, value: any) => void
): Promise<boolean> => {
  try {
    set("isLoading", true);
    const res = await verifyOtpReq(mobile, code);
    console.log("verify otp", res);
    if (res.status && res.result?.token) {
      localStorage.setItem("token" , res.result?.token!)
      await setCache('canTransaction', "true", 60);
      console.log(await getCache('canTransaction'));

      set("isLoggedIn", true);
      const result = await fetchMe(set);
    }
    if (res.status && res.result?.otpType == OtpType.Payment) {
      await setCache('canTransaction', true, 60);
      console.log(await getCache('canTransaction'));
    }
    set("isLoading", false);
    return true;
  } catch {
    return false;
  }
};

export const verifyOtpWhenIsLogin = async (
  mobile: string,
  nationalCode: string,
  otp: string,
  set: (key: keyof StoreState, value: any) => void
): Promise<boolean> => {
  try {
    set("isLoading", true);
    const res = await verifyOtpWhenIsLoginReq({
      mobile,
      nationalCode,
      otp,
    });
    set("isLoading", false);
    await fetchMe(set);
    return true;
  } catch {
    set("isLoading", false);
    return false;
  }
};
export const verifyOtpWhenIsNotLogin = async (
  mobile: string,
  nationalCode: string,
  otp: string,
  set: (key: keyof StoreState, value: any) => void
): Promise<boolean> => {
  try {
    set("isLoading", true);
    const res = await verifyOtpWhenIsNotLoginReq({
      mobile,
      nationalCode,
      otp,
    });
    set("isLoading", false);
    if (res.status) {
      set("isLoggedIn", true);
      if ( typeof window !== "undefined" && window.localStorage && window ) {
        window.localStorage.setItem("token", res.result?.token!);
      }
      await fetchMe(set);
    }
    return true;
  } catch {
    set("isLoading", false);
    return false;
  }
};
export const fetchMe = async (
  set: (key: keyof StoreState, value: any) => void
): Promise<boolean> => {
  try {
    set("isLoading", true);
    const res = await fetchMeRepo();
    set("isLoading", false);
    if (res.status) {
      set("result", res.result);
      set("isLoggedIn", true);
      return true;
    }else{
      set("isLoggedIn", false); 
    }

    return false;
  } catch {
    set("isLoading", false);
    return false;
  }
};
export const logOut = async (
  set: (key: keyof StoreState, value: any) => void
): Promise<boolean> => {
  if (typeof window !== "undefined" && window.localStorage && window ) {
    set("isLoading", true);
    typeof window !== "undefined" && localStorage.removeItem("token");
    set("isLoggedIn", false);
    set("isLoading", false);
  }
  return true;
};
