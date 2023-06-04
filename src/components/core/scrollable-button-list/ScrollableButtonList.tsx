import React, { useState } from 'react';
import Button from '@mui/material/Button';
import useIsMdDown from '@/components/effects/isMdDown';
interface ScrollableButtonListProps {
    buttons: string[];
    buttonWidth: number;
    buttonMaxWidth: number;
  }
  
  const ScrollableButtonList: React.FC<ScrollableButtonListProps> = ({ buttons, buttonWidth, buttonMaxWidth }) => {
  const [selectedButton, setSelectedButton] = useState<number|null>(null);
  const isMdDown =useIsMdDown()
  return (
    <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap'  }} className='scrollable-element'>
      {buttons.map((button, index) => (
        <Button
          key={index}
          size={isMdDown? 'small' : undefined}
          variant="outlined"
          style={{
            width: buttonWidth,
            maxWidth: buttonMaxWidth,
            backgroundColor: selectedButton === index ? 'lightblue' : 'white',
            margin: '2px',
          }}
          onClick={() => setSelectedButton(index)}
        >
          {button}
        </Button>
      ))}
    </div>
  );
};

export default ScrollableButtonList;
