import { useState } from "react";
import { BsEye, BsFacebook, BsGoogle } from "react-icons/bs";
import { MdClose, MdEmail } from "react-icons/md";
export default function Register({ onClose }) {
  const [login, setLogin] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center ">
        <div
          className="bg-[#0c0c0c] border border-solid  rounded-lg text-white p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex  justify-center items-center m-4">
            <div className=" absolute -top-4 -right-2">
              <button
                onClick={onClose}
                className="cursor-pointer hover:text-gray-400"
              >
                <MdClose />
              </button>
            </div>
            <label className="">
              <b>REGISTER FORM</b>
            </label>
          </div>
          <form action="" className="">
            <div className="flex flex-col justify-between">
              <h1 className="m-2 ">Phone Number or Email:</h1>
              <input
                id="phone"
                type="text"
                placeholder="phone number or email..."
                className="m-2 pl-2 border border-gray-300 rounded-lg pr-7 text-black"
              />
              <h1 className="m-2 ">Fullname:</h1>
              <input
                id="name"
                type="text"
                placeholder="Fullname..."
                className="m-2 pl-2 border border-gray-300 rounded-lg pr-7 text-black"
              />
              <h1 className="m-2 ">Username:</h1>
              <input
                id="username"
                type="username"
                placeholder="username..."
                className="m-2 pl-2 border border-gray-300 rounded-lg pr-7 text-black"
              />
            </div>
            <div className="relative flex flex-col justify-between">
              <h1 className="m-2 ">Password:</h1>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="password..."
                className="m-2 pl-2 border border-gray-300 rounded-lg pr-7 text-black"
              />
              <h1 className="m-2 ">Repeat Password:</h1>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Repeat password..."
                className="m-2 pl-2 border border-gray-300 rounded-lg pr-7 text-black"
              />
              {/* <BsEye
                className="absolute top-20 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              /> */}
            </div>
            <div className="flex justify-center items-center ">
              <button
                type="button"
                className="border-solid  m-4 p-2 pl-4 pr-4 rounded-lg bg-black hover:bg-gray-800 width:100%"
              >
                Register
              </button>
            </div>
            <div className="flex justify-center ">
              <a href="" className="m-1">
                <BsFacebook className="hover:text-gray-500 text-blue-800" />
              </a>
              <a href="" className="m-1 ">
                <BsGoogle className="hover:text-gray-500 text-red-700" />
              </a>
              <a href="" className="m-1">
                <MdEmail className="hover:text-gray-500 " />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="mt-2">
                If you had accounts?{` `}
                <a href="">
                  <u>Login</u>
                </a>
              </p>

              <p>
                Let watch the{" "}
                <a href="">
                  <u>Policy</u>
                </a>
                {` `}our's website
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
