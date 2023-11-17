"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(false);

  useEffect(() => {
    const handleName = () => {
      if (window.scrollY >= 50) {
        setName(true);
      } else {
        setName(false);
      }
    };

    window.addEventListener("scroll", handleName);
  });

  const handleNav = () => setOpen(!open);

  return (
    <header
      className="flex flex-col pb-3 w-screen bg-white 
     shadow-lg z-20">
      {/* Large Screen contact section */}
      <section className="hidden lg:flex justify-center lg:w-screen z-20 fixed text-gray-200 gap-0.5">
        <div className="basis-1/2 flex justify-center items-center text-xl bg-cyan-800 p-3 rounded-b-xl shadow-gray-500 shadow-md">
          <span>Contact us online</span>
        </div>
        <div className="basis-1/2 bg-cyan-800 flex justify-center items-center text-xl rounded-b-xl shadow-gray-500 shadow-md">
          <span className="">Call us</span>
        </div>
      </section>

      <section className="h-fit fixed w-full bg-white  shadow-slate-200 rounded-md pt-4 pb- lg:static lg:pt-16 ">
        <div className="">
          <div className="flex justify-center p-3 lg:justify-center :">
            {/* contact  */}

            <div className="basis-11/12 md:basis-none flex gap-2 w-fit justify-between ">
              <Link href="/">
                <div className="basis-1/2 bg-[#01b2c4] flex justify-center items-center px-3 py-1 rounded-full w-32 md:w-full h-full shadow-md lg:hidden">
                  <span className="text-xs text-center text-gray-800 font-semibold tracking-wide md:text-md lg:text-xl">
                    Contact us online
                  </span>
                </div>
              </Link>
              {/* and call button */}

              <Link href="tel:+251-233-5491">
                <div className="basis-1/2 border border-[#01b2c4] flex flex-col py-1 px-3 rounded-full items-center w-32 md:w-full h-full shadow-md lg:hidden text-ellipsis">
                  <span className="text-xs text-gray-500 font-bold tracking-wide text-center md:text-md ">
                    Call us
                  </span>
                  <span className="text-xs text-gray-500 font-bold tracking-wide md:text-md">
                    251-233-5491
                  </span>
                </div>
              </Link>

              <div className="hidden lg:block lg:basis-1/4">
                <span className="text-2xl">Logo</span>
              </div>

              {/* med and lg screen menu */}
              <div className="hidden md:flex md:justify-center md:items-center md:gap-3 text-sm text-center uppercase font-bold tracking-wide text-cyan-800 lg:basis-1/2 lg:text-2xl lg:gap-6 lg:justify-center">
                <span className="w-1/3">About</span>
                <span className="w-1/3">Services</span>
                <span className="w-1/3">Reviews</span>
              </div>

              {/* social links */}
              <div className="basis-1/12 flex justify-end items-center gap-2 md:justify-between lg:basis-1/4 lg:justify-end lg:gap-6 lg:text-3xl">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className=" text-gray-700"
                />
                <FontAwesomeIcon icon={faEnvelope} className="text-[#01b2c4]" />
              </div>
            </div>

            {/* menu button*/}

            <div
              className="basis-1/12 flex justify-end items-center pr-3 pl-3 md:hidden md:basis-0"
              onClick={handleNav}
              onKeyDown={handleNav}>
              {open ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  role="button"
                  tabIndex={0}
                  className="text-gray-800"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  role="button"
                  tabIndex={0}
                  className="text-gray-800"
                />
              )}
            </div>
          </div>
          <div className={name ? "" : "hidden"}>
            {open ? (
              ""
            ) : (
              <div className="flex justify-center pb-2 pt-2 shadow-md shadow-gay-700">
                <span className="text-[#01b2c4] font-bold text-md tracking-wide md:text-xl lg:text-3xl">
                  Bay to Beach Pools
                </span>
              </div>
            )}
          </div>

          {/* navigation links opens when navigation button is clicked */}

          {open ? (
            <div className="h-screen flex flex-col justify-between items-center m-3.5 pb-72 pt-3.5">
              <ul className="basis-1/2 flex flex-col justify-around items-center bg-white gap-5 mb-5">
                <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full  py-2 px-4 w-full">
                  About
                </li>
                <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full py-2 px-4 w-full">
                  Services
                </li>
                <li className="text-center text-2xl text-gray-600 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full py-2 px-4 w-full">
                  Testimonials
                </li>
              </ul>
              <div className="basis-1/4 relative">
                <Image
                  src="/baytobeach-logo.jpeg"
                  alt="logo"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
      {/* 
      <section id="medium" className={!open ? "hidden" : ""}>
        <div className="flex pt-3 ">
          <div className="basis-1/4 md:basis-1/3"> Logo </div>

          <div className="basis-1/2 md:basis-1/3 flex justify-center">
            <span className="md:text-2xl text-center text-blue-400">
              Bay To Beach Pools
            </span>
          </div>

          <div className="basis 1/4 md:basis-1/3 md:flex justify-center gap-2">
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div className="basis-1/4md:basis-1/3 md:flex justify-center gap-2">
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </section> */}
    </header>
  );
}

export default NavBar;
