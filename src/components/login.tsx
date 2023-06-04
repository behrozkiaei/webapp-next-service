import {
  enterMobile,
  sendOtpWhenIsLogin,
  sendOtpWhenIsNotLogin,
  verifyOtp,
  verifyOtpWhenIsLogin,
} from "@/logic/login.logic";
import useAuthStore from "@/store/login";
import { LoginMode, OtpType } from "@/utils/enums";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EnterMobile from "./login/enter-mobile";
import EnterCode from "./login/enter-otp";
import Icon from "@mui/material/Icon";
import  IconButton  from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface LoginModeProp {
  loginMode?: LoginMode;
  handleOpen: (res?: boolean) => void;
  data?: { mobile: string; nationalCode?: string };
  formtitle?: string;
  callback?: (data: any) => any;
}

type PageMode = "mobile" | "code";
const Login: React.FC<LoginModeProp> = ({
  loginMode = LoginMode.MOBILE,
  handleOpen,
  formtitle,
  data,
  callback,
}) => {
  const [mode, setMode] = useState<LoginMode>(loginMode ?? LoginMode.MOBILE );
  const [pageMode, setPageMode] = useState<PageMode>("mobile");
  const [mobile, setMobile] = useState<string>(data?.mobile ? data.mobile : "");
  const [code, setCode] = useState<string>();
  const [nationalCode, setNationalCode] = useState<string>(
    data?.nationalCode ? data.nationalCode : ""
  );
  const { set, isLoading: authLoading, error: authError ,result } = useAuthStore();
  useEffect(() => {
    toast(authError ?? "مشکل در برقرای سرویس رخ داده است");
  }, [authError]);
useEffect(()=>{
  if(loginMode == LoginMode.CODE){
    handleMobile()
  }
},[])
  const handleMobile = async () => {
    if (mode == LoginMode.MOBILE || mode == LoginMode.CODE) {
      const otpType = mode == LoginMode.MOBILE  ? OtpType.Login : OtpType.Payment
      const res = await enterMobile(mobile!,otpType, set);
      if (res) {
        setPageMode("code");
      }
    }
    if (mode == LoginMode.MOBILE_WITH_NATIONAL) {
      const res = await sendOtpWhenIsNotLogin(mobile!, nationalCode!, set);
      if (res) {
        setPageMode("code");
      }
    }
    if (mode == LoginMode.REGISTER_NAJI_TOKEN_BUT_AUTHED) {
      const res = await sendOtpWhenIsLogin(mobile!, nationalCode!, set);

      if (res) {
        setPageMode("code");
      }
    }
  };
  const handleCode = async (code: string) => {
    if (mode == LoginMode.MOBILE || mode == LoginMode.CODE) {
      let otpType =  mode == LoginMode.MOBILE  ? OtpType.Login: OtpType.Payment
      const res = await verifyOtp(code!, mobile, set);
      if (res) {
        handleOpen();
      }
    }
    if (mode == LoginMode.MOBILE_WITH_NATIONAL) {
      const res = await sendOtpWhenIsNotLogin(mobile!, nationalCode!, set);
      if (res) {
        handleOpen();
      }
    }
    if (mode == LoginMode.REGISTER_NAJI_TOKEN_BUT_AUTHED) {
      const res = await verifyOtpWhenIsLogin(
        mobile!,
        nationalCode!,
        code!,
        set
      );
      if (res) {
        handleOpen();
      }
    }
  };
  const resendOtp = async () => {
    await handleMobile();
    return true;
  };
  return (
    <>
      <div className="full-width d-flex justify-space-between align-center">
        <h2 className="pointer" >
          {formtitle ? formtitle : "فرم ثبت نام"}
        </h2>
        <div onClick={() => handleOpen()}>
          <IconButton>
                <CloseIcon />
          </IconButton>
        </div>
      </div>
      {pageMode == "mobile" && (
        <EnterMobile
          isLoading={authLoading}
          mode={mode}
          setMobile={(mobile) => {
            setMobile(mobile);
          }}
          setNational={(natinal) => {
            setNationalCode(natinal);
          }}
          submit={handleMobile}
          fixedValue={data}
        ></EnterMobile>
      )}

      {pageMode != "mobile" && (
        <EnterCode
          submit={async (code) => {
            await handleCode(code);
          }}
          isLoading={authLoading}
          changeNumber={() => {
            setPageMode("mobile");
          }}
          codeLength={(mode == LoginMode.MOBILE || mode == LoginMode.CODE)? 4 : 6}
          resendCode={resendOtp}
        />
      )}
    </>
  );
};
export default Login;
