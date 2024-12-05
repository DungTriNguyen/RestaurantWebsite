import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data, meal } from "../../constants";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card flex-one flex justify-start items-start min-w-full my-4 mx-0 mobile:m-4 mobile:min-w-[230px] 2xl:min-w-[390px]">
    <img src={imgUrl} alt="awards" className="w-[50px] h-[50px]" />
    <div className="app__laurels_awards-card_content flex flex-col ml-4">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);
const Home = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <>
      {/* Header */}
      <div
        className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden"
        id="home"
      >
        <div className="flex-1 w-full flex items-start justify-center flex-col">
          <SubHeading title="Chase the new flavour" />
          <h1 className="headtext__cormorant font-bold mb-4">
            The Key To Fine Dining
          </h1>
          <p className="p__opensans mb-4">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </div>

        <div className="app__wrapper_img">
          <img src={images.welcome} alt="header_img" />
        </div>
      </div>
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
        {/* AboutUs */}
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
      {/* SpecialMenu */}
      <div
        className="flex-col bg-primary-black flex__center section__padding"
        id="menu"
      >
        <div className="mb-8 m-auto flex flex-col justify-center items-center">
          <SubHeading title="Menu that fits your palatte" />
          <h1 className="headtext__cormorant">Today&apos;s Special</h1>
        </div>

        <div className="app__specialMenu-menu w-full mt-8 mx-0 flex justify-center items-center flex-col lg:items-start lg:flex-row">
          <div className="app__specialMenu-menu_food  flex__center flex-one w-full flex-col">
            <p className="app__specialMenu-menu_heading font-CormorantUpright font-semibold text-4xl leading-9 tracking-wider text-primary-white md:text-5xl">
              Meals
            </p>
            <div className="app__specialMenu_menu_items flex flex-col mx-0 my-8 w-full">
              {data.food.map((food, index) => (
                <MenuItem
                  key={food.title + index}
                  title={food.title}
                  price={food.price}
                  tags={food.tags}
                />
              ))}
            </div>
          </div>

          <div className="app__specialMenu-menu_img w-full mt-4 mb-12 mx-0 lg:w-[410px] lg:mx-8 lg:my-0 2xl:w-[650px]">
            <img
              src={images.menu2}
              alt="menu__img"
              className="m-auto w-5/6 h-auto 2xl:h-[920px]"
            />
          </div>

          <div className="app__specialMenu-menu_drinks  flex__center flex-one w-full flex-col">
            <p className="app__specialMenu-menu_heading font-CormorantUpright font-semibold text-4xl leading-9 tracking-wider text-primary-white md:text-5xl">
              Drinks
            </p>
            <div className="app__specialMenu_menu_items flex flex-col mx-0 my-8 w-full">
              {data.drinks.map((cocktail, index) => (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button type="button" className="custom__button">
            View More
          </button>
        </div>
      </div>
      {/* Chef */}
      <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.chef} alt="chef_image" />
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
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.{" "}
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
      {/* Intro */}
      <div className="h-screen relative">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)] flex__center">
          <div
            className=" w-[100px] h-[100px] rounded-full border-[1px] border-primary-golden cursor-pointer flex__center"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseFill className="text-primary-white text-[30px]" />
            ) : (
              <BsFillPlayFill className="text-primary-white text-[30px]" />
            )}
          </div>
        </div>
      </div>
      {/* Laurels */}
      <div className="app__bg app__wrapper section__padding" id="awards">
        <div className="app__wrapper_info">
          <SubHeading title="Awards & recognition" />
          <h1 className="headtext__cormorant">Our Laurels</h1>

          <div className="app__laurels_awards flex justify-start items-center flex-wrap mt-12">
            {data.awards.map((award) => (
              <AwardCard award={award} key={award.title} />
            ))}
          </div>
        </div>

        <div className=" flex-one flex justify-center items-center ml-0 mt-8 w-full lg:ml-8 lg:mt-0">
          <img
            src={images.laurels}
            alt="laurels_img"
            className="w-full px-4 mobile:px-0 mobile:mt-4 sm:w-3/5 lg:w-4/5"
          />
        </div>
      </div>
      {/* Gallery */}
      <div className="app__gallery flex__center flex-col bg-primary-black py-16 px-8 xl:px-24 xl:flex-row">
        <div className="app__gallery-content flex-one flex justify-center items-center flex-col min-w-[100%] xl:pr-8 sm:min-w-[500px] ">
          <SubHeading title="Instagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p
            className="p__opensans mt-8 text-center"
            style={{ color: "#AAAAAA" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button type="button" className="custom__button my-10 xl:mt-8">
            View More
          </button>
        </div>
        <div className="app__gallery-images flex-one flex flex-row max-w-[90%] relative xl:max-w-[50%]">
          <div
            className="app__gallery-images_container flex flex-row w-max overflow-x-scroll"
            ref={scrollRef}
          >
            {[
              images.gallery01,
              images.gallery02,
              images.gallery03,
              images.gallery04,
            ].map((image, index) => (
              <div
                className="app__gallery-images_card relative min-w-[240px] h-[320px] mr-8 flex__center sm:min-w-[301px] sm:h-[447px] "
                key={`gallery_image-${index + 1}`}
              >
                <img
                  src={image}
                  alt="gallery_image"
                  className="w-full h-full object-cover opacity-100 duration-500 ease-in-out"
                />
                <BsInstagram className="gallery__image-icon absolute text-primary-white text-size-4xl opacity-0 duration-500 ease-in-out cursor-pointer" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows w-full flex justify-between items-center py-0 px-4 absolute bottom-[5%]">
            <BsArrowLeftShort
              className="gallery__arrow-icon text-primary-golden text-size-4xl cursor-pointer bg-primary-black rounded-md hover:text-primary-white"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon text-primary-golden text-size-4xl cursor-pointer bg-primary-black rounded-md hover:text-primary-white"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
      {/* FindUs */}
      <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
          <SubHeading title="Contact" />
          <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
            Find Us
          </h1>
          <div className="app__wrapper-content">
            <p className="p__opensans">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
            </p>
            <p
              className="p__cormorant"
              style={{ color: "#DCCA87", margin: "2rem 0" }}
            >
              Opening Hours
            </p>
            <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <button type="button" className="custom__button mt-8">
            Visit Us
          </button>
        </div>

        <div className="app__wrapper_img">
          <img src={images.findus} alt="finus_img" className="md:w-5/6" />
        </div>
      </div>
    </>
  );
};

export default Home;
