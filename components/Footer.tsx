import React from "react";
import Image from "next/image";

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
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"></textarea>
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
              />
            </div>
          </div>
          {/* Links */}

          <div className=" flex flex-col justify-center items-center gap-3 p-3">
            <h4>Links</h4>
            <div className="flex gap-2 text-sm">
              <span>Facbook</span>
              <span>Email</span>
              <span>Phone</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h4>Cities We Service</h4>
              <div className=" grid grid-cols-2 justify-center items-center text-xs text-center -m-2">
                <span className="text-center">Gulf Shores</span>
                <span>Fort Morgan</span>
                <span>Orange Beach</span>
                <span>Foley</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
