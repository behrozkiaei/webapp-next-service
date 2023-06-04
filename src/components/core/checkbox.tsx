import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
interface CheckboxStatus{
    onCheckboxChange:(checked:boolean)=>void
    label?:string
}
const CheckboxWithLabel : React.FC<CheckboxStatus>= ({ onCheckboxChange,label=null }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event:any) => {
    setChecked(event.target.checked);
    onCheckboxChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label={label ? label : ""}
    />
  );
};

export default CheckboxWithLabel;
