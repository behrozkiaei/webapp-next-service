import React, { useState } from "react";
import Button from "@mui/material/Button";
import useIsMdDown from "@/components/effects/isMdDown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
interface ScrollableButtonListProps {
  buttons: string[];
  buttonWidth: number;
  buttonMaxWidth: number;
  onClick: (index: number) => void;
}

const ScrollableButtonList: React.FC<ScrollableButtonListProps> = ({
  buttons,
  buttonWidth,
  buttonMaxWidth,
  onClick
}) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(0);
  const isMdDown = useIsMdDown();
  const setSelected = (index: number) => {
    setSelectedButton(index);
    onClick(index)
  };

  return (
    <Swiper className="mx-1"  slidesPerView={3.5}>
      {buttons.map((button, index) => (
        <SwiperSlide key={index}>
        <Button
          
          size={isMdDown ? "small" : undefined}
          variant="outlined"
          style={{
            width: buttonWidth,
            maxWidth: buttonMaxWidth,
            backgroundColor: selectedButton === index ? "lightblue" : "white",
            margin: "2px",
          }}
          onClick={() => setSelected(index)}
        >
          {button}
        </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ScrollableButtonList;
