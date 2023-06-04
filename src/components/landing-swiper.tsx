import "../globals.css";

export default function LandingSwiper() {
  return (
    <div className="swiper-item">
      <div>
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
              "url(https://app.itoll.ir/oss/marketing/static/slider_1676813947_63f2267b51b48.jpg)",
          }}
        />
      </div>
    </div>
  );
}
