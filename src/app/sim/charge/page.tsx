"use client"; // this is a client component 👈🏽
import Aside from "@/components/aside";
import MyButton from "@/components/core/button";
import MyButtonGroup from "@/components/core/group-button/my-button-group";
import MyInput from "@/components/core/my-input";
import WalletOrCredit from "@/components/core/payment-choose/wallet-or-credit";
import ScrollableButtonList from "@/components/core/scrollable-button-list/ScrollableButtonList";
import ScrollableButtonListVertical from "@/components/core/scrollable-button-list/scrollable-y-buttons";
import useIsMdDown from "@/components/effects/isMdDown";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import TopFooter from "@/components/top-footer";
import TopMenu from "@/components/top-menu";
import "@/globals.css";
import useAuthStore from "@/store/login";
import {
  OperatorColors,
  OperatorType,
  SimTypes,
} from "@/utils/enums/charge-internet";
import {
  OperatorTypeInterface,
  amountBaseOnOperator,
  amounts,
  findOperator,
  operatorType,
  packages,
  simTypes,
} from "@/utils/heplers/operator-finder";
import { addCommas } from "@persian-tools/persian-tools";
import { channel } from "diagnostics_channel";
import { useEffect, useRef, useState } from "react";
import { useSearchParam } from "react-use";
import Skeleton from "@mui/material/Skeleton";
import DynamicAuthedButton from "@/components/Button/dynamic-auth-button";
import useChargeAndInternetStore from "@/store/charge-internet";
export default function Khalafi() {
  const [mobile, setMobile] = useState<string>("");
  const mobileRef = useRef<HTMLInputElement>(null);
  const [selectedSimTypes, setSimType] = useState<string>("");
  const [amount, setAmount] = useState<string>(amounts[0].value);
  const [fromWallet, setPayment] = useState<boolean>(false);
  const [operator, setOperator] = useState<OperatorTypeInterface>();
  const [mobileHasError, setMobileError] = useState<boolean>(true);
  const { isLoggedIn } = useAuthStore();
  const [operatorDefaultValue, setOperatorDefaultValue] = useState<number>(0);
  const [simTypeDefault, setSymTypeDefault] = useState<number>(0);
  const [simTypeColor, setSimTypeColor] = useState<string>("lightblue");
  const {buyCharge ,buyInternet , isLoading,error ,set,redirectUrl,orderId} = useChargeAndInternetStore()
  const submitForm = async () => {
    console.log("submitForm")
   const  cahrge = chargeOrInternet == "charge" ;
   cahrge && await buyCharge(
    {
      fromWallet: fromWallet ? fromWallet : false,
      operator: operator?.shortName ?? "MCI",
      amount: amount,
      mobile: mobile,
      charge_type: "normal"
    }
   )

   const  internet = chargeOrInternet == "internet" ;
   internet && await buyInternet(
    {
      fromWallet: fromWallet ? fromWallet : false,
      operator: operator?.shortName ?? "MCI",
      product_id: "",
      mobile: mobile,
      sim_type: selectedSimTypes
    }
   )
  };

  useEffect(()=>{
    set("redirectUrl" , null)
    set("orderId" , null)
  },[])

  useEffect(()=>{
    if(redirectUrl)
    window.location.href = redirectUrl
  },[redirectUrl])

  useEffect(()=>{
    if(orderId){

    }
    
  },[orderId])
  const isMdDown = useIsMdDown();
  const chargeOrInternet = useSearchParam("query");
  console.log(chargeOrInternet);
  useEffect(() => {
    if (mobile.length == 4) {
      let mobileBlueprint = mobile + "1111111";
      console.log(mobileBlueprint);
      const operatorData = findOperator(mobileBlueprint);
      if (operatorData) setOperatorDefaultValue(operatorData.index);
      if (operatorData) setSymTypeDefault(operatorData?.type!);
      if (operatorData) setSimTypeColor(operatorData?.color!);
    }
  }, [mobile]);
  return (
    <>
      {chargeOrInternet && (
        <title>خرید ${chargeOrInternet == "charge" ? "شارژ" : "اینترنت"}</title>
      )}

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
                title={
                  chargeOrInternet
                    ? `خرید ${
                        chargeOrInternet == "charge" ? "شارژ" : "اینترنت"
                      }`
                    : ""
                }
                desc1={`
                    شماره تماس خود را وارد کنید
                  `}
              >
                <div
                  style={{ width: "100%", maxWidth: "400px" }}
                  className="full-width"
                >
                  <div
                    className={`d-flex justify-center align-center ${
                      isMdDown ? "" : "mt-4"
                    }  full-width`}
                  >
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
                      disabled={false}
                      type="tel"
                      mode="mobile"
                      validations={[]}
                    />
                  </div>
                  {!mobileHasError && (
                    <div className=" d-flex justify-space-between align-center mt-4 full-width">
                      <p className="mid_gray--text ">نام اپراتور:</p>
                      <MyButtonGroup
                        buttons={operatorType}
                        defaultValue={operatorDefaultValue}
                        onSelect={(value) => {
                          setOperator(value as OperatorTypeInterface);
                          console.log(value);
                          setSimTypeColor(value.color);
                        }}
                      />
                    </div>
                  )}

                  {!mobileHasError && (
                    <div className=" d-flex justify-space-between align-center mt-4 full-width">
                      <p className="mid_gray--text ">نوع سیم کارت:</p>
                      <MyButtonGroup
                        buttons={simTypes}
                        selectedColor={simTypeColor}
                        defaultValue={0}
                        onSelect={(value) => {
                          setSimType(value.value);
                        }}
                      />
                    </div>
                  )}

                  {!mobileHasError && chargeOrInternet == "charge" && (
                    <>
                      <div className=" d-flex justify-space-between align-center mt-4 full-width">
                        <p className="mid_gray--text ">مبلغ به ریال:</p>
                        <MyButtonGroup
                          buttons={amountBaseOnOperator(operator?.value!)}
                          selectedColor={simTypeColor}
                          defaultValue={0}
                          onSelect={(value) => {
                            setAmount(value.value);
                          }}
                        />
                      </div>
                    </>
                  )}
                  {!mobileHasError && chargeOrInternet == "internet" && (
                    <div className="d-flex justify-start align-center mt-4 px-1 full-width">
                      <ScrollableButtonList
                        buttons={["یکماهه", "ساعتی", "هفتگی", "سالانه"]}
                        buttonWidth={100}
                        buttonMaxWidth={150}
                      />
                    </div>
                  )}
                  {!mobileHasError && chargeOrInternet == "internet" && (
                    <div className="d-flex justify-start align-center my-1 px-2 full-width">
                      <ScrollableButtonListVertical
                        buttons={packages}
                        height={200}
                      />
                    </div>
                  )}
                  {isLoggedIn && !mobileHasError && (
                    <div className="d-flex justify-start align-center mt-4 full-width">
                      <WalletOrCredit
                        defaultSelected="credit"
                        onSelectionChange={(selected) => {
                          setPayment(selected == "wallet" ? true : false);
                        }}
                      />
                    </div>
                  )}
                  {!mobileHasError && amount && (
                    <div
                      style={{ marginTop: "20px" }}
                      className="full-width d-flex justify-center"
                    >
                      <DynamicAuthedButton
                        text="خرید"
                        width="100%"
                        height="40px"
                        disabled={isLoading}
                        isLoading={isLoading}
                        forceAuth={false}
                        fromWallet={isLoggedIn ?  fromWallet : false}
                        onClick={submitForm}
                      />
                    </div>
                  )}
                </div>
              </PageWrapper>
            </div>
            <div className="white">
              <TopFooter />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
