import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col md:flex-row bg-[#FFFFF0]">
      <div className="basis-1/2 w-full lg:px-20">
        <form className="bg-[#FFFFF0] p-10 rounded-lg">
          <h1 className="text-4xl font-bold mb-5 ml-2">Log In<span className="text-[#CD46B2]">.</span></h1>
          <div className="flex gap-3 mb-4 w-full">
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <button
                type="button"
                className="text-black bg-[#ffffff] hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg px-2 py-2.5 text-center inline-flex items-center md:mr-2 md:mb-0 text-xs border border-black lg:text-sm "
              >
                <FcGoogle className="w-7 h-7 lg:w-4 lg:h-4 mr-2" />
                Log in with Google
              </button>
              <button
                type="button"
                className="text-black bg-[#ffffff] hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-xs px-2 py-2.5 text-center inline-flex items-center md:mr-2 md:mb-0 border border-black lg:text-sm "
              >
                <BiLogoFacebook className="w-7 h-7 lg:w-4 lg:h-4 mr-2" />
                Log in with Facebook
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block font-thin text-xs mt-2 mx-1"
              htmlFor="first-name"
            >
              Email*
            </label>
            <input
              id="enter-email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded-md"
              placeholder="Enter email"
            />
            <label
              className="block font-thin text-xs mt-2 mx-1"
              htmlFor="first-name"
            >
              Password*
            </label>
            <input
              id="create-password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded-md"
              placeholder="Create password"
            />
          </div>

          {/* Other form fields */}
          <div className="text-sm ml-56 text-[#CD46B2] m-4">
            Forgot your password?
          </div>
          <div className="justify-center items-center ">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 w-full text-white font-bold relative py-3 px-20 rounded-full block sm:inline  "
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className="basis-1/2 bg-[#FFFFF0] ">
        <img
          src="../../public/assets/login_image.png"
          className="bg-[#FFFFF0] absolute h-[18rem] w-1/3 sm:h-100 lg:h-100 lg:top-48 lg:w-1/3 "
        />
      </div>
    </div>
  );
}
