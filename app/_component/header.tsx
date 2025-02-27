"use client";
import { Button } from "antd";
import { LogOut, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  doLogout: () => void;
  homePage?: boolean;
}

const Header = (props: HeaderProps) => {
  const { cartItemCount, onCartClick, doLogout, homePage } = props;

  const handleCartClick = () => {
    if (onCartClick) onCartClick();
  };

  const handleLogout = () => {
    doLogout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="flex items-center no-underline text-black"
            >
              <span className="text-xl font-semibold">Home</span>
            </Link>
            <Link
              href="/product"
              className="flex items-center no-underline text-black"
            >
              <span className="text-xl font-semibold">Product</span>
            </Link>
          </div>

          <div className="flex items-center gap-5">
            {!homePage && (
              <Button
                type="text"
                className="relative hover:bg-gray-100 rounded-full p-2"
                onClick={handleCartClick}
              >
                <ShoppingCart className="h-6 w-6" />

                <span className="absolute -top-1 -right-1  bg-blue-500 text-white  text-xm font-medium rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              </Button>
            )}
            <Button
              type="text"
              className="relative hover:bg-gray-100 rounded-full p-2"
              onClick={handleLogout}
            >
              <LogOut className="cursor-pointer  hover:bg-gray-100 rounded-full" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
