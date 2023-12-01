import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="max-w-screen-2xl mx-auto w-full mt-10 md:mt-24 lg:mt-32 mb-4 px-3">
      <div className="relative mt-10 mb-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-base font-semibold leading-6 text-gray-900">
            <Image src="/bird-l.svg" alt="bird" width={40} height={40} />
          </span>
        </div>
      </div>
      {/* Footer logo and links */}
      <section className=" flex justify-between items-center md:justify-center w-full">
        {/* Logo */}
        <div className="basis-1/2 md:basis-1/3 flex justify-start">
          <Image
            src="/baytobeach-logo.svg"
            height={200}
            width={200}
            alt="logo"
            className=" md:ml-6  md:mr-8"
          />
        </div>
        {/* Links */}
        <div className="md:basis-2/3 flex flex-col md:flex-row md:ml-4 md:justify-stretch justify-center md:w-full items-center gap-3 -ml-4 mt-">
          <div className="flex flex-col justify-center items-center gap-1 md:basis-1/2 md:flex-1">
            <h4 className="text-sm font-semibold text-cyan-900 tracking-wider md:text-xl">
              Cities We Service
            </h4>
            <div className=" grid grid-cols-1 justify-center md:grid-col-1 md:flex md:flex-col items-center text-xs md:text-lg text-gray-700 -ml-6 -mr-6">
              <span className="text-center">Gulf Shores</span>
              <span className="text-center">Foley</span>
              <span className="text-center">Orange Beach </span>{" "}
              <span className="text-center">Fort Morgan</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 text-xs md:text-base lg:text-xl text-gray-700 md:basis-1/2">
            <div className="text-center">
              {/* <FontAwesomeIcon
                  icon={faFacebook}
                  className=" text-gray-700 text-sm"
                /> */}
            </div>

            <Link href="tel:251-233-5491">
              {" "}
              <div className="flex flex-col gap-1 ">
                <FontAwesomeIcon icon={faPhone} className="text-[#01b2c4]" />
                <span className="text-center">251-233-5491</span>
              </div>
            </Link>
            <Link href="mailto:baytobeachpoolsllc@gmail.com">
              <div className="flex flex-col gap-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#01b2c4]" />
                <span className="text-center ">
                  baytobeachpoolsllc@gmail.com
                </span>
              </div>
            </Link>
            <Link href="https://www.facebook.com">
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  className="text-[#0966ff]"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center mt-2">
        <span className=" text-gray-500 text-xs text-center m-auto">
          Copyright &copy; 2024 Bay To Beach Pools LLC
        </span>
        <span className="text-gray-500 text-xs text-center m-auto">
          Design by
        </span>
      </div>
    </footer>
  );
}

export default Footer;
