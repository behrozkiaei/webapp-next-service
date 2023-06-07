import "../globals.css";

export default function LandingSwiper() {
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
              "url(http://localhost:3000/public/assets/images/banner.png)",
          }}
        />
   
    </div>
  );
}
