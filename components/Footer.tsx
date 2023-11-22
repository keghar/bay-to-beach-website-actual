import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:justify-between p-3 mt-10 max-w-screen-2xl w-full">
        {/* Footer logo and links */}

        <section className=" flex justify-center w-full items-center p-3">
          {/* Logo */}
          <div className="md:basis-1/3 flex-justify-center">
            <div>
              <Image
                src="/baytobeach-logo.svg"
                height={200}
                width={200}
                alt="logo"
                className="p-2"
              />
            </div>
          </div>
          {/* Links */}

          <div className="md:basis-2/3 flex flex-col md:flex-row md:justify-around justify-center md:w-full items-center gap-3 p-3">
            <div className="flex flex-col justify-center items-center gap-1">
              <h4 className="text-sm font-semibold text-cyan-900 tracking-wider md:text-xl">
                Cities We Service
              </h4>
              <div className=" grid grid-cols-2 justify-center md:grid-col-1 md:flex md:flex-col items-center text-xs md:text-lg text-gray-700 -ml-4 -mr-4">
                <span className="text-center">Gulf Shores</span>
                <span className="text-center">Foley</span>
                <span className="text-center">Orange Beach</span>
                <span className="text-center">Fort Morgan</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-xs md:text-lg text-gray-700">
              <div className="text-center">
                {/* <FontAwesomeIcon
                  icon={faFacebook}
                  className=" text-gray-700 text-sm"
                /> */}
              </div>
              <div className="flex flex-col gap-1 ">
                <FontAwesomeIcon icon={faPhone} className="text-[#01b2c4]" />
                <span className="text-center">251-555-5555</span>
              </div>
              <div className="flex flex-col gap-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#01b2c4]" />
                <span className="tex-center -ml-4 -mr-4">
                  baytobeachpoolsllc@gmail.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
