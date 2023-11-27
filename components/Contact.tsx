import React from "react";
import WidthWrapper from "./WidthWrapper";

function Contact() {
  return (
    <section
      id=""
      className="flex flex-col mx-auto items-center w-full max-w-screen-2xl mt-10 md:mt-32 lg:mt-32">
      <div className="flex justify-center items-center">
        <h2 className=" font-bold text-cyan-900 text-center text-3xl mb-10 md:mb-16 lg:mb-20 md:text-5xl lg:text-6xl">
          Contact Us
        </h2>
      </div>

      <div className="flex justify-center w-screen px-4">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/"
          netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center lg:w-screen lg:max-w-screen-lg lg:px-20 lg:gap-10 xl:gap-10">
              {/* name address phone */}

              <div className="basis-1/2 flex flex-col items-center mx-auto ">
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
                <div className="flex flex-col w-full py-2">
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
              </div>
              {/* message box */}
              <div className="basis-1/2 flex flex-col justify-center w-full">
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={6}
                    name="message"
                    id="message"
                    autoComplete="off"></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="shadow-xl shadow-gray-400 rounded-full uppercase bg-[#01b2c4] w-full p-4 text-gray-800 lg:w-fit mt-4">
              Send Message
            </button>
          </div>

          <label className="hidden">
            Dont Fill this out if youre human:
            <input name="bot-field" />
          </label>
        </form>
      </div>
    </section>
  );
}

export default Contact;
