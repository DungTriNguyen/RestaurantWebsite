import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
export default function AboutUs() {
  return (
    <>
      <div
        className="relative app__bg flex__center section__padding"
        id="about"
      >
        <div className="absolute inset-0 flex__center">
          <img
            src={images.G}
            alt="G_overlay"
            className="z-0 h-1/4 sm:h-2/6 lg:w-96 lg:h-96"
          />
        </div>

        <div className="w-full z-2 flex__center flex-col lg:flex-row">
          <div className=" flex-one flex justify-end items-end flex-col text-right">
            <h1 className="headtext__cormorant">About Us</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans mx-0 my-6 text-primary-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <button type="button" className="custom__button">
              Know More
            </button>
          </div>

          <div className="my-1 mx-2 lg:my-8 lg:mx-16 lg:rotate-0 rotate-90 flex__center">
            <img
              src={images.knife}
              alt="about_knife"
              className="h-80vwh lg:h-screen 2xl:h-70vh"
            />
          </div>

          <div className=" flex-one flex justify-start items-start flex-col text-left">
            <h1 className="headtext__cormorant">Our History</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans mx-0 my-6 text-primary-gray">
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
              Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </p>
            <button type="button" className="custom__button">
              Know More
            </button>
          </div>
        </div>
      </div>
      {/* content 1 */}
      <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.chef_try} alt="chef_image" />
        </div>
        <div className="app__wrapper_info flex justify-start items-start">
          <SubHeading title="Chef's word" />
          <h1 className="headtext__cormorant">What we believe in</h1>

          <div className="app__chef-content flex flex-col w-full mt-10">
            <div className="app__chef-content_quote flex justify-start items-end">
              <img
                src={images.quote}
                alt="quote_image"
                className="w-[47px] h-[40px] mt-0 mr-4 mb-4 ml-0"
              />
              <p className="p__opensans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit .
              </p>
            </div>
            <p className="p__opensans">
              {" "}
              Born during World War II, Teppanyaki represents a harmonious blend
              of Japanese culinary excellence and Western artistry. The word
              “teppan” refers to steel plates, while “yaki” denotes dishes
              prepared on a flat iron griddle. As the smoke begins to rise from
              the giant steel cooking surface, mingling with the signature aroma
              of fresh ingredients, Teppanyaki chefs captivate their audience
              with masterful cooking techniques, wielding their spatulas with
              finesse to craft exquisite dishes under the admiring gaze of
              diners. The secret of this culinary style lies in the teppan
              grill, featuring a flat iron plate that ensures uniform heat
              across its surface. This unique feature evaporates excess moisture
              while preserving the natural essence of the fresh ingredients.
              Combined with the chef’s artistry, every Teppanyaki dish is a
              treasure waiting to be discovered, elevating the sensory
              experience of diners to unparalleled heights.{" "}
            </p>
          </div>

          <div className="app__chef-sign wi-full mt-10">
            <p className=" font-CormorantUpright font-normal text-[32px] leading-9 tracking-wider capitalize text-primary-golden ">
              Kevin Luo
            </p>
            <p className="p__opensans">Chef & Founder</p>
            <img
              src={images.sign}
              alt="sign_image"
              className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
            />
          </div>
        </div>
      </div>
      {/* content 2 */}
      <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_info flex justify-start items-start">
          <SubHeading title="Chef's word" />
          <h1 className="headtext__cormorant">What we believe in</h1>

          <div className="app__chef-content flex flex-col w-full mt-10">
            <div className="app__chef-content_quote flex justify-start items-end">
              <img
                src={images.quote}
                alt="quote_image"
                className="w-[47px] h-[40px] mt-0 mr-4 mb-4 ml-0"
              />
              <p className="p__opensans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit .
              </p>
            </div>
            <p className="p__opensans">
              {" "}
              Born during World War II, Teppanyaki represents a harmonious blend
              of Japanese culinary excellence and Western artistry. The word
              “teppan” refers to steel plates, while “yaki” denotes dishes
              prepared on a flat iron griddle. As the smoke begins to rise from
              the giant steel cooking surface, mingling with the signature aroma
              of fresh ingredients, Teppanyaki chefs captivate their audience
              with masterful cooking techniques, wielding their spatulas with
              finesse to craft exquisite dishes under the admiring gaze of
              diners. The secret of this culinary style lies in the teppan
              grill, featuring a flat iron plate that ensures uniform heat
              across its surface. This unique feature evaporates excess moisture
              while preserving the natural essence of the fresh ingredients.
              Combined with the chef’s artistry, every Teppanyaki dish is a
              treasure waiting to be discovered, elevating the sensory
              experience of diners to unparalleled heights.{" "}
            </p>
          </div>

          <div className="app__chef-sign wi-full mt-10">
            <p className=" font-CormorantUpright font-normal text-[32px] leading-9 tracking-wider capitalize text-primary-golden ">
              Kevin Luo
            </p>
            <p className="p__opensans">Chef & Founder</p>
            <img
              src={images.sign}
              alt="sign_image"
              className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
            />
          </div>
        </div>
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.chef_tatto} alt="chef_image" />
        </div>
      </div>
    </>
  );
}
