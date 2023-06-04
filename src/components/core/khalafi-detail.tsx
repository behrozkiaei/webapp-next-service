"use client"; // this is a client component 👈🏽
import "../css/khalafi-detail.css";
import "@/globals.css"
import Check from "../svg/check";
import MyButton from "./button";
import useBreakpoint from "../effects/breakpoint-effect";
import Link from "next/link";

interface KhalafiDetail {
  title: string;
  price: string;
  buttonText: string;
  disabled: boolean;
  isLoading: boolean;
  onclick: () => void;
  link?: string;
}

const KhalafiDetail: React.FC<KhalafiDetail> = ({
  title,
  link,
  price,
  onclick,
  isLoading = false,
  disabled = false,
  buttonText,
}) => {
  const breakpoint = useBreakpoint();

  return (
    <>
      <div className="d-flex flex-column v-application section">
        <p className="title">{title}</p>
        <ul>
          <li className="d-flex justify-start align-center">
            <Check />
            <p>جزئیات کامل خلافی (مکان، زمان، نوع و...)</p>
          </li>
          <li className="d-flex justify-start align-center">
            <Check />
            <p>امکان مشاهده عکس خلافی</p>
          </li>
          <li className="d-flex justify-start align-center">
            <Check />
            <p>امکان تسویه آنی و موردی (فقط موارد دلخواه)</p>
          </li>
          <li className="d-flex justify-start align-center">
            <Check />
            <p>اطلاع از خلافی‌های در حال دوبرابرشدن</p>
          </li>
        </ul>
        <div className="row d-flex justify-center align-center ">
          <div className="price col-sm-12 col-md-4 text-center">{price}</div>
          <div className="col-sm12 col-md-8 ">
            <Link
              href={link ? link : "#"}
              className={`d-flex ${
                breakpoint == "xs" ? "flex-column" : "flex-row"
              } justify-center align-center`}
            >
              <MyButton
                text={buttonText}
                width="100%"
                height="40px"
                disabled={disabled}
                isLoading={isLoading}
                onClick={onclick}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default KhalafiDetail;
