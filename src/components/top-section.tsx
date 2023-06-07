import Image from "next/image";
import "../globals.css";

export default function TopMenu() {
  return (
    <div className="top-menu">
      <div className="container py-0">
        <div className="row my-0">
          <div className="social-medias py-2 col col-6">
            <a
              href="https://www.linkedin.com/company/itoll"
              aria-label="linkedin"
              target="_blank"
              className="ml-3"
            >
              <Image
                src="/icons/LinkedIn.svg"
                alt="لینکدین"
                width={18}
                height={18}
                className="d-block"
              />
            </a>
            <a
              href="https://twitter.com/itoll_ir"
              aria-label="twitter"
              target="_blank"
              className="ml-3"
            >
              <Image
                src="/icons/Twitter.svg"
                alt="توییتر"
                width={18}
                height={18}
                className="d-block"
              />
            </a>
            <a
              href="https://www.instagram.com/itoll.ir"
              aria-label="instagram"
              target="_blank"
            >
              <Image
                src="/icons/Instagram.svg"
                alt="اینستاگرام"
                width={18}
                height={18}
                className="d-block"
              />
            </a>
          </div>
          <div className="py-2 col-sm-6 col-12">
            <div className="support d-flex align-center">
              <span>پشتیبانی های</span>
              <span className="splitter mx-4" />
              <a href="tel:02168207" className="tel">
                <Image
                  src="/icons/Call.svg"
                  alt="تماس"
                  width={16}
                  height={16}
                  className="mr-1"
                />{" "}
                  021-89710001(100 - 101)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
