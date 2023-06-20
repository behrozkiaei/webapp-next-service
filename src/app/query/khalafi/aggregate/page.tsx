"use client"; // this is a client component 👈🏽
import Aside from "@/components/aside";
import MyButton from "@/components/core/button";
import CheckboxWithLabel from "@/components/core/checkbox";
import ModalView from "@/components/core/modal";
import MyInput from "@/components/core/my-input";
import Footer from "@/components/footer";
import Login from "@/components/login";
import PlateWrapper from "@/components/plate-wrapper";
import TitleDesc from "@/components/title-desc";
import TopFooter from "@/components/top-footer";
import TopMenu from "@/components/top-menu";
import "@/globals.css";
import useInquiryStore from "@/store/inquiry";
import { LoginMode, NajiUiState, PlateType } from "@/utils/enums";
import { InquiryWithNoAuth, Plate } from "@/utils/interfaces/naji.interface";
import { useEffect, useState } from "react";
import { useToggle } from "react-use";
import "../index.css";
import { phoneNumberValidator, verifyIranianNationalId } from "@persian-tools/persian-tools";
import useAuthStore from "@/store/login";
import WalletOrCredit from "@/components/core/payment-choose/wallet-or-credit";
import Header from "@/components/header";
import DynamicAuthedButton from "@/components/Button/dynamic-auth-button";

export default function Khalafi() {
  const [nationalCode, setNationalCode] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [plate, setPlate] = useState<Plate>();
  const [plateId, setPlateId] = useState<string>("");
  const [mobileHasError, setMobileError] = useState<boolean>(true);
  const [nationalHasError, setNationalError] = useState<boolean>(false);
  const [validInput, setValidation] = useState<boolean>(false)
  const {set, isLoading } = useInquiryStore();
  const {isLoggedIn} = useAuthStore();
  const [fromWallet, setPayment] = useState<boolean>(false);

  const {
    inquiryForviolationAggregateNotAuthReport,
    redirectLink,
    uiState
  } = useInquiryStore((state) => ({
    inquiryForviolationAggregateNotAuthReport: state.inquiryForviolationAggregateNotAuthReport,
    redirectLink: state.redirectLink,
    uiState: state.uiState
  }));
  useEffect(()=>{
   const isValid =  phoneNumberValidator(mobile) && verifyIranianNationalId(nationalCode) && plate
   isValid && setValidation(true)
  },[mobile,nationalCode,plate])

  const submitForm = async () => {
    const verified = phoneNumberValidator(mobile) && verifyIranianNationalId(nationalCode) && plate
    verified &&
      await inquiryForviolationAggregateNotAuthReport({
        ...plate,
        mobile,
        nationalCode,
        fromWallet : isLoggedIn ? fromWallet : false,
        type:PlateType.CAR
      } as InquiryWithNoAuth);
  };
  useEffect(() => {
    redirectLink && 
    typeof window !== 'undefined' && location.replace(redirectLink);
  }, [redirectLink]);
 
  return (
    <>
      <title>
        نکست سون؛ خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین
      </title>
      <div>
        <div className="--is-rtl theme--light">
          <div className="v-application--wrap">
            <div className="bg-color">
              <TopMenu></TopMenu>
              <div
                style={{
                  height: "80px",
                }}
              >
                <Header></Header>
                <Aside></Aside>
              </div>

              <main className="d-flex text-center justify-center align-center">
                <div className="container d-flex justify-center align-center">
                  <div className="d-flex section flex-column justify-start align-center full-width">
                    <div
                      className="d-flex justify-start flex-column align-start"
                      style={{ width: "80%" }}
                    >
                      <h2> </h2>
                      <p className="mid_gray--text mb-8"></p>
                    </div>
                    <TitleDesc
                      title=" استعلام و پرداخت خلافی خودرو"
                      desc1="
                    هزینه استعلام خلافی ۵,۲۰۰ تومان است. لازم به ذکر است که
                    های دخل و تصرفی در تعیین این هزینه ندارد.
                  "
                    />
                    <div
                      style={{ width: "100%", maxWidth: "400px" }}
                      className="full-width"
                    >
                      <div className="row d-flex justify-center align-center plate-wrapper full-width">
                        <PlateWrapper
                          onChange={(data) => {
                            console.log(data);
                            setPlate(data);
                          }}
                          disabled={isLoading || validInput }
                        ></PlateWrapper>
                      </div>

                      <div className=" d-flex justify-center align-center mt-4 full-width">
                        <MyInput
                          value=""
                          onChange={(data) => {
                            setMobile(data.value);
                            setMobileError(data.hasError);
                            console.log(data);
                            if (!data.hasError) {
                              // checkMobileAndNationalCodeExist();
                            }
                          }}
                          title="شماره موبایل"
                          error={""}
                          placeholder="*********09"
                          maxLength={11}
                          minLength={11}
                          disabled={
                            isLoading 
                          }
                          type="شماره موبایل مالک خودرو"
                          validations={[]}
                        />
                      </div>
                      <div className=" d-flex justify-center align-center mt-4  full-width">
                        <MyInput
                          value=""
                          onChange={(data) => {
                            setNationalError(data.hasError);
                            setNationalCode(data.value);
                          }}
                          error={""}
                          placeholder="کد ملی مالک خودرو "
                          maxLength={10}
                          minLength={10}
                          disabled={
                            isLoading 
                          }
                          title="کد ملی"
                          type="text"
                          validations={[]}
                        />
                      </div>
                      <div className="devider mt-8"></div>
                      {isLoggedIn && (
                        <div className="d-flex justify-start align-center mt-4 full-width">
                          <WalletOrCredit
                            defaultSelected="credit"
                            onSelectionChange={(selected) => {
                              setPayment(selected == "wallet" ? true : false);
                            }}
                          />
                        </div>
                      )}
                     
                      <div
                        style={{ marginTop: "20px" }}
                        className="full-width d-flex justify-center"
                      >
                        <DynamicAuthedButton
                          text="استعلام خلافی   تومان 5,000"
                          width="100%"
                          height="40px"
                          disabled={!validInput}
                          isLoading={isLoading}
                          fromWallet ={isLoggedIn? false : fromWallet ?? false}
                          onClick={submitForm}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
