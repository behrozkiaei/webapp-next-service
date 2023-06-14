import Image from "next/image";
import "../globals.css";
import { ServiceButton } from "./service-button";

export default function ServicesSection() {
  return (
    <div className="horizontal-scroll horizontal-scroll-style">
      <div className="services-collection ">
        <ServiceButton
          alt="استعلام و پرداخت خلافی خودرو"
          src="./icons/car.svg"
          text="خلافی خودرو"
          href="/query/khalafi/detail"
          title="استعلام و پرداخت خلافی خودرو"
        ></ServiceButton>
        <ServiceButton
          href="/query/khalafi/detail?aggregate=true"
          title="استعلام و پرداخت خلافی تجمیعی بدون احراز هویت"
          src="./icons/car.svg"
          alt="خلافی خودرو تجمیعی"
          text="خلافی خودرو تجمیعی"
        />
        <ServiceButton
          href="/bill/bill-check"
          title="پرداخت خلافی با شناسه پرداخت"
          src="./icons/car.svg"
          alt="پرداخت قبض خلافی"
          text="پرداخت قبض خلافی"
        />
      </div>
    </div>
  );
}
