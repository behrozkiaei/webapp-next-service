"use client"; // this is a client component 👈🏽
import Aside from "@/components/aside";
import MyButton from "@/components/core/button";
import MyInput from "@/components/core/my-input";
import useIsMdDown from "@/components/effects/isMdDown";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import { ListMakerFromObject } from "@/components/receipt/list-maker-from-object";
import TopFooter from "@/components/top-footer";
import TopMenu from "@/components/top-menu";
import "@/globals.css";
import useBillStore from "@/store/bill.store";
import useAuthStore from "@/store/login";
import {
  responseValueToFaKey,
  translateKey,
} from "@/utils/heplers/bill.helper";
import { BillInquiryResponseRepoInterface } from "@/utils/interfaces/bill.interface";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useEffect, useState } from "react";
//import { NextSeo } from "next-seo";

export default function Khalafi() {
  const [payId, setPayId] = useState<string>("");
  const [billId, setBillId] = useState<string>("");
  const [fromWallet, setPayment] = useState<boolean>(false);
  const [billHassError, setBillHassError] = useState<boolean>(true);
  const [payIdHassError, setPayIdHassError] = useState<boolean>(true);
  const { isLoggedIn } = useAuthStore();
  const { isLoading, billCheckData, checkBill, set } = useBillStore();
  const submitForm = async () => {
    await checkBill({
      billId: billId,
      payId: payId,
    });
  };
  useEffect(() => {
    return set("billCheckData", null);
  }, []);
  const isMdDown = useIsMdDown();

  return (
    <>
      <title>استعلام قبض</title>
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
                title="استعلام قبض با شناسه پرداخت"
                desc1="شناسه قبض و شناسه پرداخت را وارد کنید"
              >
                <div
                  style={{ width: "100%", maxWidth: "400px" }}
                  className="full-width"
                >
                  {!billCheckData && (
                    <>
                      <div
                        className={`d-flex justify-center align-center ${
                          isMdDown ? "" : "mt-4"
                        }  full-width`}
                      >
                        <MyInput
                          value={billId}
                          onChange={(data) => {
                            setBillId(data.value);
                            setBillHassError(data.hasError);
                          }}
                          title="شناسه قبض "
                          error={""}
                          placeholder=""
                          maxLength={12}
                          minLength={5}
                          focused={true}
                          type="tel"
                          mode="code"
                        />
                      </div>
                      <div
                        className={`d-flex justify-center align-center ${
                          isMdDown ? "" : "mt-4"
                        }  full-width`}
                      >
                        <MyInput
                          value={payId}
                          onChange={(data) => {
                            setPayId(data.value);
                            setPayIdHassError(data.hasError);
                          }}
                          title="شناسه پرداخت "
                          error={""}
                          placeholder=""
                          maxLength={12}
                          minLength={5}
                          type="tel"
                          mode="code"
                        />
                      </div>

                      <div
                        style={{ marginTop: "20px" }}
                        className="full-width d-flex justify-center"
                      >
                        <MyButton
                          text="استعلام"
                          width="100%"
                          height="40px"
                          disabled={billHassError || payIdHassError}
                          isLoading={isLoading}
                          onClick={submitForm}
                        />
                      </div>
                    </>
                  )}
                  {billCheckData && (
                    <div
                      className={`d-flex flex-column justify-center align-center ${
                        isMdDown ? "" : "mt-4"
                      }  full-width`}
                    >
                      <ListMakerFromObject
                        obj={billCheckData}
                        ignoredKey={["code", "orderId"]}
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
