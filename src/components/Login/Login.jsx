import { useState } from "react";
import { BsEye, BsFacebook, BsGoogle } from "react-icons/bs";
import { MdClose, MdEmail } from "react-icons/md";
import Register from "../Register/Register.jsx";
export default function Login({ onClose }) {
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center ">
        <div
          className="bg-[#0c0c0c] border border-solid  rounded-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex justify-center items-center m-4">
            <div className="text-white absolute -top-4 -right-2">
              <button
                onClick={onClose}
                className="cursor-pointer hover:text-gray-400"
              >
                <MdClose />
              </button>
            </div>
            <label className="">
              <b>LOGIN FORM</b>
            </label>
          </div>
          <form action="" className="">
            <div className="flex justify-between">
              <h1 className="m-2">Username:</h1>
              <input
                id="username"
                type="username"
                placeholder="username..."
                className="m-2 pl-2 border border-gray-300 rounded-lg pr-7 text-black"
              />
            </div>
            <div className="relative flex justify-between items-center">
              <h1 className="m-2">Password:</h1>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="password..."
                className="m-2 pl-2 border border-gray-300 rounded-lg pr-7 text-black"
              />
              <BsEye
                className="absolute right-4 cursor-pointer text-gray-500 hover:text-black"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="flex justify-center items-center ">
              <button
                type="button"
                className="border-solid text-white m-4 p-2 pl-4 pr-4 rounded-lg bg-black hover:bg-gray-800 width:100%"
              >
                Login
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
                <MdEmail className="hover:text-gray-500" />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="mt-2">
                If you don't have accounts?{` `}
                <button onClick={() => setShowRegister(!showRegister)}>
                  <u>Register</u>
                </button>
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
      {showRegister && <Register onClose={onClose} />}
    </>
  );
}

// import { useState } from "react";
// import { BsEye, BsFacebook, BsGoogle } from "react-icons/bs";
// import { MdClose, MdEmail } from "react-icons/md";

// export default function Login({ onClose }) {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="relative bg-[#0c0c0c] border border-gray-700 rounded-lg p-6 w-full max-w-md animate-slideDown"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-white hover:text-gray-400 text-lg"
//         >
//           <MdClose />
//         </button>

//         {/* Title */}
//         <h2 className="text-center text-white text-xl font-bold mb-4">
//           LOGIN FORM
//         </h2>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* Username Field */}
//           <div>
//             <label htmlFor="username" className="block text-white mb-1">
//               Username:
//             </label>
//             <input
//               id="username"
//               type="text"
//               placeholder="username..."
//               className="w-full p-2 border border-gray-300 rounded-lg text-black"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="relative">
//             <label htmlFor="password" className="block text-white mb-1">
//               Password:
//             </label>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="password..."
//               className="w-full p-2 border border-gray-300 rounded-lg text-black"
//             />
//             <BsEye
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
//               onClick={() => setShowPassword(!showPassword)}
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="button"
//             className="w-full p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
//           >
//             Login
//           </button>
//         </form>

//         {/* Social Media Links */}
//         <div className="flex justify-center space-x-4 mt-4">
//           <a href="#" className="text-blue-800 hover:text-gray-500">
//             <BsFacebook size={24} />
//           </a>
//           <a href="#" className="text-red-700 hover:text-gray-500">
//             <BsGoogle size={24} />
//           </a>
//           <a href="#" className="text-white hover:text-gray-500">
//             <MdEmail size={24} />
//           </a>
//         </div>

//         {/* Footer Links */}
//         <div className="text-center text-white mt-4">
//           <p>
//             If you don't have an account?{" "}
//             <a href="#" className="text-primary-golden underline">
//               Register
//             </a>
//           </p>
//           <p>
//             Read our{" "}
//             <a href="#" className="text-primary-golden underline">
//               Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
