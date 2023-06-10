import "../globals.css";

export default function LandingSwiper() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className="swiper-item">

        <div
          className="banner-image mobile"
          style={{
            backgroundImage:
              "url(/images/slider1.jpg)",
          }}
        />
        <div
          className="banner-image desktop"
          style={{
            backgroundImage:
              `url(${apiUrl}/public/assets/images/banner.png)`,
          }}
        />
   
    </div>
  );
}
