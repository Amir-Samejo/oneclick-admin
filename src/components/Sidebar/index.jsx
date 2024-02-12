"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupIcon from '@mui/icons-material/Group';
import CalculateIcon from '@mui/icons-material/Calculate';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null
      ? false
      : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ key }) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-80 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <div className="flex items-center justify-between gap-2 px-8 py-3 lg:py-3">
        <Link href="/">
          <Image
            width={150}
            height={32}
            src={"/images/logo/logo-white.png"}
            alt="Logo"
            priority
          />

        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-white"
        >
          <ArrowBackOutlinedIcon />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-0 px-4 py-4 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/partner"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 text-xl duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <PeopleOutlineIcon />
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 text-xl duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <AutoAwesomeMosaicOutlinedIcon />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/sales"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 text-xl duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <AssessmentOutlinedIcon />
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/claim"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 text-xl duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <VolunteerActivismOutlinedIcon />
                  Claim
                </Link>
              </li>
              <li>
                <Link
                  href="/mis"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 text-xl duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <AutoAwesomeMosaicOutlinedIcon />
                  MIS
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 text-xl duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <GroupIcon />
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 text-xl duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <CalculateIcon />
                  Premium Calculator
                </Link>
              </li>

              {/* <!-- Menu Item Forms --> */}

              <li>
                <SidebarLinkGroup
                  activeCondition={
                    pathname === "/forms" || pathname.includes("forms")
                  }
                >
                  {(handleClick, open) => {
                    return (
                      <>
                        <Link
                          href="#"
                          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 text-xl duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/forms" ||
                            pathname.includes("forms")) &&
                            "bg-graydark dark:bg-meta-4"
                            }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          Dropdown

                          <ArrowForwardIosOutlinedIcon />


                        </Link>
                        {/* <!-- Dropdown Menu Start --> */}
                        <div
                          className={`translate transform overflow-hidden ${!open && "hidden"
                            }`}
                        >

                          <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                            <li>
                              <Link
                                href="/"
                                className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/forms/form-elements" &&
                                  "text-white"
                                  }`}
                              >
                                Link 1
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/forms/form-layout" &&
                                  "text-white"
                                  } `}
                              >
                                Link 2
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Dropdown Menu End --> */}
                      </>
                    );
                  }}
                </SidebarLinkGroup>
                {/* <!-- Menu Item Forms --> */}
              </li>

            </ul>
          </div>

          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              OTHERS
            </h3>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
