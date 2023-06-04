import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useIsMdDown from '@/components/effects/isMdDown';

interface MyButtonGroupProps {
  buttons: {
    content: string | number;
    color: string;
    value :string
  }[];
  defaultValue:number;
  selectedColor?: string;
  onSelect :(value:{
    content: string | number;
    color: string;
    value :string
  })=>void
}

const MyButtonGroup: React.FC<MyButtonGroupProps> = ({
  buttons,
  selectedColor,
  onSelect,
  defaultValue
}) => {
  const [selectedButton, setSelectedButton] = useState<number>(defaultValue);
  const [selectedColorL, setSelectedColor] = useState<string>();
  const isMdDown =useIsMdDown()
    useEffect(()=>{
        selectedButton>=0 && onSelect(buttons[selectedButton!]);
    },[selectedButton])
    useEffect(()=>{
        setSelectedButton(defaultValue)
    },[defaultValue])
    useEffect(()=>{
      selectedColor && setSelectedColor(selectedColor!)
  },[selectedColor])
  return (
    <ButtonGroup  dir ="ltr" variant="outlined" aria-label="outlined button group">
      {buttons.map((button, index) => (
        <Button
          size={isMdDown ? 'small':undefined}
          key={index}
          onClick={() => {
            setSelectedButton(index)}}
          style={{
            color :"var(--main_gray)",
            backgroundColor:
              selectedButton === index ? (selectedColor?  selectedColor:  button.color  ) : undefined 
          }}
        >
          {button.content}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default MyButtonGroup;
