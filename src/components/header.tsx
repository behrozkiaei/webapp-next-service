"use client";
import { logOut } from "@/logic/login.logic";
import useAuthStore from "@/store/login";
import useStateStore from "@/store/ui-state.store";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import useBreakpoint from "./effects/breakpoint-effect";
import IncreaseButton from "./increse-amount/wallet-increase-button";
import LoginButton from "./login-button";

export interface HeaderPropInterface {
  isTransparent?: boolean;
}
const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const Header: React.FC<HeaderPropInterface> = ({ isTransparent = false }) => {
  const { isLoggedIn, result, set } = useAuthStore();
  const breakpoint = useBreakpoint();
  const [openMenu, setMenuOpen] = useState<boolean>(false);
  const [bottomSheetIsOpen, setBottomSheetIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { get, set: setState } = useStateStore();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        menuRef.current &&
        !menuRef.current?.contains(event.target) &&
        !get("isBottomSheetOpen")
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);
  const Logout = async () => {
    logOut(set);
  };
  const closeMenu = () => {
    setMenuOpen((prev) => (prev == true ? false : prev));
  };
  useEffect(() => {
    console.log(breakpoint);
  }, [breakpoint]);
  useEffect(() => {
    if (breakpoint != "xs" && breakpoint != "sm") {
      setMenuOpen(false);
    }
  }, [breakpoint]);
  const openMenuToggle = () => {
    if (breakpoint == "xs" || breakpoint == "sm") {
      setMenuOpen((prev) => !prev);
    }
  };
  return (
    <>
      <div className={`header-bg ${isTransparent ? "transparent" : ""}`}>
        {breakpoint != "xs" && breakpoint != "sm" && (
          <div className="container">
            <div className="row smAndUp ma-0 ma-sm-n3">
              <div className="d-flex  align-center pr-5 col-lg-3 col-6">
                <Image
                  src={
                    isTransparent ? "/icons/menu-white.svg" : "/icons/menu.svg"
                  }
                  width={24}
                  height={24}
                  alt="منو"
                  loading="lazy"
                  // aria-hidden="true"
                  className="menu menu-header"
                  style={{
                    filter: isTransparent
                      ? "invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)"
                      : "invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)",
                  }}
                />
                <div className="splitter mx-8" />
                {isLoggedIn && <IncreaseButton />}

                {isLoggedIn && (
                  <>
                    <Avatar
                      src="/icons/ProfileCircleWhite.svg"
                      sx={{ mr: 2 , width :"20px" , height: "20px"}}
                    />
                    <Typography
                       component="p"
                       sx={{ fontSize: '0.75rem' }}
                    
                    >
                      {result?.mobile}
                    </Typography>
                    <IconButton size="small">
                      <AccountBalanceWalletIcon color="primary" />
                    </IconButton>
                    <Typography  component="p"
                       sx={{ fontSize: '0.75rem' }}>
                      {parseFloat(result?.Wallet.amount!) < 0 ? "-" : ""}
                      {Math.abs(
                        parseFloat(result?.Wallet.amount!)
                      ).toLocaleString()}{"ریال"}
                      
                    </Typography>
                    <IconButton size="small"  onClick={Logout}>
                      <ExitToAppIcon  color="secondary"  />
                    </IconButton>
                  </>
                )}
                {!isLoggedIn && <LoginButton />}
              </div>
              <div className="lgAndUp col col-6 ">
                <ul className="d-flex soft_gray--text" />
              </div>
              <div className="d-flex  flex-row justify-end align-center pl-5 col-lg-3 col-6">
                <Image
                  src={`${
                    isTransparent
                      ? "/icons/itoll-white.svg"
                      : "/icons/itoll-without-tagline.svg"
                  }`}
                  width={128}
                  height={36}
                  alt="های، سامانه خودروی من"
                  className="mt-2"
                  style={{
                    filter: isTransparent
                      ? "invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)"
                      : "invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)",
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {(breakpoint == "xs" || breakpoint == "sm") && (
          <>
            <div className="container">
              <div className=" row  align-center  mt-n3 pointer">
                <div
                  className="d-flex align-center pr-5 py-0 col col-3"
                  onClick={openMenuToggle}
                >
                  <Image
                    src={
                      isTransparent
                        ? "/icons/menu-white.svg"
                        : "/icons/menu.svg"
                    }
                    width={24}
                    height={24}
                    alt="منو"
                    // className="menu-mobile"
                  />
                </div>
                <div className="d-flex justify-center py-0 col col-6">
                  <Image
                    src={`${
                      isTransparent
                        ? "/icons/itoll-white.svg"
                        : "/icons/itoll-without-tagline.svg"
                    }`}
                    width={76}
                    height={21}
                    alt="های، سامانه خودروی من"
                    loading="lazy"
                    className="d-block"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {openMenu && (
        <>
          <div ref={menuRef} className="menu-drawer full-width primary--text ">
            <div className="d-flex flex-column justify-center align-center mt-10 full-width">
              <div className="d-flex gap-1 flex-column align-center justify-center pl-5 py-0 col col-3 full-width">
                {isLoggedIn && (
                  <Image
                    src="/icons/ProfileCircleWhite.svg"
                    width={80}
                    height={80}
                    alt="پروفایل"
                    loading="lazy"
                    className="d-block mt-2 "
                    style={{
                      filter: "sepia(100%) hue-rotate(90deg) saturate(700%)",
                    }}
                  />
                )}

                {!isLoggedIn && <LoginButton></LoginButton>}
                {isLoggedIn && <IncreaseButton />}

                {isLoggedIn && (
                  <div className="menu-width d-flex justify-center">
                    <p>
                      موجودی ولت
                      <span>{` ${result?.Wallet?.amount ?? 0} ریال`}</span>
                    </p>
                  </div>
                )}
                <div className="devider menu-width"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Header;
