"use client"; // this is a client component 👈🏽
import { Inter } from "next/font/google";
import Aside from "../../../components/aside";
import DocumentSection from "../../../components/document-section";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import TopFooter from "../../../components/top-footer";
import TopMenu from "../../../components/top-menu";
import "@/globals.css"
import Image from "next/image";
import KhalafiDetail from "@/components/core/khalafi-detail";
const inter = Inter({ subsets: ["latin"] });


export default function Khalafi() {
  return (
    <>
      <title>
        نکست سون؛ خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین
      </title>
      <div>
        <div id="__layout">
          <div className="v-application v-application--is-rtl theme--light">
            <div className="v-application--wrap">
              <div className="default-bg">
                <div className="bg-color">
                  <div>
                    <TopMenu></TopMenu>
                    <div
                      style={{
                        height: "80px",
                      }}
                    >
                      <Header></Header>
                      <Aside></Aside>
                      <div className="v-dialog__container"></div>
                    </div>
                  </div>
                  <div className="v-dialog__container"></div>
                  <main
                    className="v-main main-container mb-1"
                    style={{
                      paddingTop: 0,
                      paddingRight: 0,
                      paddingBottom: 0,
                      paddingLeft: 0,
                    }}
                  >
                    <div className="v-main__wrap">
                      <div>
                        <div>
                          <div className="campaign-banners">
                            <Image
                              width={1920}
                              height={80}
                              src="/images/campaign-desktop.3df270d.webp"
                              alt="های شاپ"
                              style={{ width: "100%" }}
                              className="static-banner-className image-full"
                            ></Image>
                          </div>
                        </div>
                        <div className="container">
                          <div className="d-flex flex-column">
                            <h1>استعلام و پرداخت خلافی خودرو</h1>
                            <p>شیوه استعلام و پرداخت را انتخاب کنید:</p>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-4">
                              <KhalafiDetail
                                title= " خلافی با جزئیات (معادل خلافی پلیس +۱۰) "
                                price= "5,200 تومان"
                                buttonText="استعلام خلافی با جزئیات"
                                disabled ={false}
                                isLoading={false}
                                link ="/query/khalafi/detail"
                                onclick={()=>null}
                              />
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <KhalafiDetail
                                title= " خلافی تجمیعی (بدون جزئیات) "
                                price= "5,200 تومان"
                                buttonText="استعلام خلافی  تجمیعی"
                                disabled ={false}
                                isLoading={false}
                                link="/query/khalafi/aggregate"
                                onclick={()=>null }
                              />
                            </div>
                            <div className="col-sm-12 col-md-4">
                            <KhalafiDetail
                                title= " پرداخت با شناسه قبض خلافی"
                                price= "5,200 تومان"
                                buttonText=" پرداخت با قبض "
                                disabled ={false}
                                link="/bill/bill-check"
                                isLoading={false}
                                onclick={()=>null }
                              />
                            </div>
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
        </div>
      </div>
    </>
  );
}
