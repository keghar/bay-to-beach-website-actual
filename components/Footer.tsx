import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col p-3 mt-10">
        {/* Lead form */}
        <section className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <h2 className=" font-bold text-cyan-900 text-center text-3xl pb-5">
              Contact Us
            </h2>
          </div>
          <div>
            <div className="p-4">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                action="/"
                netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                    id="message"
                    autoComplete="off"></textarea>
                </div>
                <button
                  type="submit"
                  className="shadow-xl shadow-gray-400 rounded-full uppercase bg-[#01b2c4] w-full p-4 text-gray-800 mt-4">
                  Send Message
                </button>

                <label className="hidden">
                  Dont Fill this out if youre human:
                  <input name="bot-field" />
                </label>
              </form>
            </div>
          </div>
        </section>

        {/* Footer logo and links */}

        <section className=" flex justify-between items-center p-3">
          {/* Logo */}
          <div className="">
            <div>
              <Image
                src="/baytobeach-logo.jpeg"
                height={200}
                width={200}
                alt="logo"
                className="p-2"
              />
            </div>
          </div>
          {/* Links */}

          <div className=" flex flex-col justify-center items-center gap-3 p-3">
            <div className="flex flex-col justify-center items-center gap-1">
              <h4 className="text-sm font-semibold text-cyan-900 tracking-wider">
                Cities We Service
              </h4>
              <div className=" grid grid-cols-2 justify-center items-center text-xs text-gray-700 -ml-4 -mr-4">
                <span className="text-center">Gulf Shores</span>
                <span className="text-center">Foley</span>
                <span className="text-center">Orange Beach</span>
                <span className="text-center">Fort Morgan</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-xs text-gray-700">
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
