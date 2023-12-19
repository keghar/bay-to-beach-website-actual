"use client";
import React, { useState } from "react";
import WidthWrapper from "./WidthWrapper";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Image from "next/image";

function Contact() {
  interface FormData {
    name: string;
    checkbox: boolean;
    message: string;
    phone: string;
    email: string;
    botcheck: boolean;
    "h-captcha-reponse": string;
  }
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState<any>(false);
  const [message, setMessage] = useState<any>(false);

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "ea0ddc26-5837-4287-b1fb-c90a551dd0db";

  const onHCaptchaChange = (token: string | boolean) => {
    if (typeof token === "string") {
      setValue("h-captcha-reponse", token);
    } else {
      console.error("token is not a string");
    }
  };
  const { submit: onSubmit } = useWeb3Forms<FormData>({
    access_key: apiKey,
    settings: {
      from_name: "",
      subject: "New Form Submission from your Website",
    },
    onSuccess: (message, data) => {
      setIsSuccess(true);
      setMessage(message);
      reset();
    },
    onError: (message, data) => {
      setIsSuccess(false);
      setMessage(message);
    },
  });
  return (
    <section
      id=""
      className="flex flex-col mx-auto px-4 items-center w-full max-w-screen-2xl mt-10 md:mt-32 lg:mt-32">
      <div className="flex justify-center items-center">
        <h2 className=" font-bold text-cyan-900 text-center text-3xl mb-10 md:mb-16 lg:mb-20 md:text-5xl lg:text-3xl">
          Contact Us
        </h2>
      </div>

      <div className="max-w-xl flex flex-col mx-auto px-4  w-full text-left justify-center lg:flex-row lg:mx-0 lg:px-0 lg:max-w-full lg:justify-around">
        <div className="flex flex-col basis-1/2 max-w-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="uppercase text-sm py-2 text-cyan-800">
                Name
              </label>
              <div>
                <input
                  type="text"
                  id="name"
                  autoComplete="false"
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 placeholder:text-gray-400 ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-800 focus:border-gray-400 ring-gray-100"
                  }`}
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>
            </div>
            {/* Phone */}

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="uppercase text-sm py-2 text-cyan-800">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                autoComplete="tel"
                placeholder="251-123-1234"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none  focus:ring-4  ${
                  errors.phone
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-cyan-800 focus:border-gray-600 ring-gray-100"
                }`}
                {...register("phone", {
                  required: "Enter your phone number",
                  // pattern: {
                  //   value: /^\S+@\S+$/i,
                  //   message: "Please enter a valid phone number",
                  // },
                })}
              />
              {errors.phone && (
                <div className="mt-1 text-red-600">
                  <small>{errors.phone.message}</small>
                </div>
              )}
            </div>

            <div className="flex flex-col w-full py-2">
              <label
                htmlFor="email"
                className="uppercase text-sm py-2 text-cyan-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="email@email.com"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-400  rounded-md outline-none   focus:ring-4  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-cyan-800 focus:border-gray-600 ring-gray-100"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            {/* message box */}
            <div className="basis-1/2 flex flex-col justify-center w-full">
              <div className="flex flex-col py-2">
                <label
                  htmlFor="message"
                  className="uppercase text-sm py-2 text-cyan-800">
                  Tell us about your pool or project
                </label>
                <textarea
                  id="message"
                  autoComplete="off"
                  placeholder="Please tell us where you are located and information about your pool or project. i.e. Pool size, salt/chlorine, etc "
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-400    rounded-md outline-none  h-36 focus:ring-4  ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-cyan-800 focus:border-gray-600 ring-gray-100"
                  }`}
                  {...register("message", {
                    required: "Enter your Message",
                  })}
                />
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    {" "}
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>
            </div>
            <div className="mx-auto flex justify-center py-2">
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                onVerify={onHCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 font-semibold text-black transition-colors bg-[#01b2c4] rounded-full hover:bg-cyan-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
            {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-sm text-center text-green-500">
                {message || "Success. Message sent successfully"}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-sm text-center text-red-500">
                {message || "Something went wrong. Please try later."}
              </div>
            )}
          </form>
        </div>
        <div className="h-[400px] md:h-[650px] relative w-auto mt-10 lg:mt-0 flex lg:basis-1/2 lg:max-w-lg">
          <Image
            src="/team-photo.jpeg"
            alt="Photo of the owners"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
