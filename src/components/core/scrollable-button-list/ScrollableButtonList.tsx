import React, { useState } from "react";
import Button from "@mui/material/Button";
import useIsMdDown from "@/components/effects/isMdDown";
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
    <div
      style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
      className="scrollable-element"
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
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
      ))}
    </div>
  );
};

export default ScrollableButtonList;
