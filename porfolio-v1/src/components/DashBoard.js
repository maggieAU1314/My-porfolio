import { useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { registerNewUser } from "./firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stringTitle = "Register";
  const updateEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const registerUser = (e) => {
    e.preventDefault();
    console.log("register");
    registerNewUser(email, password);
  };
  return (
    <>
      <AnimatedLetters
        strArray={stringTitle.split("")}
        customerData={stringTitle}
      />
      <div className="form">
        <form className="register my-5">
          <h3 className="mb-4">Register form</h3>
          <div className="w-full ">
            <input
              className="mr-2 text-black rounded-md"
              type="text"
              placeholder="Email"
              onChange={updateEmail}
            />
            <input
              className="mr-2 text-black rounded-md"
              type="password"
              placeholder="Password"
              onChange={updatePassword}
            />
          </div>
          <div className="w-full font-semibold ">
            <input
              type="submit"
              className="mt-4 bg-sky-500 rounded-md p-3"
              value="Submit"
              onClick={registerUser}
            ></input>
          </div>
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
export default Login;
