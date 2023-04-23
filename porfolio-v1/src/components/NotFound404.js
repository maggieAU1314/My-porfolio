import AnimatedLetters from "./AnimatedLetters";
const Account = () => {
  return (
    <div>
      <AnimatedLetters
        strArray={"Sorry 404 Not Found!".split("")}
        customerData={"404"}
      />
    </div>
  );
};

export default Account;
