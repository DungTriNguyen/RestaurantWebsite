import React from "react";

import { SubHeading } from "../../components";

import { images } from "../../constants";

import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Awards() {
  return (
    <>
      <div className="bg-primary-black font-CormorantUpright app__bg text-primary-golden">
        <div className="flex flex-col justify-between items-center gap-10 text-center">
          <div className="flex gap-64 m-24 ">
            {" "}
            <div className="">
              <div className="">
                <img
                  src={images.certficate}
                  alt="sign_image"
                  className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
                />
              </div>
              <div className="mt-8">
                <h1 className="">HA LONG BAY COOKING CHEF CERTIFICATE</h1>
                <p className="">Date: November 15, 2024</p>
                <p className="">Chef Recipient: Chef John Smith</p>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  src={images.cer_vungtau}
                  alt="sign_image"
                  className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
                />
              </div>
              <div className="mt-8">
                <h1 className="">VUNG TAU TOUR CHEF VIP CERTIFICATE</h1>
                <p className="">Date: October 5, 2024</p>
                <p className="">Chef Recipient: Chef Emily Nguyen</p>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  src={images.cer_sasimi}
                  alt="sign_image"
                  className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
                />
              </div>
              <div className="mt-8">
                <h1 className="">SAIGON CENTRE CERTIFICATE</h1>
                <p className="">Date: September 12, 2024</p>
                <p className="">Chef Recipient: Chef Michael Tran</p>
              </div>
            </div>
          </div>

          <div className="flex gap-64 mb-20">
            <div className="">
              <div className="">
                <img
                  src={images.cer_noodle}
                  alt="sign_image"
                  className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
                />
              </div>
              <div className="mt-8">
                <h1 className="">HANOI FOOD CHEF</h1>
                <p className="">Date: November 15, 2024</p>
                <p className="">Chef Recipient: Chef John Smith</p>
              </div>
            </div>

            <div className="">
              <div className="">
                <img
                  src={images.cer_hue}
                  alt="sign_image"
                  className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
                />
              </div>
              <div className="mt-8">
                <h1 className="">FOOD TOUR HUE CITY CHEF</h1>
                <p className="">Date: October 5, 2024</p>
                <p className="">Chef Recipient: Chef Emily Nguyen</p>
              </div>
            </div>

            <div className="">
              <div className="">
                <img
                  src={images.cer_hanoi}
                  alt="sign_image"
                  className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
                />
              </div>
              <div className="mt-8">
                <h1 className="">HANOI FOOD CHEF</h1>
                <p className="">Date: September 12, 2024</p>
                <p className="">Chef Recipient: Chef Michael Tran</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
