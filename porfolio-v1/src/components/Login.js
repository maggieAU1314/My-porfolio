import { useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { signInWithEmail } from "../firebase";
const Login = () => {
  const stringTitle = "Login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const logUserIn = (e) => {
    e.preventDefault();
    signInWithEmail(email, password);
  };
  return (
    <div>
      <AnimatedLetters
        strArray={stringTitle.split("")}
        customerData={stringTitle}
      />
      <div className="bg-sky-900 absolute top-0 left-0 bg-gradient-to-b from-sky-900 via-sky-900 to-purple-800 bottom-0 leading-5 h-50 w-50 overflow-hidden"></div>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 text-2xl opacity-90">
        <h1 className="text-4xl font-medium">Login</h1>
        <p className="text-slate-500">Hi, Welcome back 👋</p>

        <div className="my-5">
          <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-sky-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-6 h-6"
              alt=""
            />
            <span>Login with Google</span>
          </button>
        </div>
        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-sky-700 pb-2">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3  text-gray-500  bg-white border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
              />
            </label>
            <label htmlFor="password">
              <p className="font-medium text-sky-700 pb-2">Password</p>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full py-3 border border-slate-200  bg-white text-gray-500 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter your password"
              />
            </label>
            <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="remember" className="font-medium text-sky-700">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-6 h-6 border-slate-200 focus:bg-indigo-600"
                  />
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="font-medium text-sky-700">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="w-full py-3 font-medium text-white bg-sky-700 hover:bg-sky-400 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Login</span>
            </button>
            <p className="text-center">
              Not registered yet?
              <a
                href="./register"
                className="text-sky-700 font-medium inline-flex space-x-1 items-center"
              >
                <span>Register now </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
      <blockquote className="text-4xl font-semibold italic text-center text-slate-500 text-white absolute inset-x-0 bottom-20">
        <span className="m-5">Every individual has the</span>
        <span className="before:block before:absolute before:-inset-1 text-white before:-skew-y-3 before:bg-sky-500 relative inline-block">
          <span className="relative text-white ">power</span>
        </span>
        <span className="m-5">
          and to create a more just and equitable world！
        </span>
      </blockquote>
    </div>
  );
};
export default Login;
// every individual has the power， and to create a more just and equitable world！
