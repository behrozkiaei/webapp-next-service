import ServicesSection from "@/components/serivces-section";
import Aside from "@/components/aside";
import DocumentSection from "@/components/document-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LandingSwiper from "@/components/landing-swiper";
import MainPageDesc from "@/components/main-page-description";
import PlateWrapper from "@/components/plate-wrapper";
import TopFooter from "@/components/top-footer";
import TopMenu from "@/components/top-menu";

import Image from "next/image";
import SimServices from "@/components/sim-services";
import BillServices from "@/components/bill-services";
import { NextSeo } from "next-seo";

export default function Page() {
  return (
    <>

      <title>
        های؛ خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین
      </title>
      <NextSeo
      title="نکست سون، خدمات یکپارچه خودرو، قبض و سیم کارت"
      description="نکست سون|  خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین"
    />
    
      <div>
        <div id="__layout">
          <div className="v-application v-application--is-rtl theme--light">
            <div className="v-application--wrap">
              <div className="default-bg">
                <div className="bg-color">
                  <div>
                    <TopMenu></TopMenu>
                    <div>
                      <Header isTransparent={true}></Header>
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
                      <div className="slider ">
                        <LandingSwiper></LandingSwiper>
                      </div>
                      <div className="container transform-top">
                        <div className="row plate-frame">
                          <div className="mdAndUp col col-6">
                            <h1>های؛ همه خدمات </h1>
                            <p>
                              به راحتی پلاک خودرو خود را ذخیره کنید تا از پرداختی های خود مطلع شوید
                            </p>
                          </div>
                          <div className="d-flex justify-end col-md-6 col-12">
                            <PlateWrapper title=""></PlateWrapper>
                          </div>
                        </div>
                      </div>
                      <div className="quick-access-section">
                        <div className="container">
                          <div className="row service-wrapper">
                            <div className="col col-12">
                              <div className="title-section">
                                <div className="text-dot" />
                                <h2>خدمات سیم کارت</h2>
                              </div>
                              <SimServices />
                            </div>
                            <div className="col col-12">
                              <div className="title-section">
                                <div className="text-dot" />
                                <h2>خدمات قبوض</h2>
                              </div>
                              <BillServices />
                            </div>
                            <div className="col col-12">
                              <div className="title-section">
                                <div className="text-dot" />
                                <h2>بدهی‌های خودرو</h2>
                              </div>
                              <ServicesSection />
                            </div>
                            <div className="col col-12">
                              <div className="title-section">
                                <div className="text-dot" />
                                <h2>استعلام مدارک</h2>
                              </div>
                              <DocumentSection />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="container">
                        <a id="static-banner" href="#" target="_blank">
                          <div>
                            <Image
                              width={990}
                              height={426}
                              src="/images/itoll-shop-desktop.webp"
                              alt="های شاپ"
                              className="static-banner-className image-full"
                            />
                          </div>
                        </a>
                      </div> */}
                      {/* <MainPageDesc /> */}
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
