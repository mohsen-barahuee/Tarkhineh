"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Link from "next/link";
import Login from "./Login";
import Search from "./Search";
import { useAppContext } from "@/context";

export default function Navbar({ token }) {
  const [slider, setSlider] = useState(false);
  const [serachModal, setSearchModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const { basket, setBasket } = useAppContext();

  const showLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const sliderShowHandler = () => {
    setSlider(true);
  };

  const sliderCloseHanlder = () => {
    setSlider(false);
  };

  let name = 24124;

  return (
    <>
      {loginModal && <Login onCloseModal={closeLoginModal} />}
      {serachModal && <Search setModal={setSearchModal} />}
      <div className="container  px-6 py-4 lg:px-26.5 md:py-8 border-b-2 ">
        <div className="flex items-center justify-between md:justify-center md:gap-x-4 lg:gap-x-0 lg:justify-between">
          <div
            onClick={sliderShowHandler}
            className="flex p-5  h-full  flex-col gap-y-1 md:hidden child:rounded-full child:w-5 child:h-0.5 child:bg-Primary"
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <Link href={"/"}>
              <img
                src={"/images/Logo.png"}
                className="w-[102px] md:w-[130px] lg:w-[155px]"
              />
            </Link>
          </div>
          <div className="hidden md:inline-block">
            <ul className="flex items-center md:gap-x-3 lg:gap-x-6 h-full transition-all child-hover:border-b-Primary    child:text-neutral-600 md:child:text-Body-MD lg:child:text-Body-XL child:font-Regular child:cursor-pointer">
              <li className=" hover:text-Primary">
                <Link href={"/"}>صفحه اصلی</Link>
              </li>
              <li>
                <Dropdown
                  title={"شعبه"}
                  items={[
                    { href: "/my-account", title: "اکباتان" },
                    { href: "/my-account/my-orders", title: "چالوس " },
                    { href: "/my-account/favorite", title: "اقدسیه" },
                    { href: "/my-account/myaddress", title: "ونک " },
                  ]}
                />
              </li>
              <li>
                <Dropdown
                  title={"منو"}
                  items={[
                    { href: "/menu", title: "غذای اصلی" },
                    { href: "/menu", title: "پیش غذا" },
                    { href: "/menu", title: "دسر" },
                    { href: "/menu", title: "نوشیدنی " },
                  ]}
                />
              </li>
              <li className=" hover:text-Primary">
                <Link href={"/add-branch"}>اعطای نمایندگی</Link>
              </li>
              <li className=" hover:text-Primary">
                <Link href={"/aboutus"}>درباره ما</Link>
              </li>
              <li className=" hover:text-Primary">
                <Link href={"/contactus"}>تماس با ما</Link>
              </li>
            </ul>
          </div>
          <div
            className={`flex flex-row-reverse md:flex-row gap-x-2 child:bg-Tint-1 child:text-Primary child:p-1 md:child:p-2 child:cursor-pointer child:rounded`}
          >
            {token ? (
              <div className={token ? "bg-Tint-2" : "bg-Tint-1"}>
                <Dropdown
                  imgSrc={"/svg/user.svg"}
                  items={[
                    { href: "/my-account", title: "پروفایل" },
                    { href: "/my-account/my-orders", title: "پیگیری سفارش" },
                    { href: "/my-account/favorite", title: "علاقه‌مندی‌ها" },
                    { href: "/my-account/myaddress", title: "آدرس‌های من" },
                    { href: "", title: "خروج از حساب" },
                  ]}
                />
              </div>
            ) : (
              <div onClick={showLoginModal}>
                <h3 className="text-Button-SM font-Medium">ورود | ثبت نام</h3>
              </div>
            )}
            <div className="w-auto relative">
              <Link href={"/basket"}>
                <span className=" absolute text-sm -top-2 -right-2 px-2 shadow-DropShadow-6  rounded-full bg-white text-Primary">
                  {basket.length}
                </span>
                <img
                  className="w-4 h-4 md:w-6 md:h-6"
                  src={"/svg/shopping-cart.svg"}
                />
              </Link>
            </div>
            <div
              onClick={() => setSearchModal(true)}
              className="hidden md:inline-block "
            >
              <img src={"/svg/search-normal.svg"} width="24" height="24" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile SideBar */}
      <div
        tabIndex={0}
        onBlur={sliderCloseHanlder}
        className={`fixed md:hidden bg-white z-50 top-0 right-0 w-[80%] h-[100vh] transition-all   ${
          slider ? "translate-x-0" : " translate-x-full"
        }`}
      >
        <div className="w-full relative">
          <img src="/images/navbar/topFrame.png" />
          <img
            onClick={sliderCloseHanlder}
            className=" absolute top-4 left-4"
            src="/svg/Close-icon.svg"
          />
        </div>
        <div className="mt-1 px-4 child:py-2 child:border-b child:border-neutral-300   child:gap-x-1">
          <div className="flex">
            <img src="/svg/home.svg" />
            <h2 className="text-Caption-MD font-Regular">صفحه اصلی</h2>
          </div>
          <Accordion
            title={"منو"}
            svgSrc={"/svg/home.svg"}
            items={["غذای اصلی", "پیش غذا", "دسر", "نوشیدنی"]}
          />

          <Accordion
            title={"شعبه"}
            svgSrc={"/svg/home.svg"}
            items={["اکباتان", "چالوس ", "اقدسیه ", "ونک"]}
          />

          <Link href={"/about"} className="flex">
            <img src="/svg/home.svg" />
            <h2 className="text-Caption-MD font-Regular">درباره ما </h2>
          </Link>
          <div className="flex">
            <img src="/svg/home.svg" />
            <h2 className="text-Caption-MD font-Regular"> تماس با ما</h2>
          </div>
        </div>
      </div>
      {loginModal || serachModal ? (
        <div className=" fixed top-0 bg-black/70 w-full h-[100vh]"></div>
      ) : (
        ""
      )}
    </>
  );
}
