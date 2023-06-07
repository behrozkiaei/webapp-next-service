import Image from "next/image";
import "../globals.css";
import { ServiceButton } from "./service-button";

export default function BillServices() {
  return (
    <div className="horizontal-scroll horizontal-scroll-style">
      <div className="services-collection ">
        <ServiceButton
          alt="استعلام قبض تلفن"
          src="./icons/phone.svg"
          text="استعلام قبض تلفن"
          href="/bill/bill-inquiry?query=phone"
          title="استعلام قبض تلفن"
        ></ServiceButton>
        <ServiceButton
           href="/bill/bill-inquiry?query=gas"
          title="استعلام قبض گاز"
          src="./icons/gas.svg"
          alt="استعلام قبض گاز"
          text="استعلام قبض گاز"
        />
        <ServiceButton
          href="/bill/bill-inquiry?query=mobile"
          title="استعلام قبض موبایل"
          src="./icons/charge.svg"
          alt="استعلام قبض موبایل"
          text="استعلام قبض موبایل"
        />
        <ServiceButton
           href="/bill/bill-inquiry?query=billId"
          title="استعلام با شناسه قبض"
          src="./icons/inquiry-bill-id.svg"
          alt="استعلام با شناسه قبض"
          text="استعلام با شناسه قبض"
        />
        <ServiceButton
         
          href="/bill/bill-check"
          title="استعلام با شناسه پرداخت و قبض"
          src="./icons/inquiry-payment-id.svg"
          alt="استعلام با شناسه پرداخت و قبض"
          text="استعلام با شناسه پرداخت و قبض"
        />
      </div>
    </div>
  );
}
