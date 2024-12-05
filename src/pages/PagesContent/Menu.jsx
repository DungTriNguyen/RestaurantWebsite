import React from "react";

import { SubHeading } from "../../components";

import { images } from "../../constants";

import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Menu() {
  return (
    <>
      <div className="text-primary-golden font-CormorantUpright text-center text-2xl app__bg ">
        <div className="flex app__wrapper_img app__wrapper_img img ">
          {/* product 1 */}
          <div className="mt-28 flex justify-between items-center">
            <div className="flex flex-col">
              <img
                src={images.bun_bo_hue}
                alt=""
                className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px] hover:scale-105 transition-transform"
              />
              <h1 className="uppercase font-bold">Bun Bo Hue</h1>
              <h2 className="">$500</h2>
              <p className="">
                Bún Bò Huế is a Vietnamese noodle soup from Hue, known for its
                rich, spicy broth with beef, pork, and lemongrass, served with
                fresh herbs and chili.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={images.beef_steak}
                alt=""
                className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px] hover:scale-105 transition-transform"
              />
              <h1 className="uppercase font-bold">Beef Steak</h1>
              <h2 className="">$400</h2>
              <p className="">
                Beef steak is a classic dish featuring a tender cut of beef,
                grilled or pan-seared to perfection. like mashed potatoes,
                vegetables, or salad, highlighting its juicy, flavorful meat.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={images.pizza}
                alt=""
                className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px] hover:scale-105 transition-transform"
              />
              <h1 className="uppercase font-bold">Pizza</h1>
              <h2 className="">$250</h2>
              <p className="">
                Pizza is an Italian dish with a baked dough base, topped with
                tomato sauce, cheese, and various ingredients like meats,
                vegetables, or herbs.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={images.noodle}
                alt=""
                className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px] hover:scale-105 transition-transform"
              />
              <h1 className="uppercase font-bold">Noodle</h1>
              <h2 className="">$300</h2>
              <p className="">
                Noodles are a versatile dish made from wheat, rice, or other
                flours, served in various styles—soups, stir-fries, or salads.
                Popular worldwide, they pair with diverse sauces, meats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
