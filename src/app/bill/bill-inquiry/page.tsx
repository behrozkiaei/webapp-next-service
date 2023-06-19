"use client"; // this is a client component 👈🏽
import Aside from "@/components/aside";
import MyButton from "@/components/core/button";
import MyButtonGroup from "@/components/core/group-button/my-button-group";
import MyInput from "@/components/core/my-input";
import WalletOrCredit from "@/components/core/payment-choose/wallet-or-credit";
import useIsMdDown from "@/components/effects/isMdDown";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import TopFooter from "@/components/top-footer";
import TopMenu from "@/components/top-menu";
import "@/globals.css";
import useBillStore from "@/store/bill.store";
import useAuthStore from "@/store/login";
import { OperatorShortName } from "@/utils/enums/charge-internet";
import {
  isBillType,
  responseValueToFaKey,
  translateKey,
} from "@/utils/heplers/bill.helper";
import {
  OperatorTypeInterface,
  findOperator,
  operatorType,
  periodType,
  simTypes,
} from "@/utils/heplers/operator-finder";
import {
  BillAmountInquiryDto,
  BillInquiryResponseRepoInterface,
  BillType,
  Period,
} from "@/utils/interfaces/bill.interface";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Icons } from "react-toastify";
//import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';

import DynamicAuthedButton from "@/components/Button/dynamic-auth-button";
export default function Khalafi() {
  const [mobile, setMobile] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [bilIdHassError, setBillIdHasError] = useState<boolean>(true);
  const [mobileHasError, setMobileError] = useState<boolean>(true);
  const [selectedSimTypes, setSimType] = useState<string>("");
  const [fromWallet, setPayment] = useState<boolean>(false);
  const [operator, setOperator] = useState<OperatorTypeInterface>();
  const { isLoggedIn } = useAuthStore();
  const [operatorDefaultValue, setOperatorDefaultValue] = useState<number>(-1);
  const [periodDefaultValue, setPeriodDefaultValue] = useState<number>(0);
  const [simTypeDefault, setSymTypeDefault] = useState<string>("DAEMI");
  const [simTypeColor, setSimTypeColor] = useState<string>("lightblue");
  const [inquiyMode, setInquiryMode] = useState<BillType | "">("");
  const { isLoading, billCheckData, inquryBill, set, checkBill ,payBill,redirectUrl} =
    useBillStore();
  const isMdDown = useIsMdDown();
const [period , setPeriod] = useState<Period>(Period.mid)
  const [queryModeParam, setQueryModeParam] = useState<string>("");
  const submitForm = async () => {
    if (!isBillType(inquiyMode)) {
      return;
    }
    if (inquiyMode == BillType.mobile && !mobileHasError && operator) {
    }
    let payload: BillAmountInquiryDto = {
      bill_type: inquiyMode,
      mobile: mobile ?? undefined,
      operator: operator?.shortName,
      period: period ? period : Period.mid,
      phone: id ?? undefined,
      bill_id: id ?? undefined,
      participate_code: id ?? undefined,
    };
    await inquryBill(payload);
  };
useEffect(()=>{
  if (redirectUrl) window.location.href = redirectUrl;
},[redirectUrl])
  useEffect(() => {
    if (queryModeParam) {
      if (isBillType(queryModeParam)) {
        console.log("billTYo", queryModeParam);
        setInquiryMode(queryModeParam);
      }
    }
  });
  useEffect(() => {
    backBillCheckData();
  }, []);
  const backBillCheckData = () => {
    set("billCheckData", null);
  };
  useEffect(() => {
    if (mobile.length == 4) {
      let mobileBlueprint = mobile + "1111111";
      console.log(mobileBlueprint);
      const operatorData = findOperator(mobileBlueprint);
      if (operatorData) setOperatorDefaultValue(operatorData.index);
      if (operatorData) setSimTypeColor(operatorData?.color!);
    }
  }, [mobile]);
  const submitPayForm = async () => {
    const bill_id = billCheckData?.bill_id;
    const pay_id = billCheckData?.pay_id;
    if (bill_id && pay_id) {
      await payBill({
        payId: pay_id.toString(),
        billId: bill_id.toString(),
        frmoWallet : isLoggedIn ? fromWallet : false,
      });
    }
  };

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    setQueryModeParam(urlParams.get("query") ?? "")
  },[])
  return (
    <>
      <title>استعلام {inquiyMode ? translateKey(inquiyMode) : ""}</title>
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
                title={`استعلام ${translateKey(inquiyMode)}`}
                desc1={
                  billCheckData
                    ? "پرداخت قبض "
                    : inquiyMode == BillType.mobile
                    ? "شماره موبایل دائمی را وارد کنید:"
                    : inquiyMode == BillType.water ||
                      inquiyMode == BillType.elec
                    ? "شناسه اشترا را وارد کنید:"
                    : inquiyMode == BillType.phone
                    ? "شماره تلفن را وارد کنید:"
                    : inquiyMode == BillType.gas
                    ? "شناسه اشتراک کنتور را وارد کنید:"
                    : "استعلام به شناسه قبض"
                }
              >
                <div
                  style={{ width: "100%", maxWidth: "400px" }}
                  className="full-width"
                >
                  <>
                    <>
                      {inquiyMode == BillType.mobile && (
                        <>
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
                              minLength={11}
                              disabled={billCheckData ? true : false}
                              type="tel"
                              mode="mobile"
                              validations={[]}
                            />
                          </div>
                          {operatorDefaultValue >= 0 && (
                            <div className=" d-flex justify-space-between align-center mt-4 full-width">
                              <p className="mid_gray--text ">نام اپراتور:</p>
                              <MyButtonGroup
                                buttons={operatorType}
                                defaultValue={operatorDefaultValue}
                                onSelect={(value) => {
                                  setOperator(value as OperatorTypeInterface);
                                  setSimTypeColor(value.color);
                                }}
                              />
                            </div>
                          )}
                            {operatorDefaultValue >= 0 && (
                            <div className=" d-flex justify-space-between align-center mt-4 full-width">
                              <p className="mid_gray--text ">نوع دوره:</p>
                              <MyButtonGroup
                                buttons={periodType}
                                defaultValue={periodDefaultValue}
                                selectedColor={simTypeColor}
                                onSelect={(data) => {
                                  setPeriod(data.value as Period);
                                  // setSimTypeColor(value.color);
                                }}
                              />
                            </div>
                          )}
                        </>
                      )}
                      {inquiyMode != BillType.mobile && (
                        <div
                          className={`d-flex justify-center align-center ${
                            isMdDown ? "" : "mt-4"
                          }  full-width`}
                        >
                          <MyInput
                            value={id}
                            onChange={(data) => {
                              setId(data.value);
                              setBillIdHasError(data.hasError);
                            }}
                            title={
                              inquiyMode == "gas"
                                ? "کد اشتراک کنتر"
                                : inquiyMode == "phone"
                                ? "شماره تلفن به همراه  کد "
                                : "شناسه قبض آب، برق و ..."
                            }
                            error={""}
                            placeholder=""
                            maxLength={11}
                            minLength={5}
                            disabled={billCheckData ? true : false}
                            type="tel"
                            mode="number"
                            validations={[]}
                          />
                        </div>
                      )}
                    </>

                    {billCheckData && (
                      <div
                        className={`d-flex flex-column justify-space-between align-center full-width ${
                          isMdDown ? "" : "mt-4"
                        }  full-width`}
                      >
                        <List className="full-width">
                          {Object.keys(billCheckData).map((key) => (
                            <>
                              <ListItem
                                key={key}
                                className={`d-flex  justify-space-between align-center full-width ${
                                  isMdDown ? "" : "mt-4"
                                }  full-width`}
                              >
                                <>
                                  <p>{translateKey(key)}</p>
                                  <p>
                                    {responseValueToFaKey(
                                      key,
                                      billCheckData[
                                        key as keyof BillInquiryResponseRepoInterface
                                      ]
                                    )}
                                  </p>
                                </>
                              </ListItem>
                              <Divider />
                            </>
                          ))}
                          <div className="devider"></div>
                        </List>
                      </div>
                    )}

                    {(!mobileHasError || !bilIdHassError) && !billCheckData && (
                      <div
                        style={{ marginTop: "20px" }}
                        className="full-width d-flex justify-center"
                      >
                        <DynamicAuthedButton
                          text="استعلام"
                          width="100%"
                          height="40px"
                          disabled={isLoading}
                          isLoading={isLoading}
                          fromWallet={fromWallet}
                          onClick={submitForm}
                        />
                      </div>
                    )}
                      {isLoggedIn && billCheckData && (
                        <div className="d-flex justify-start align-center mt-4 full-width">
                          <WalletOrCredit
                            defaultSelected="credit"
                            onSelectionChange={(selected) => {
                              setPayment(selected == "wallet" ? true : false);
                            }}
                          />
                        </div>
                      )}
                    {billCheckData && (


                      <div
                        style={{ marginTop: "20px" }}
                        className="full-width d-flex justify-center"
                      >
                        <DynamicAuthedButton
                          text="پرداخت"
                          width="100%"
                          height="40px"
                          disabled={isLoading}
                          isLoading={isLoading}
                          fromWallet={fromWallet}
                          onClick={submitPayForm}
                        />
                      </div>
                    )}
                  </>
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
