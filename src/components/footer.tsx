"use-client";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import Toaster from "./core/toaster";

function Footer() {
  return (
    <footer className="footer px-3 px-md-0">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="row services">
                  <div className="footer-title col col-12">
                    <span> خدمات های </span>
                  </div>
                  <div className="col col-3">
                    <Link href="/query/khalafi" id="footer_pay_khalafi">
                      {" "}
                      استعلام خلافی{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link href="/query/freeway" id="footer_freeway_toll">
                      {" "}
                      عوارض آزادراهی آنیرو{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link href="/query/annual" id="footer_annual_toll">
                      {" "}
                      عوارض خودرو (سالیانه){" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link href="/query/tehran" id="footer_my_tehran">
                      {" "}
                      عوارض طرح ترافیک{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/query/freeway-tehran-shomal"
                      id="footer-freeway-tehran-shomal"
                    >
                      {" "}
                      عوارض آزادراه تهران شمال{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/query/car-transfer-tax"
                      id="footer-car-transfer-tax"
                    >
                      {" "}
                      مالیات نقل و انتقال خودرو{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/"
                      aria-current="page"
                      id="footer-marginal-park"
                      className="nuxt-link-exact-active nuxt-link-active"
                    >
                      {" "}
                      پارک حاشیه ای{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link href="/query/b2b" id="footer-b2b">
                      {" "}
                      همکاری با های{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/insurance/car/third-party"
                      id="footer_insurance"
                    >
                      {" "}
                      بیمه شخص ثالث خودرو{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link href="/insurance/car/body" id="footer_insurance_body">
                      {" "}
                      بیمه بدنه خودرو{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/insurance/motorcycle/third-party"
                      id="footer_insurance_motor"
                    >
                      {" "}
                      بیمه موتورسیکلت{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link href="/supplier" id="footer_supplier">
                      {" "}
                      همکاری با تامین کنندگان{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/insurance/car/third-party"
                      id="footer_insurance_instalment"
                    >
                      {" "}
                      بیمه شخص ثالث قسطی{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/carpardaz/car-clearance"
                      id="footer_carpardaz_car-clearance"
                    >
                      {" "}
                      ترخیص خودرو غیرحضوری{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/carpardaz/technical-inspection"
                      id="footer_carpardaz_technical-inspection"
                    >
                      {" "}
                      معاینه فنی غیرحضوری{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/carpardaz/license-replacement"
                      id="footer_carpardaz_license-replacement"
                    >
                      {" "}
                      تعویض پلاک غیرحضوری{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/technical-inspection"
                      id="footer_carpardaz_technical-inspection-reservation"
                    >
                      {" "}
                      رزرو نوبت معاینه فنی{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link href="/carpardaz" id="footer_carpardaz">
                      {" "}
                      کارپرداز{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link
                      href="/police-penalty/motor/detail"
                      id="footer_motor_cycle_police_penalty"
                    >
                      {" "}
                      استعلام خلافی موتور سیکلت{" "}
                    </Link>
                  </div>
                  <div className="col col-3">
                    <Link href="/service/car-price" id="footer_car_price">
                      {" "}
                      قیمت خودرو{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-12">
                <div className="row links">
                  <div className="footer-title col col-12">
                    <span> پیوندها </span>
                  </div>
                  <div className="col-md-12 col-3">
                    <Link
                      id="footer_news"
                      target="_blank"
                      href="https://itoll.com/news/"
                    >
                      {" "}
                      اخبار و مقالات{" "}
                    </Link>
                  </div>
                  <div className="col-md-12 col-3">
                    <Link href="/terms" id="legal_rules">
                      {" "}
                      قوانین و مقررات{" "}
                    </Link>
                  </div>
                  <div className="col-md-12 col-3">
                    <Link href="/about/itoll" id="footer_aboutus">
                      {" "}
                      درباره های{" "}
                    </Link>
                  </div>
                  <div className="col-md-12 col-3">
                    <Link href="/contact" id="footer_contact_us">
                      {" "}
                      تماس با ما{" "}
                    </Link>
                  </div>
                  <div className="col-md-12 col-3">
                    <Link href="/jobs" id="footer_jobs">
                      {" "}
                      فرصت‌های شغلی{" "}
                    </Link>
                  </div>
                  <div className="col-md-12 col-3">
                    <Link href="https://r.itoll.com/gn5ru" download="">
                      {" "}
                      سالنامه های{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="order-sm-3 col col-12 order-2">
                <div className="row">
                  <div className="footer-title col col-12">
                    <span> دانلود اپلیکیشن </span>
                  </div>
                  <div className="col-sm-3 col-md-2 col-6">
                    <Link
                      id="bazar-download"
                      href="https://r.itoll.com/footerbazar"
                      target="_blank"
                    >
                      <Image
                        src="/images/bazar.svg"
                        width={185}
                        height={48}
                        alt="دانلود از بازار"
                        loading="lazy"
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                  <div className="col-sm-3 col-md-2 col-6">
                    <Link
                      id="googleplay-download"
                      href="https://r.itoll.com/footergplay"
                      target="_blank"
                    >
                      <Image
                        src="/images/googleplay.svg"
                        width={185}
                        height={49}
                        alt="دانلود از گوگل‌پلی"
                        loading="lazy"
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>

                  <div className="col-sm-3 col-md-2 col-6">
                    <Link
                      id="direct-download"
                      href="https://r.itoll.com/footerapp"
                      target="_blank"
                    >
                      <Image
                        src="/images/android.svg"
                        width={185}
                        height={49}
                        alt="دانلود مستقیم برای اندروید"
                        loading="lazy"
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center mt-4 col col-12">
            <p>
              تمامی حقوق مادی و معنوی این سایت محفوظ و مربوط به شرکت کیان افق
              هیربد است.
            </p>
          </div>
        </div>
      </div>
      <Toaster/>
      
    </footer>
  );
}

export default Footer;
