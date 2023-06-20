"use client"; // this is a client component 👈🏽
import Aside from "@/components/aside";
import MyButton from "@/components/core/button";
import CheckboxWithLabel from "@/components/core/checkbox";
import MyInput from "@/components/core/my-input";
import Footer from "@/components/footer";
import PlateWrapper from "@/components/plate-wrapper";
import TopFooter from "@/components/top-footer";
import TopMenu from "@/components/top-menu";
import "@/globals.css";
import "./index.css";
import { useState } from "react";
import TitleDesc from "@/components/title-desc";

export default function Khalafi() {
  const [hideInput, setHideInput] = useState(true);
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
                {/* <Header></Header> */}
                <Aside></Aside>
              </div>

              <main className="d-flex text-center justify-center align-center">
                <div className="container d-flex justify-center align-center">
                  <div className="d-flex section flex-column justify-start align-center full-width">
                    <div className="d-flex justify-start flex-column align-start " style={{width:"80%"}}>
                      <h2> </h2>
                      <p className="mid_gray--text mb-8" >
                         
                      </p>
                    </div>
                    <TitleDesc
                    title=" استعلام و پرداخت جریمه طرح ترافیک "
                    desc1=" نکست سون؛ سامانه استعلام و پرداخت عوارض طرح ترافیک خودرو "
                    />
                    <div
                      style={{ width: "100%", maxWidth: "400px" }}
                      className="full-width mt-4"
                    >
                      <div className="row d-flex justify-center align-center plate-wrapper full-width">
                        <PlateWrapper></PlateWrapper>
                      </div>
                     
                      <div
                        style={{ marginTop: "20px" }}
                        className="full-width d-flex justify-center "
                      >
                        <MyButton
                          text="استعلام طرح ترافیک"
                          width="100%"
                          height="40px"
                          disabled={false}
                          isLoading={false}
                          onClick={() => {}}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
