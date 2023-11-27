"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import WidthWrapper from "./WidthWrapper";
import MobileNav from "./MobileNav";

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
      className="flex flex-col lg:justify-center lg:w-full lg:mx-auto bg-white 
     shadow-lg max-w-screen-2xl z-20">
      {/* Large Screen contact section */}

      <WidthWrapper>
        <div className="hidden relative container max-w-screen-2xl lg:flex lg:justify-center bg-white">
          <section className="hidden fixed max-w-screen-2xl lg:flex  lg:w-full  text-gray-800 gap-0.5 z-30 bg-white">
            <div className="basis-1/2 flex justify-center items-center text-xl bg-[#01b2c4] p-3 rounded-b-xl shadow-gray-300 shadow-md hover:bg-gradient-to-bl from-[#01b2c4] to-cyan-500">
              <Link href="#contact">
                <span>Contact us online</span>{" "}
              </Link>
            </div>

            <div className="basis-1/2 bg-[#01b2c4] flex justify-center items-center text-xl rounded-b-xl shadow-gray-300 shadow-md hover:bg-gradient-to-bl from-[#01b2c4] to-cyan-500">
              <Link href="tel:251-233-5491">
                <span className="">
                  Call us at <span className="font-bold">251-233-5491</span>{" "}
                </span>{" "}
              </Link>
            </div>
          </section>
        </div>
      </WidthWrapper>

      <section className=" fixed w-full bg-white  shadow-gray-200 rounded-md pt-4 pb- lg:static lg:pt-16">
        <div className="">
          <div className="flex justify-center p-3 lg:justify-center :">
            {/* contact  */}

            <div className="basis-11/12 md:basis-none flex gap-2 w-fit justify-between ">
              <Link href="#contact">
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

              <div className="hidden lg:flex lg:basis-1/4 lg:w-full">
                <Image src="/bird-l.svg" alt="logo" height={50} width={50} />
                <Link href="/">
                  {" "}
                  <div className="flex flex-col justify-center itmes-center text-center -mx-2 text-lg text-cyan-800 font-bold font-serif">
                    <span>Bay To Beach</span>
                    <span> Pools</span>
                  </div>
                </Link>
              </div>

              {/* med and lg screen menu */}

              <div className="hidden md:flex md:justify-center md:items-center md:gap-3 text-sm text-center uppercase font-bold tracking-wide text-cyan-800 lg:basis-1/2 lg:text-2xl lg:gap-6 lg:justify-center">
                <Link href="#about">
                  <span className="w-1/3">About</span>
                </Link>
                <Link href="#services">
                  <span className="w-1/3">Services</span>
                </Link>
                <Link href="#reviews">
                  <span className="w-1/3">Reviews</span>
                </Link>
              </div>

              {/* social links */}
              <div className="basis-1/12 flex justify-end items-center gap-2 text-lg md:justify-between lg:basis-1/4 lg:justify-end lg:gap-6 lg:text-3xl">
                <Link href="https://www.facebook.com/profile.php?id=61552710876761">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className=" text-gray-600"
                  />
                </Link>
                <Link href="mailto:baytobeachpoolsllc@gmail.com">
                  {" "}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-600"
                  />
                </Link>
              </div>
            </div>

            {/* menu button*/}

            <div
              className="basis-1/12 flex justify-end items-center pr-3 pl-3 text-lg md:hidden md:basis-0 "
              aria-hidden="false"
              onClick={handleNav}
              onKeyDown={handleNav}>
              {open ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  role="button"
                  tabIndex={0}
                  className="text-gray-600 outline-gray-300 text-xl"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  role="button"
                  tabIndex={0}
                  className="text-gray-600 outline-gray-300 "
                />
              )}
            </div>
          </div>
          <div className={name ? "" : "hidden"}>
            {open ? (
              ""
            ) : (
              <div className=" flex justify-around items-center shadow-lg shadow-gray-300 bg-white lg:fixed lg:max-w-screen-2xl lg:w-full lg:top-12 lg:pt-2">
                <Image
                  src="/bird-l.svg"
                  alt="bird logo"
                  height={30}
                  width={30}
                  className="pb-2"
                />
                <Link href="/">
                  <span className="text-[#01b2c4] font-bold text-md tracking-wide pb-2 md:text-xl font-serif lg:text-3xl">
                    Bay to Beach Pools
                  </span>
                </Link>
                <Image
                  src="/bird-r.svg"
                  alt="bird logo"
                  height={30}
                  width={30}
                  className="pb-2"
                />
              </div>
            )}
          </div>

          {/* navigation links opens when navigation button is clicked */}

          {open ? (
            <div className="relative h-screen flex flex-col justify-between items-center gap-10 pb-72 z-30">
              <ul className="basis-1/2 flex flex-col justify-around items-center bg-white gap-10 mt-10 mb-5">
                <Link href="#about" onClick={handleNav}>
                  <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full  py-2 px-4 w-full">
                    about
                  </li>
                </Link>
                <Link href="#services" onClick={handleNav}>
                  <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full py-2 px-4 w-full">
                    Services
                  </li>
                </Link>
                <Link href="#reviews" onClick={handleNav}>
                  <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full py-2 px-4 w-full">
                    Reviews
                  </li>
                </Link>
              </ul>
              <div className="basis-1/4 relative">
                <Image
                  src="/baytobeach-logo.svg"
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
    </header>
  );
}

export default NavBar;
