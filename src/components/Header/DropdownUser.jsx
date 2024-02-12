"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-xl font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-base">UX Designer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/images/user/user-01.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.89062 3.57812 7.89062 5.12187C7.89062 6.66562 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.1094 6.66562 14.1094 5.12187C14.1094 3.57812 12.7188 2.16562 11 2.16562ZM11 11.575C7.39062 11.575 3.3125 13.4125 3.3125 16.6125V19.0794C3.3125 19.4894 3.65234 19.8292 4.0625 19.8292H17.9375C18.3477 19.8292 18.6875 19.4894 18.6875 19.0794V16.6125C18.6875 13.4125 14.6094 11.575 11 11.575Z"
                  fill=""
                />
              </svg>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3125 10.9375V11.5625H20.3125V16.8125H20.6875V17.4375H19.1875V17.0625H19.8125V11.5625H19.1875V10.9375H20.3125ZM15.7344 11.2969C15.5625 11.2969 15.4219 11.4531 15.4219 11.6406V12.3438H6.57812V11.6406C6.57812 11.4531 6.4375 11.2969 6.26562 11.2969C6.09375 11.2969 5.95312 11.4531 5.95312 11.6406V12.3438C5.95312 12.7031 6.25 13 6.60938 13H15.3906C15.75 13 16.0469 12.7031 16.0469 12.3438V11.6406C16.0469 11.4531 15.9062 11.2969 15.7344 11.2969ZM19.5156 10.7031H18.4375V12.8906C18.4375 13.0859 18.2656 13.25 18.0703 13.25H17.9297C17.7344 13.25 17.5625 13.0859 17.5625 12.8906V10.7031H16.4844C16.2891 10.7031 16.125 10.5391 16.125 10.3438V10.2031C16.125 10.0078 16.2891 9.84375 16.4844 9.84375H17.5625V8.01562C17.5625 7.82031 17.7344 7.65625 17.9297 7.65625H18.0703C18.2656 7.65625 18.4375 7.82031 18.4375 8.01562V9.84375H19.5156C19.7109 9.84375 19.875 10.0078 19.875 10.2031V10.3438C19.875 10.5391 19.7109 10.7031 19.5156 10.7031Z"
                  fill=""
                />
              </svg>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
        <Link
          href="/logout"
          className="flex items-center justify-center text-sm font-medium text-red-500 duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          Logout
        </Link>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
