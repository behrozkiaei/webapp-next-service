"use client";
import PlateChar from "@/components/plate-char/plate-char";
import ModalView from "@/components/core/modal";
import Login from "@/components/login";
import { LoginMode } from "@/utils/enums";
import { Button, TextField } from "@mui/material";
import { useState, useRef } from "react";
import { Loading } from "@/components/core/loading/loading";

export default function ModalTester() {
  const textInput = useRef<HTMLInputElement>(null);
  const textInput1 = useRef<HTMLInputElement>(null);
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  function handleClick() {
    console.log( textInput.current?.focus())
    textInput.current?.focus();
  }

  function handleClick2() {
    textInput1.current?.focus();
  }
  const changedfirst =()=>{
    textInput.current?.focus();
  }
  const charChoosed = (char: string) => {
    setOpen((prev) => !prev);

    console.log(char);
  };
  return (
    <div>
      <TextField type="text" inputRef={textInput1} onChange={changedfirst}/>
      <TextField type="text" inputRef={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
      <input type="button" value="Focus the text input" onClick={handleClick2} />
    </div>
  );
}

