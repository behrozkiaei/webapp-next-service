import Image from "next/image";
import "../globals.css";
import { ServiceButton } from "./service-button";

export default function SimServices() {
  return (
    <div className="horizontal-scroll horizontal-scroll-style">
      <div className="services-collection ">
        <ServiceButton
          alt="خرید شارژ تلفن همراه"
          src="./icons/charge.svg"
          text="خرید شارژ تلفن همراه"
          href="/sim/charge?query=charge"
          title="خرید شارژ تلفن همراه"
        ></ServiceButton>
        <ServiceButton
            href="/sim/charge?query=internet"
          title="خرید اینترنت"
          src="./icons/internet.svg"
          alt="خرید اینترنت"
          text="خرید اینترنت"
        />
      </div>
    </div>
  );
}
