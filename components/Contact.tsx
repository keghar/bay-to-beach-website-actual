import React from "react";
import WidthWrapper from "./WidthWrapper";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col mx-auto items-center mt-8 p-4">
      <div className="flex justify-center items-center">
        <h2 className=" font-bold text-cyan-900 text-center text-3xl pb-5 md:text-5xl lg:text-6xl">
          Contact Us
        </h2>
      </div>
      <div>
        <div className="flex justify-center items-center mx-auto w-full">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/"
            netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col justify-center items-center ">
              <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-20 max-w-7xl w-full mx-auto">
                {/* name address phone */}
                <div className="basis-1/2 flex flex-col w-full">
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

                  <div className=" py-2">
                    <label htmlFor="subject" className="uppercase text-sm py-2">
                      Subject
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 w-full"
                      type="text"
                      name="subject"
                      id="subject"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>

              <div className="basis-1/2 flex flex-col justify-center w-full">
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
      </div>
    </section>
  );
}

export default Contact;
