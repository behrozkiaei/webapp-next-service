

import Image from "next/image";
import '../globals.css';
import Link from "next/link";
interface ServiceButtonInterface {
    href: string,
    title: string,
    src: string,
    alt: string,
    text: string,
    spanText?:string
}
export const ServiceButton: React.FC<ServiceButtonInterface> = (
    { href, title, src, alt, text ,spanText}) => {
    return (
      <Link href={href} aria-hidden="true" title={title} className="service-card d-flex justify-center align-center " >
        <Image src={src} alt={alt} loading="lazy"  width={10} height={10} />
        <p style={{marginTop:"unset"}}>{text}</p>
        {spanText && <span className="new">{spanText}</span>}
      </Link>
    );
  }