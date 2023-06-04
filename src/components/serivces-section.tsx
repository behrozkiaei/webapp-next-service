import Image from "next/image";
import "../globals.css";
import { ServiceButton } from "./service-button";

export default function ServicesSection() {
  return (
    <div className="horizontal-scroll horizontal-scroll-style">
      <div className="services-collection ">
        <ServiceButton
          alt="استعلام و پرداخت خلافی خودرو"
          src="./icons/Police-penalty.svg"
          text="خلافی خودرو"
          href="/query/khalafi"
          title="استعلام و پرداخت خلافی خودرو"
        ></ServiceButton>
        <ServiceButton
          href="/query/tehran"
          title="استعلام و پرداخت عوارض آزادراهی آنیرو و تهران شمال"
          src="./icons/My-Tehran.svg"
          alt="طرح ترافیک"
          text="طرح ترافیک"
        />
        <ServiceButton
          href="/query/tehran"
          title="استعلام و پرداخت عوارض آزادراهی آنیرو و تهران شمال"
          src="./icons/Toll.svg"
          alt="عوارض آزادراهی"
          text="عوارض آزادراهی"
        />
        <ServiceButton
          href="/query/annual"
          title="استعلام و پرداخت عوارض سالیانه"
          src="./icons/Annual-tax.svg"
          alt="عوارض سالیانه"
          text="عوارض سالیانه"
        />

        <ServiceButton
          href="/query/car-transfer-tax"
          title="استعلام و پرداخت مالیات نقل و انتقال خودرو"
          src="./icons/car-transfer-tax.svg"
          alt="مالیات نقل و انتقال خودرو"
          text="مالیات نقل و انتقال خودرو"
        />
      </div>
    </div>
  );
}
