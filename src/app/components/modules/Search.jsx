import React from "react";

export default function Search({ setModal }) {
  return (
    <>
      <div
        onBlur={() => setModal(false)}
        className=" fixed top-0 md:w-[600px] rounded-lg  z-50   md:top-1/3    md:left-1/3 md:right-1/3 bg-white "
      >
        <div className=" relative py-6 bg-neutral-200 rounded-t-lg ">
          <div
            onClick={() => setModal(false)}
            className=" absolute left-6 top-6 cursor-pointer"
          >
            <img src="./svg/Close-icon-modal.svg" className="w-10" />
          </div>
          <h2 className="text-H7 text-center font-SemiBold">جستوجو</h2>
        </div>
        <div className=" text-Body-MD font-Regular text-center mt-10">
          لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
        </div>
        <div className="w-[410px] relative px-4 py-2 rounded-lg border mx-auto mt-3 mb-12 ">
          <label className=" absolute left-4 cursor-pointer">
            <svg
              className=" fill-current "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" />
              <path d="M22.0004 22.75C21.8104 22.75 21.6204 22.68 21.4704 22.53L19.4704 20.53C19.1804 20.24 19.1804 19.76 19.4704 19.47C19.7604 19.18 20.2404 19.18 20.5304 19.47L22.5304 21.47C22.8204 21.76 22.8204 22.24 22.5304 22.53C22.3804 22.68 22.1904 22.75 22.0004 22.75Z" />
            </svg>
          </label>
          <input
            type="text"
            className=" w-full outline-none text-Caption-MD font-Regular "
            placeholder="جستوجو"
          />
        </div>
      </div>
    </>
  );
}
