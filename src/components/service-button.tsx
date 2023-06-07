import Image from "next/image";
import "../globals.css";
import Link from "next/link";
interface ServiceButtonInterface {
  href: string;
  title: string;
  src: string;
  alt: string;
  text: string;
  spanText?: string;
}
export const ServiceButton: React.FC<ServiceButtonInterface> = ({
  href,
  title,
  src,
  alt,
  text,
  spanText,
}) => {
  return (
     <Link scroll={false}
      href={href}
      aria-hidden="true"
      title={title}
      className="service-card d-flex justify-start align-center "
    >
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        width={10}
        height={10}
        style={{
          filter: `invert(30%) sepia(100%) saturate(3000%) hue-rotate(210deg) brightness(90%) contrast(95%)`,
        }}
      />
      <p style={{ marginTop: "unset" }}>{text}</p>
      {spanText && <span className="new">{spanText}</span>}
    </Link>
  );
};
