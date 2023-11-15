"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleNav = () => setOpen(!open);

  return (
    <header
      className="flex flex-col pb-3 w-screen bg-white 
    bg-transparent shadow-lg z-20">
      <section className="h-fit fixed w-full bg-white shadow-md shadow-slate-200 rounded-md">
        <div className="">
          <div className="flex justify-center p-3 opcity-75">
            {/* contact and call button */}

            <div className="basis-11/12 flex gap-2 w-fit">
              <Link href="/">
                <div className="basis-1/2 bg-[#01b2c4] flex justify-center items-center px-3 py-1 rounded-full w-fit h-full shadow-md">
                  <span className="text-xs text-center text-gray-800 font-semibold tracking-wide">
                    Contact us online
                  </span>
                </div>
              </Link>

              <Link href="tel:+251-233-5491">
                <div className="basis-1/2 border border-[#01b2c4] flex flex-col py-1 px-3 rounded-full items-center w-fit h-full shadow-md">
                  <span className="text-xs text-gray-500 font-bold tracking-wide">
                    Call us
                  </span>
                  <span className="text-xs text-gray-500 font-bold tracking-wide">
                    251-233-5491
                  </span>
                </div>
              </Link>
              {/* social links */}
              <div className="basis-1/12 flex justify-center items-center gap-3 pl-2">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className=" text-blue-600"
                />
                <FontAwesomeIcon icon={faEnvelope} className="text-[#01b2c4]" />
              </div>
            </div>

            {/* menu button*/}

            <div
              className="basis-1/12 flex justify-end items-center pr-3"
              onClick={handleNav}
              onKeyDown={handleNav}>
              {open ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  role="button"
                  tabIndex={0}
                  className=""
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  role="button"
                  tabIndex={0}
                  className="fas fa-bars"
                />
              )}
            </div>
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
