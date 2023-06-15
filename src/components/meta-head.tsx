import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const _default = {
  title:
    "نکست سون، خدمات یکپارچه خودرو، قبض و سیم کارت",
  OGURL: "https://next7.ir/",
  
  description:
    "نکست سون|  خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین",
};
interface HeadInterface {
  title?: string;
  keywords  ? : string , 
  description? : string,
  url? :string,
  ogImage? :string
}

const  Head :React.FC<HeadInterface> = ({ title, keywords="", description, url }) => {
  return (
    <NextHead>
      <title>{title || _default.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta charSet="UTF-8" />
      <meta name="title" content={title || _default.title} />
      <meta name="description" content={description || _default.description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="image" content="./images/logos/logo48.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="نکست 7" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="keywords" content={keywords}></meta>
      <meta name="samandehi" content="192526975" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="expires" content="0" />
      <meta httpEquiv="pragma" content="no-cache" />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta httpEquiv="content-language" content="fa" />

      <meta itemProp="image" content="./images/logos/logo192.png" />
      <meta itemProp="name" content={title || _default.title} />

      <meta property="og:url" content={url || _default.OGURL} />
      <meta property="og:title" content={title || _default.title} />
      <meta
        property="og:description"
        content={description || _default.description}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="https://next7.ir/" />
      <meta name="copyright" content="Tether Land" />
      <meta
        property="og:image"
        content="https://next7.ir/images/logos/logo192.png"
      />
      {/* <meta property="og:image" content="./images/logos/logo192.png" /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="next7.ir" />
      <meta name="twitter:site" content="@next7.ir" />

      <meta property="twitter:url" content={url || _default.OGURL} />
      <meta name="twitter:title" content={title || _default.title} />
      <meta
        name="twitter:description"
        content={description || _default.description}
      />
      <meta
        name="twitter:image:src"
        content="https://next7.ir/images/logos/logo256.png"
      />

      <link rel="icon" href="./images/logos/logo48.png" />
      <link rel="canonical" href="https://next7.ir/" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" sizes="192x192" href="/images/next7.ir.png" />
      <link rel="apple-touch-icon" href="/images/next7.ir.png" />
      <link rel="icon" href="/images/next7.ir.png" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#49B882" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#49B882" />

      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/images/logos/logo192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/logos/logo144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="96x96"
        href="/images/logos/logo96.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/logos/logo72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="48x48"
        href="/images/logos/logo48.png"
      />
      <link rel="app-touch-startup-image" href="/images/logos/logo256.png" />
      <link
        rel="app-touch-icon"
        href="/images/logos/logo48.png"
        sizes="48x48"
      />
      <link
        rel="app-touch-icon"
        href="/images/logos/logo72.png"
        sizes="72x72"
      />
      <link
        rel="app-touch-icon"
        href="/images/logos/logo96.png"
        sizes="96x96"
      />
      <link
        rel="app-touch-icon"
        href="/images/logos/logo144.png"
        sizes="144x144"
      />
      <link
        rel="app-touch-icon"
        href="/images/logos/logo168.png"
        sizes="168x168"
      />
      <link
        rel="app-touch-icon"
        href="/images/logos/logo192.png"
        sizes="192x192"
      />
      <link
        rel="app-touch-icon"
        href="/images/logos/logo256.png"
        sizes="256x256"
      />
      <link
        rel="app-touch-icon"
        href="/images/logos/logo192.png"
        sizes="512x512"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "صفحه اصلی",
                item: "https://next7.ir/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "ورود",
                item: "https://next7.ir/login",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "بلاگ",
                item: "https://next7.ir/blog",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "خرید تتر",
                item: "https://next7.ir/",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "درباره ما",
                item: "https://next7.ir/about",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "تماس با ما",
                item: "https://next7.ir/contact",
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "سوالات متداول",
                item: "https://next7.ir/faq",
              },
              {
                "@type": "ListItem",
                position: 8,
                name: "دعوت دوستان",
                item: "https://next7.ir/invite-friends",
              },
            ],
          }),
        }}
      />
      
      
     
    </NextHead>
  );
}


export default Head;
