"use client";
import Image from "next/image";
import "../globals.css";
import { useEffect, useRef, useState } from "react";
import ModalView from "./core/modal";
import PlateChar from "./plate-char/plate-char";
import { Plate, plateData } from "@/utils/interfaces/naji.interface";
import { PlateType } from "@/utils/enums";
import useBreakpoint from "./effects/breakpoint-effect";
interface PlateWrapperInterface {
    plateData?: Plate;
    onChange  ? : (data : Plate)=>void , 
    size? : string,
    disabled? :boolean
  }
const PlateBox: React.FC<PlateWrapperInterface> = ({
    plateData,
    onChange,
    disabled,
    size = "medium"
  }) => {
    const breakpoint = useBreakpoint();

    useEffect(()=>{
      if(plateData){
        setFirstPart(plateData.firstPart)
        setSecondPart(plateData.secondPart)
        setChar(plateData.charPart!)
        setCountrydPart(plateData.countryPart!)
      }
    },[plateData])
    const [firstPart, setFirstPart] = useState<string>("");
    const [char, setChar] = useState<string>(
      plateData && plateData.charPart ? plateData.charPart : ""
    );
    const [secondPart, setSecondPart] = useState<string>("");
    const [id, setId] = useState<string>();
    const [countrydPart, setCountrydPart] = useState<string>("");
  
    const [isOpen, setOpen] = useState(false);
    const secondInputRef = useRef<HTMLInputElement>(null);
    const countryPartRef = useRef<HTMLInputElement>(null);
    const handleFirstChange = (event: any) => {
      setFirstPart(event.target.value);
      // console.log(event.target.value.toString().length);
      if (event.target.value.toString().length == 2 && !disabled) {
        !plateData?.charPart && handleOpen();
       
      }
    };
    const handleSecondChange = (event: any) => {
      setSecondPart(event.target.value);
    };
    const handleChangeCountry = (event: any) => {
      setCountrydPart(event.target.value);
    };
    // const inputRef = useRef();
    const handleOpen = () => {
      setOpen((prev) => !prev);
    };
    const charChoosed = (char: string) => {
      setOpen((prev) => !prev);
      if (char) {
        setChar(char);
    
      }
    };


 
    useEffect(() => {
     
      const isValid = firstPart?.length == 2 && secondPart?.length == 3 && char?.length > 0 && countrydPart?.length==2 
      console.log("plate Is Valid", isValid)
      isValid && onChange && onChange({
        plateType: PlateType.CAR,
        firstPart: firstPart ?? "" ,
        secondPart: secondPart ?? "" ,
        countryPart: countrydPart ?? "",
        charPart: char ?? "",
        id : id ?? "",
        complete : isValid,
      })
      if(firstPart.length == 2 && !disabled && charChoosed.length>0 && countrydPart=="")
      secondInputRef.current?.focus();
      
      if(firstPart.length == 2 && !disabled && secondPart.length==3 )
      countryPartRef.current?.focus()
    },[firstPart,secondPart,char,countrydPart]);
  
  return (
    <div aria-hidden="true" className="plate-action">
    <div className="plate-template">
    <div
    aria-hidden="true"
    className={`plate  ${size} ${breakpoint == "xs" || breakpoint == "sm" ? "small":"" }` }
    style={{ borderColor: "#EEEEEE" }}
  >
    <div className="iran-flag-place dark">
      <Image
        src="/icons/iran-flag-dark.svg"
        width={16}
        height={48}
        alt="پرچم ایران"
      />
    </div>
    <input
      type="tel"
      maxLength={2}
      placeholder="--"
      onChange={handleFirstChange}
      value={plateData ? plateData.firstPart : firstPart}
      disabled={(disabled || plateData)? true : false}
      className="first-part"
    />
    <div aria-hidden="true" className="char-part pb-1">
      <span className={char ? "" : "empty"}>{char ? char : "--"}</span>
    </div>
    <input
      type="tel"
      maxLength={3}
      value={plateData ? plateData.secondPart : secondPart}
      onChange={handleSecondChange}
      placeholder="---"
      disabled={disabled || plateData ? true : false}
      ref={secondInputRef}
      className="third-part"
    />
    <div className="vertical-separator" />
    <div className="city-code-part">
      <Image
        src="/icons/iran.svg"
        width={32}
        height={8}
        alt="ایران"
        style={{ height: "auto" }}
      />
      <input
        type="tel"
        maxLength={2}
        onFocus={()=>{console.log("foxised 2")}}
        autoFocus={firstPart?.length == 2  && char !="" && secondPart?.length == 3 && countrydPart=="" ? true : false}
        placeholder="--"
        ref={countryPartRef}
        value={plateData ? plateData.countryPart :countrydPart}
        disabled={disabled || plateData ? true : false}
        onChange={handleChangeCountry}
      />
    </div>
    <ModalView
        isOpen={isOpen}
        modalStyle={{ width: "400px" }}
        onClose={handleOpen}
      >
        <PlateChar charChoosed={charChoosed} handleOpen={handleOpen} />
      </ModalView>
  </div>
  </div>
  </div>
  )
}
export default PlateBox;