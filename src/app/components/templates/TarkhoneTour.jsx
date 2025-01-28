import React from "react";
import Link from "next/link";

export default function TarkhineTour() {
  return (
    <>
      <div className="px-5 md:px-26.5 mb-12">
        <h4 className="text-H6 md:text-H4 font-Bold text-center">
          ترخینه گردی
        </h4>
        <div className=" flex flex-col md:flex-row justify-center gap-x-6 items-center gap-y-3 mt-6 ">
          <Link href={`/branch/${22}`}>
            <div className="w-[318px] md:w-72 border border-Primary rounded-lg flex flex-row md:flex-col gap-y-2 items-center">
              <img
                src="./images/TarkhineTour/VanakBranch.png"
                className="w-36 md:w-full h-auto md:h-[230px]"
              />
              <div className="flex flex-col items-center gap-y-1 md:p-2">
                <h6 className=" text-Button-SM  md:text-H7 font-SemiBold text-neutral-800">
                  شعبه ونک
                </h6>
                <p className="text-center text-Caption-SM md:text-Caption-LG text-neutral-500 font-Medium">
                  میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
                </p>
              </div>
              <button
                className=" hidden md:flex justify-center items-center gap-x-2   rounded border border-Shade-2 text-Shade-2 py-1.5 px-7 text-Caption-MD md:text-Button-LG font-Medium mb-4 mt-2"
                href={`/branch/${22}`}
              >
                صفحه شعبه{" "}
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"
                      fill="#315F41"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </Link>
          <Link href={`/branch/${22}`}>
            <div className="w-[318px] md:w-72 border border-Primary rounded-lg flex flex-row md:flex-col gap-y-2 items-center">
              <img
                src="./images/TarkhineTour/AghdasiyeBranch.png"
                className="w-36 md:w-full h-auto md:h-[255px]"
              />
              <div className="flex flex-col items-center gap-y-1 md:p-2">
                <h6 className=" text-Button-SM  md:text-H7 font-SemiBold text-neutral-800">
                  شعبه اقدسیه{" "}
                </h6>
                <p className="text-center text-Caption-SM md:text-Caption-LG text-neutral-500 font-Medium">
                  خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸{" "}
                </p>
              </div>
              <button
                className=" hidden md:flex justify-center items-center gap-x-2   rounded border border-Shade-2 text-Shade-2 py-1.5 px-7 text-Caption-MD md:text-Button-LG font-Medium mb-4 mt-2"
                href={`/branch/${22}`}
              >
                صفحه شعبه{" "}
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"
                      fill="#315F41"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </Link>
          <Link href={`/branch/${22}`}>
            <div className="w-[318px] md:w-72 border border-Primary rounded-lg flex flex-row md:flex-col gap-y-2 items-center">
              <img
                src="./images/TarkhineTour/Ekbatan.png"
                className="w-36 md:w-full"
              />
              <div className="flex flex-col items-center gap-y-1 md:p-2">
                <h6 className=" text-Button-SM  md:text-H7 font-SemiBold text-neutral-800">
                  شعبه اکباتان{" "}
                </h6>
                <p className="text-center text-Caption-SM md:text-Caption-LG text-neutral-500 font-Medium">
                  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم{" "}
                </p>
              </div>
              <button
                className=" hidden md:flex justify-center items-center gap-x-2   rounded border border-Shade-2 text-Shade-2 py-1.5 px-7 text-Caption-MD md:text-Button-LG font-Medium mb-4 mt-2"
                href={`/branch/${22}`}
              >
                صفحه شعبه{" "}
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"
                      fill="#315F41"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </Link>
          <Link href={`/branch/${22}`}>
            <div className="w-[318px] md:w-72 border border-Primary rounded-lg flex flex-row md:flex-col gap-y-2 items-center">
              <img
                src="./images/TarkhineTour/ChaloseBranch.png"
                className="w-36 md:w-full"
              />
              <div className="flex flex-col items-center gap-y-1 md:p-2">
                <h6 className=" text-Button-SM  md:text-H7 font-SemiBold text-neutral-800">
                  شعبه چالوس{" "}
                </h6>
                <p className="text-center text-Caption-SM md:text-Caption-LG text-neutral-500 font-Medium">
                  چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                  میلانی{" "}
                </p>
              </div>
              <button
                className=" hidden md:flex justify-center items-center gap-x-2   rounded border border-Shade-2 text-Shade-2 py-1.5 px-7 text-Caption-MD md:text-Button-LG font-Medium mb-4 mt-2"
                href={`/branch/${22}`}
              >
                صفحه شعبه{" "}
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"
                      fill="#315F41"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
