import Image from "next/image";
import '../globals.css';
import { ServiceButton } from "./service-button";

export default function DocumentSection() {
  return (
    <div className="horizontal-scroll horizontal-scroll-style">
    <div className="services-collection">
      {/* <ServiceButton
        href="/query/technical-inspection"
        title="استعلام معاینه فنی"
        src="./icons/query-technical-inspection.svg"
        alt="استعلام معاینه فنی"
        text="استعلام وضعیت معاینه فنی"
        spanText="جدید"
      /> */}

      <ServiceButton
        href="/police-inquiry/negative-point"
        title="استعلام نمره منفی گواهینامه"
        src="./icons/Driver-license-negative-point.svg"
        alt="نمره منفی گواهینامه"
        text="نمره منفی گواهینامه"
      />

      <ServiceButton
        href="/query/khalafi/detail?queryMode=document"
        title="استعلام کارت و سند خوردو"
        src="./icons/car.svg"
        alt="استعلام وضعیت کارت و سند خودرو"
        text="استعلام وضعیت کارت و سند خودرو"
      />

      {/* <ServiceButton
        href="/police-inquiry/driver-license-status"
        title="استعلام وضعیت گواهینامه"
        src="./icons/Driving-license-inquiry.svg"
        alt="استعلام وضعیت گواهینامه"
        text="استعلام وضعیت گواهینامه"
      /> */}

      <ServiceButton
        href="police-inquiry/naji-document?queryMode=active-plates"
        title="استعلام پلاک با کد ملی"
        src="./icons/Car-plate-inquery.svg"
        alt="استعلام پلاک‌های فعال"
        text="استعلام پلاک‌های فعال"
      />
      <ServiceButton
        href="police-inquiry/naji-document?queryMode=country-leaving-status"
        title="استعلام وضعیت خروج از کشور"
        src="./icons/Car-plate-inquery.svg"
        alt="استعلام وضعیت خروج از کشور"
        text="استعلام وضعیت خروج از کشور"
      />
    </div>
  </div>
  );
}
