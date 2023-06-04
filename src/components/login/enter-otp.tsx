import React, { useEffect, useState } from "react";
import MyButton from "../core/button";
import MyInput from "../core/my-input";
interface EnterMobile {
  changeNumber: () => void;
  submit: (code: string) => void;
  isLoading?: boolean;
  resendCode: () => Promise<boolean>;
  codeLength? :number
}
const EnterCode: React.FC<EnterMobile> = ({
  changeNumber,
  submit,
  isLoading = false,
  resendCode,
  codeLength=4
}) => {
  const handelChange = () => {
    changeNumber();
  };

  const [value, setValue] = useState<string>("");
  const [count, setCount] = useState(120);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const refresh = async () => {
    const resend = await resendCode();
    resend && setCount(120);
  };

  return (
    <>
      <div className=" d-flex justify-center align-start  flex-column full-width ">
        <p>کد ارسالی را وارد کنید ({count}):</p>
        <MyInput
          value=""
          onChange={(data) => {
            setValue(data.value)
          }}
          error={""}
          title="کد ارسالی"
          placeholder={codeLength == 6 ? "******" : "****"}
          maxLength={codeLength}
          minLength={codeLength}
          type="tel"
          validations={[]}
        />
        <div
          style={{ marginTop: "20px" }}
          className="full-width d-flex justify-center"
        >
          <MyButton
            text="ثبت"
            width="100%"
            height="40px"
            disabled={isLoading || count == 0 || value.length < 4}
            isLoading={isLoading}
            onClick={()=>submit(value)}
          />
        </div>
        <div className="full-width d-flex justify-center flex-column align-center">
          <p className="my-1" onClick={handelChange}>
            تغییر شماره همراه
          </p>
          {count == 0 && (
            <p className="my-1" onClick={refresh}>
              ارسال دوباره کد
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default EnterCode;
