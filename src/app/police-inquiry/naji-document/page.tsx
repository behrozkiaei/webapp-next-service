"use client"; // this is a client component 👈🏽
import DynamicAuthedButton from "@/components/Button/dynamic-auth-button";
import Aside from "@/components/aside";
import ModalView from "@/components/core/modal";
import MyInput from "@/components/core/my-input";
import WalletOrCredit from "@/components/core/payment-choose/wallet-or-credit";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Login from "@/components/login";
import TitleDesc from "@/components/title-desc";
import TopFooter from "@/components/top-footer";
import TopMenu from "@/components/top-menu";
import "@/globals.css";
import useInquiryStore from "@/store/inquiry";
import useAuthStore from "@/store/login";
import { LoginMode, NajiUiState } from "@/utils/enums";
import { QueryModeType } from "@/utils/interfaces/naji.interface";
import {
  phoneNumberValidator,
  verifyIranianNationalId,
} from "@persian-tools/persian-tools";
import { useEffect, useState } from "react";

export default function NegetivePoint() {
  const [nationalCode, setNationalCode] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [license, setLicense] = useState<string>();
  const [isOpen, toggleModal] = useState<boolean>(false);
  const [fromWallet, setPayment] = useState<boolean>(false);
  const [mobileHasError, setMobileError] = useState<boolean>(true);
  const [nationalHasError, setNationalError] = useState<boolean>(false);
  const [licenseHasError, setLicenseHasError] = useState<boolean>(false);
  const [queryMode, setQueryMode] = useState<QueryModeType>("");
  const [modeFa, setModeFa] = useState<string>("");
  const { set } = useInquiryStore();
  const { isLoggedIn } = useAuthStore();
  const [queryModeParam, setQueryModeParam] = useState<string>("");
  const {
    checkMobileAndNationalCodeExist,
    selectedNajiUser,
    activePlteInquiry,
    passportStatusInquiry,
    ountryLeavingStatusInquiry,
    redirectLink,
    orderId,
    uiState,
    isLoading,
  } = useInquiryStore((state) => ({
    checkMobileAndNationalCodeExist: state.checkMobileAndNationalCodeExist,
    selectedNajiUser: state.selectedNajiUser,
    activePlteInquiry: state.activePlteInquiry,
    ountryLeavingStatusInquiry: state.ountryLeavingStatusInquiry,
    passportStatusInquiry: state.passportStatusInquiry,
    redirectLink: state.redirectLink,
    orderId: state.orderId,
    uiState: state.uiState,
    isLoading: state.isLoading,
  }));
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    setQueryModeParam(urlParams.get("query") ?? "")
  },[])
  useEffect(() => {
    if (queryModeParam == "active-plates") {
      setQueryMode("active-plates");
      setModeFa("استعلام پلاک های فعال");
    }

    if (queryModeParam == "passport-status") {
      setQueryMode("passport-status");
      setModeFa("استعلام  وضعیت پاسپورت ");
    }

    if (queryModeParam == "country-leaving-status") {
      setQueryMode("country-leaving-status");
      setModeFa("استعلام وضعیت خروج از کشور ");
    }
  }, [queryModeParam]);
  useEffect(() => {
    if (uiState == NajiUiState.confirmNationAndMobileState) {
      toggleModal(true);
      set("uiState", undefined);
    }
  }, [uiState, set]);
  useEffect(() => {
    const verified =
      phoneNumberValidator(mobile) && verifyIranianNationalId(nationalCode);
    verified && checkMobileAndNationalCodeExist(mobile, nationalCode, true);
  }, [mobile, nationalCode, checkMobileAndNationalCodeExist]);
  const submitForm = async () => {
    if (selectedNajiUser) {
      queryModeParam == "active-plates" &&
        (await activePlteInquiry({
          fromWallet: fromWallet,
          najiId: selectedNajiUser.najiId ?? "",
        }));
      queryModeParam == "passport-status" &&
        (await passportStatusInquiry({
          fromWallet: fromWallet,
          najiId: selectedNajiUser.id,
        }));
      queryModeParam == "country-leaving-status" &&
        (await ountryLeavingStatusInquiry({
          fromWallet: isLoggedIn ? fromWallet : false,
          najiId: selectedNajiUser.id,
        }));
    }
  };
  useEffect(() => {
    typeof window !== "undefined" &&
      redirectLink &&
      location.replace(redirectLink);
    orderId &&
      typeof window !== "undefined" &&
      location.replace(`http:localhost:3010/receipt?id="${orderId}`);
  }, [redirectLink, orderId]);

  const onCloseModal = () => {
    checkMobileAndNationalCodeExist(mobile, nationalCode);
    toggleModal(false);
  };
  return (
    <>
      <title>
        های؛ خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین
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
                      title={modeFa}
                      desc1={`
                    هزینه ${modeFa} ۵,۲۰۰ تومان است. لازم به ذکر است که
                    های دخل و تصرفی در تعیین این هزینه ندارد.
                  `}
                    />
                    <div
                      style={{ width: "100%", maxWidth: "400px" }}
                      className="full-width"
                    >
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
                          mode="mobile"
                          title="شماره موبایل"
                          error={""}
                          placeholder="09*********"
                          maxLength={11}
                          minLength={11}
                          disabled={
                            isLoading || selectedNajiUser ? true : false
                          }
                          type="tel"
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
                          mode="nationalCode"
                          placeholder="کد ملی مالک خودرو "
                          maxLength={10}
                          minLength={10}
                          disabled={
                            isLoading || selectedNajiUser ? true : false
                          }
                          title="کد ملی"
                          type="tel"
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
                          text={`${modeFa}  5,000 تومان`}
                          width="100%"
                          height="40px"
                          disabled={!selectedNajiUser && !licenseHasError}
                          isLoading={isLoading}
                          onClick={submitForm}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div className="white">
              <TopFooter />
              <Footer />
              <ModalView
                isOpen={isOpen}
                modalStyle={{ width: "600px" }}
                onClose={onCloseModal}
              >
                <Login
                  loginMode={LoginMode.REGISTER_NAJI_TOKEN_BUT_AUTHED}
                  handleOpen={onCloseModal}
                  data={{
                    mobile,
                    nationalCode,
                  }}
                  formtitle="تایید کد ملی و شماره  موبایل"
                  callback={(value) => {
                    console.log(value);
                  }}
                />
              </ModalView>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
