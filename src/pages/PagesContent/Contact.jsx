import React from "react";

import { SubHeading } from "../../components";

import { images } from "../../constants";

import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <div className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden text-size-2xl ">
        <div className="flex-1 width-[100%] flex flex-col items-start justify-between m-24">
          <div className="flex">
            <div className="">
              <FiMapPin />
              ADDRESS
              <div className="">
                <p className="">Postcode</p>
                <p className="">Street</p>
                <p className="">City</p>
                <p className="">Country</p>
              </div>
            </div>
            <div className="">
              <FiClock />
              TIME OPEN
              <div className="">
                <p className="">Monday-Friday: 08:00 am - 12:00 am</p>
                <p className="">Saturday-Sunday: 07:00 am - 11:00 pm</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <FiMail />
              EMAIL
              <div className="">
                <p className="">dungtringuyen113@gmail.com</p>
              </div>
            </div>
            <div className="">
              <FiPhone />
              CONTACT
              <div className="">
                <p className="">+84 9233244921</p>
                <p className="">+84 965193758</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app__wrapper_img text-primary-golden m-24">
          {/* <img src={images.welcome} alt="header_img" /> */}
          <form action="" className="border rounded-2xl p-4 ">
            <div className="flex flex-col justify-between items-center p-4 m-2 ">
              <div className="p-2 m-2">
                <h1>LET SOME QUESTIONS FOR US</h1>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col p-2 m-2">
                  <lable className="">Fullname</lable>
                  <input type="text" className="text-black" />
                </div>
                <div className="flex flex-col p-2 m-2">
                  <lable className="">Phone number or email</lable>
                  <input type="text" className="text-black" />
                </div>
                <div className="flex flex-col p-2 m-2">
                  <lable className="">Subject</lable>
                  <input type="text" className="text-black" />
                </div>
                <div className="flex flex-col p-2 m-2">
                  <lable className="">Content</lable>
                  <textarea name="" id="" className="text-black"></textarea>
                </div>
                <div className="flex flex-col p- m-2">
                  <button
                    type="text"
                    className="border rounded-2xl m-4 p-2 hover:bg-yellow-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
