"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Header from "../_component/header";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { PAGE_SLUG } from "../_libs/constant";
import { getUserProfileAPI } from "../_redux/services/auth.api";

const Page = () => {
  const [cookies, , removeCookie] = useCookies(["x-session-token"]);
  const [userprofileData, setUserProfileData] = useState<any>();

  const doLogout = () => {
    console.log("cookies: ", cookies);
    removeCookie("x-session-token", { path: PAGE_SLUG.HOME });

    toast.success("Logout successfully!");
    setTimeout(() => {
      window.location.href = `${PAGE_SLUG.SIGNIN}`;
    }, 500);
  };

  const getUserProfile = async () => {
    const accessToken = cookies["x-session-token"];
    if (cookies["x-session-token"]) {
      const res = await getUserProfileAPI(accessToken);
      setUserProfileData(res.data);
    }
  };

  useEffect(() => {
    getUserProfile();
  },);

  return (
    <>
      <Header doLogout={doLogout} homePage={true} />
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, {userprofileData?.name || "Guest"}
        </h1>
      </div>
    </>
  );
};

export default Page;
