"use client";
import React, { useState } from "react";
import ProductPage from "../_products/productPage";
import Header from "../_component/header";
import { useSelector } from "react-redux";
import { RootState } from "../_redux/store";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const Page = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cookies, , removeCookie] = useCookies(["x-session-token"]);

  const doLogout = () => {
    console.log("cookies: ", cookies);
    removeCookie("x-session-token", { path: "/" });
    
     toast.success("Logout successfully!");
    setTimeout(() => {
      window.location.href = `/login`;
    }, 500);
  };
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header
          cartItemCount={totalItems}
          onCartClick={() => setIsCartOpen(true)}
          doLogout={doLogout}
        />
        <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <ProductPage setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
        </div>
      </div>
    </>
  );
};

export default Page;
