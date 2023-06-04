import MyButton from "@/components/core/button";
import MyInput from "@/components/core/my-input";
import "@/globals.css";
import { LoginMode } from "@/utils/enums";
import { InputCallback } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
interface EnterMobile {
  setMobile: (mobile: string) => void;
  setNational: (national: string) => void;
  mode?: LoginMode;
  submit: () => void;
  isLoading: boolean;
  fixedValue?: { mobile: string; nationalCode?: string };
}
const EnterMobile: React.FC<EnterMobile> = ({
  setMobile,
  mode,
  submit,
  isLoading = false,
  fixedValue,
}) => {
  const [mobileState, setMobileState] = useState<InputCallback>({});
  const [national, setNational] = useState<InputCallback>({});
  useEffect(() => {
    console.log(fixedValue);
  }, []);

  return (
    <>
      <div className=" d-flex justify-center align-start  flex-column full-width ">
        <div className="devider  my-2 "></div>
        <p className="mb-1">شماره موبایل را وارد کنید: </p>
        <MyInput
          onChange={(data) => {
            setMobile(data.value);
            setMobileState(data);
            console.log(data);
          }}
          error={""}
          value={fixedValue?.mobile ? fixedValue?.mobile : ""}
          disabled={fixedValue?.mobile ? true : false}
          maxLength={11}
          minLength={11}
          type="tel"
          title="شماره موبایل"
          placeholder="09*********"
          mode="mobile"
          validations={[]}
        />
        {(mode == LoginMode.MOBILE_WITH_NATIONAL || mode == LoginMode.REGISTER_NAJI_TOKEN_BUT_AUTHED)&& (
          <>
            <p className="mb-1">کد ملی را وارد کنید: </p>
            <MyInput
              value={fixedValue?.nationalCode ? fixedValue?.nationalCode : ""}
              onChange={(data) => {
                setNational(data);
              }}
              error={""}
              maxLength={10}
              minLength={10}
              type="tel"
              disabled={fixedValue?.nationalCode ? true : false}
              title="شماره ملی"
              placeholder="**********"
              mode="nationalCode"
              validations={[]}
            />
          </>
        )}
        <div
          style={{ marginTop: "20px" }}
          className="full-width d-flex justify-center"
        >
          {(mode == LoginMode.MOBILE_WITH_NATIONAL || mode == LoginMode.REGISTER_NAJI_TOKEN_BUT_AUTHED) && (
            <MyButton
              text="ارسال کد"
              width="100%"
              height="40px"
              disabled={mobileState.hasError || national.hasError || isLoading}
              isLoading={isLoading}
              onClick={() => submit()}
            />
          )}
          {(mode == LoginMode.MOBILE ||mode == LoginMode.CODE) && (
            <MyButton
              text="ارسال کد"
              width="100%"
              height="40px"
              disabled={mobileState.hasError}
              isLoading={isLoading}
              onClick={() => submit()}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default EnterMobile;
