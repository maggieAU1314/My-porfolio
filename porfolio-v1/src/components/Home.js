import AnimatedLetters from "./AnimatedLetters";
import Variable from "./Variable/Variable";
import Test from "./ContactCard";
import Profile from "./Profile";
const Home = (props) => {
  return (
    <>
      <div>
        {/* <AnimatedLetters strArray={"Welcome".split("")} customerData="Home" /> */}
        <div></div>

        <AnimatedLetters
          strArray={`Hello,I\u00A0\u00A0am\u00A0\u00A0${
            props.name ? props.name : "Customer"
          }!`.split("")}
          customerData={props.name}
        />
      </div>
      <Variable></Variable>
    </>
  );
};

export default Home;
