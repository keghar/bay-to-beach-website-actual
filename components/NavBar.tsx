"use client";

import { faBars, faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleNav = () => setOpen(!open);

  return (
    <header
      className="flex flex-col pb-3 w-screen bg-white 
    bg-transparent">
      <section className="">
        <div className="">
          <div className="flex justify-center p-3">
            {/* Logo Business name navigation button */}
            <div className="basis-0 hidden md:visible  pl-2"> Logo </div>

            {/* contact and call button */}

            <div className="basis-5/6 flex gap-2 w-fit">
              <Link href="/">
                <div className="basis-1/2 bg-[#01b2c4] flex justify-center items-center px-3 py-1 rounded-full w-fit h-full">
                  <span className="text-xs text-center text-cyan-200">
                    Contact us online
                  </span>
                </div>
              </Link>

              <Link href="tel:+251-233-5491">
                <div className="basis-1/2 border border-[#01b2c4] flex flex-col py-1 px-3 rounded-full items-center w-fit h-full">
                  <span className="text-xs text-teal-800">Call us</span>
                  <span className="text-xs text-teal-800">251-233-5491</span>
                </div>
              </Link>
            </div>

            {/* menu button*/}

            <div
              className="basis-1/6 flex justify-end items-center pr-3"
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
            <div className="">
              <ul className="flex flex-row justify-center gap-3 bg-white opacity-100">
                <li>About</li>
                <li>Services</li>
                <li>Testimonials</li>
              </ul>
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
