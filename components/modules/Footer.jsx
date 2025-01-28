import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[200px] md:h-full  relative">
        <img src="./images/Footer.png" className="w-full h-full" />
        <div className=" flex justify-start md:justify-between gap-x-20 md:gap-x-0 w-full absolute top-4 pr-5 md:top-8 md:px-26.5 text-white">
          <div className="flex flex-col gap-y-1 md:gap-y-4">
            <h5 className="text-H7 md:text-H5 font-Bold">دسترسی آسان</h5>
            <div className="flex flex-col gap-y-4 pr-3 child:text-Caption-SM child:font-Regular md:child:text-Caption-LG md:child:font-Medium">
              <p>پرسش‌های متداول</p>
              <p>قوانین ترخینه</p>
              <p>حریم خصوصی</p>
            </div>
            <div className="flex mt-1 gap-x-4 flex-row-reverse justify-end md:pr-3 child:w-4 md:child:w-auto">
              <img src="./svg/Telegram.svg" />
              <img src="./svg/Instagram.svg" />
              <img src="./svg/Twitter.svg" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h5 className="text-H7 md:text-H5 font-Bold"> شعبه‌های ترخینه</h5>
            <div className="flex flex-col gap-y-4 pr-3 child:text-Caption-SM child:font-Regular md:child:text-Caption-LG md:child:font-Medium">
              <p>شعبه اکباتان </p>
              <p> شعبه چالوس</p>
              <p> شعبه اقدسیه</p>
              <p> شعبه ونک</p>
            </div>
          </div>
          <div className="hidden md:flex flex-col  gap-y-4 relative">
            <h5 className="text-H5 font-Bold text-right"> پیام به ترخینه </h5>
            <div className="flex gap-x-6">
              <div className="flex flex-col gap-y-3">
                <input
                  type="text"
                  className=" text-Body-SM w-[276px] h-10 font-Regular  bg-transparent outline-none border rounded px-1  py-1 border-neutral-600"
                  placeholder="نام و نام خانوادگی"
                />
                <input
                  type="text"
                  className=" text-Body-SM w-[276px] h-10 font-Regular  bg-transparent outline-none border rounded px-1  py-1 border-neutral-600"
                  placeholder=" شماره تماس  "
                />
                <input
                  type="text"
                  className=" text-Body-SM w-[276px] h-10 font-Regular  bg-transparent outline-none border rounded px-1  py-1 border-neutral-600"
                  placeholder=" آدرس ایمیل (اختیاری)  "
                />
              </div>
              <div className="w-[286px] h-36 relative">
                <input
                  placeholder="پیام شما"
                  className="bg-transparent rounded border pr-2   border-neutral-600  outline-none w-full h-full "
                />
              </div>
            </div>
            <button className=" absolute left-0 -bottom-14 text-Button-SM font-Medium border w-[183px] h-[40px] text-nowrap rounded   border-neutral-600  py-2 px-[62px]">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
