import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dropdown({ title, items, imgSrc }) {
  const router = useRouter();

  const logOutHandler = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (response.status === 200) {
      alert("LogOut Successfull");
      router.replace("/");
      window.location.reload();
    }
  };

  return (
    <div className=" relative Drop-Down">
      {title && (
        <div className="flex  items-center gap-x-1 hover:text-Primary">
          {title}
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.50001 11.7C8.03335 11.7 7.56668 11.52 7.21335 11.1667L2.86668 6.81999C2.67335 6.62666 2.67335 6.30666 2.86668 6.11332C3.06001 5.91999 3.38001 5.91999 3.57335 6.11332L7.92001 10.46C8.24001 10.78 8.76001 10.78 9.08001 10.46L13.4267 6.11332C13.62 5.91999 13.94 5.91999 14.1333 6.11332C14.3267 6.30666 14.3267 6.62666 14.1333 6.81999L9.78668 11.1667C9.43335 11.52 8.96668 11.7 8.50001 11.7Z" />
          </svg>
        </div>
      )}
      {imgSrc && <img className="w-4 h-4 md:w-6 md:h-6 " src={imgSrc} />}

      <ul className="hidden md:block  absolute top-10 w-36 child:text-Body-SM text-neutral-800  child:pr-2 child:py-2.5 child:border-b child:border-b-neutral-200   shadow-DropShadow-12 bg-white">
        {items.map((item, index) => {
          return (
            <li
              className={
                item.title === "خروج از حساب"
                  ? " hover:text-Error"
                  : "hover:text-Primary"
              }
              onClick={item.title === "خروج از حساب" ? logOutHandler : () => {}}
              key={index}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
