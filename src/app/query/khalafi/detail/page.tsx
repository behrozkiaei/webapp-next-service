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
import { LoginMode, NajiUiState } from "@/utils/enums";
import { Plate, QueryModeType } from "@/utils/interfaces/naji.interface";
import { useEffect, useState, useRef } from "react";
import { useSearchParam, useToggle } from "react-use";
import "../index.css";
import {
  phoneNumberValidator,
  verifyIranianNationalId,
} from "@persian-tools/persian-tools";
// import { NextSeo } from "next-seo";

import WalletOrCredit from "@/components/core/payment-choose/wallet-or-credit";
import Mode from "@mui/icons-material/Mode";
import { setOriginalNode } from "typescript";
import useAuthStore from "@/store/login";
import Header from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import DynamicAuthedButton from "@/components/Button/dynamic-auth-button";

export default function Khalafi() {
  const [hideInput, setHideInput] = useState(true);
  const [nationalCode, setNationalCode] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const mobileRef = useRef<HTMLInputElement>(null);
  const nationalRef = useRef<HTMLInputElement>(null);
  const [najiId, setNajiId] = useState<string>("");
  const [plate, setPlate] = useState<Plate>();
  const [plateId, setPlateId] = useState<string>("");
  const [isOpen, toggleModal] = useState<boolean>(false);
  const [fromWallet, setPayment] = useState<boolean>(false);
  const [mobileHasError, setMobileError] = useState<boolean>(true);
  const [nationalHasError, setNationalError] = useState<boolean>(false);
  const { set, isLoading } = useInquiryStore();
  const [queryMode, setQueryMode] = useState<QueryModeType>("khalafi");
  const [modeFa, setModeFa] = useState<string>("استعلام خلافی خودرو");
  const queryModeParam = useSearchParam("query");
  const { isLoggedIn } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  useEffect(() => {
    if (queryModeParam == "document") {
      setQueryMode("document");
      setModeFa("استعلام پلاک های فعال");
    }
  }, [queryModeParam]);
  const {
    checkMobileAndNationalCodeExist,
    selectedNajiUser,
    selectedPlate,
    checkPlateIfExist,
    inquiryForviolationReport,
    DocumentStatusInquiry,
    addPlate,
    redirectLink,
    orderId,
    uiState,
  } = useInquiryStore((state) => ({
    checkMobileAndNationalCodeExist: state.checkMobileAndNationalCodeExist,
    selectedNajiUser: state.selectedNajiUser,
    selectedPlate: state.selectedPlate,
    checkPlateIfExist: state.checkPlateIfExist,
    inquiryForviolationReport: state.inquiryForviolationReport,
    DocumentStatusInquiry: state.DocumentStatusInquiry,
    addPlate: state.addPlate,
    redirectLink: state.redirectLink,
    orderId: state.orderId,
    uiState: state.uiState,
  }));
  const changeFocuse = () => {
    nationalRef.current?.focus();
  };
  useEffect(() => {
    if (plate && selectedNajiUser) checkPlateIfExist(plate);
    if (selectedNajiUser) {
      setMobile(selectedNajiUser.mobile ?? "");
      setNationalCode(selectedNajiUser.nationalCode ?? "");
    }
    if (selectedPlate) {
      setPlate(selectedPlate);
    }
  }, [plate, selectedNajiUser, selectedPlate, checkPlateIfExist]);

  useEffect(() => {
    if (uiState == NajiUiState.confirmNationAndMobileState) {
      toggleModal(true);
      set("uiState", undefined);
    }
    // console.log(uiState);
  }, [uiState, set]);

  useEffect(() => {
    if (phoneNumberValidator(mobile)) {
      console.log(mobileRef);
      console.log(nationalRef);
      // mobileRef.current?.blur()
      nationalRef.current?.focus();
    }
    const verified =
      phoneNumberValidator(mobile) && verifyIranianNationalId(nationalCode);
    verified && checkMobileAndNationalCodeExist(mobile, nationalCode, true);
  }, [mobile, nationalCode, checkMobileAndNationalCodeExist]);

  const submitForm = async () => {
    if (selectedPlate && selectedNajiUser) {
      if (selectedPlate.id && queryMode == "khalafi") {
        await inquiryForviolationReport(selectedPlate.id, fromWallet);
        return;
      }
      if (selectedPlate.id && selectedNajiUser && queryMode == "document") {
        await DocumentStatusInquiry({
          plateId: selectedPlate.id,
          fromWallet: isLoggedIn ? fromWallet : false,
        });
        return;
      }
    }
    if (plate && selectedNajiUser) {
      await addPlate({
        ...plate,
        najiId: selectedNajiUser.id,
      });
      submitForm();
      // await inquiryForviolationReport(selectedPlate?.id!, false);
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
    // toggleModal()

    toggleModal(false);
  };
  return (
    <>
      <title>
        های؛ خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین
      </title>
      {/* <NextSeo
      title="نکست سون، خدمات یکپارچه خودرو، قبض و سیم کارت"
      description="نکست سون|  خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین"
    /> */}
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
              <PageWrapper
                title={`${modeFa}`}
                desc1={`
                    هزینه ${modeFa} ۵,۲۰۰ تومان است. لازم به ذکر است که
                    های دخل و تصرفی در تعیین این هزینه ندارد.
                  `}
              >
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
                      plateData={selectedPlate ?? undefined}
                      disabled={isLoading || selectedPlate ? true : false}
                    ></PlateWrapper>
                  </div>

                   <div className=" d-flex justify-center align-center mt-4 full-width">
                    <MyInput
                      value={mobile}
                      onChange={(data) => {
                        setMobile(data.value);
                        setMobileError(data.hasError);
                      }}
                      title="شماره موبایل"
                      error={""}
                      placeholder="09*********"
                      maxLength={11}
                      inputRef={mobileRef}
                      minLength={11}
                      disabled={isLoading || selectedNajiUser ? true : false}
                      type="tel"
                      mode="mobile"
                      validations={[]}
                    />
                  </div>
                  <div className=" d-flex justify-center align-center mt-4  full-width">
                    <MyInput
                      value={nationalCode}
                      onChange={(data) => {
                        setNationalError(data.hasError);
                        setNationalCode(data.value);
                      }}
                      error={""}
                      placeholder="کد ملی مالک خودرو "
                      maxLength={10}
                      minLength={10}
                      inputRef={nationalRef}
                      mode="nationalCode"
                      disabled={isLoading || selectedNajiUser ? true : false}
                      title="کد ملی"
                      type="tel"
                      validations={[]}
                    />
                  </div>
                  <div className="devider mt-8"></div>
                  <div className="d-flex justify-start align-center mt-4 ">
                    <CheckboxWithLabel
                      // label="hj"
                      onCheckboxChange={(checked) => {
                        console.log(checked);
                        setHideInput(!checked);
                      }}
                    />
                    <div className="d-flex flex-column justify-start align-center">
                      <ul className="checkbox-box mr-4">
                        <li>استعلام نمره منفی گواینامه</li>
                        <li>
                          هزینه استعلام
                          <strong style={{ color: "var(--primary)" }}>
                            5,200 تومان
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`d-flex flex-column justify-start align-center mt-4 ${
                      hideInput ? "hide-input" : ""
                    }`}
                  >
                    <MyInput
                      value=""
                      onChange={() => {}}
                      error={""}
                      topTitle="شماره گواهینامه مالک خودرو"
                      placeholder="کد ده رقمی"
                      maxLength={10}
                      minLength={10}
                      type="text"
                      validations={[]}
                    />
                  </div>
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
                      fromWallet={isLoggedIn ? false : fromWallet ?? false}
                      disabled={!selectedNajiUser || (!selectedPlate && !plate)}
                      isLoading={isLoading}
                      onClick={submitForm}
                    />
                  </div> 
                </div>
              </PageWrapper>
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
