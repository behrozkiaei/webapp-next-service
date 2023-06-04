"use client";
import { fetchMe } from "@/logic/login.logic";
import useAuthStore from "@/store/login";
import React, { useEffect } from "react";
export default function FetchMe() {
  const fetchme = async () => {
    await fetchMe(set);
  
  };
  const { set, isLoggedIn, result } = useAuthStore();

  useEffect(() => {
    if( typeof window !== 'undefined' &&  window && window.localStorage){
      var token = localStorage?.getItem("token");
      // if (!isLoggedIn && token) {
        fetchme();
      // }
    }
  }, []);
  useEffect(() => {
    console.log(result)
  }, [result]);
  return <div></div>;
}
