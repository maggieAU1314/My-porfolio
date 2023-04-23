import { useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { registerNewUser, signInWithEmail } from "../firebase";
// import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const stringTitle = "Register";
  const updateEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(e.target.value);
  };
  const registerUser = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   console.log(password);
    //   console.log(confirmPassword);
    //   setError("Passwords do not match");
    //   setPassword("");
    //   setConfirmPassword("");
    //   alert("Passwords do not match");
    // } else {
    registerNewUser(email, password);
    // }
  };
  return (
    <>
      <AnimatedLetters
        strArray={stringTitle.split("")}
        customerData={stringTitle}
      />
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 text-2xl opacity-90">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 text-center">
          Registration Form
        </h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300  bg-white text-gray-500 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              placeholder="xxx@example.com"
              onChange={updateEmail}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300  bg-white text-gray-500 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              placeholder="********"
              onChange={updatePassword}
              value={password}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300  bg-white text-gray-500 rounded-md focus:outline-none focus:border-indigo-500 "
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="********"
              onChange={updateConfirmPassword}
              value={confirmPassword}
            />
          </div>
          <button
            className="w-full bg-sky-700 text-white text-2xl font-bold py-2 px-4 rounded-md hover:bg-sky-400 transition duration-300"
            type="submit"
            onClick={registerUser}
          >
            Register
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
      <blockquote className="text-4xl font-semibold italic text-center text-slate-500 text-white absolute inset-x-0 bottom-20">
        <span className="m-5">When you look</span>
        <span className="before:block before:absolute before:-inset-1 text-white before:-skew-y-3 before:bg-sky-500 relative inline-block">
          <span className="relative text-white ">annoyed</span>
        </span>
        <span className="m-5">
          all the time, people think that you're busy.
        </span>
      </blockquote>
    </>
  );
};
export default Register;
