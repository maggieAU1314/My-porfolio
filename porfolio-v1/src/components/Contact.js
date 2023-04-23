import AnimatedLetters from "./AnimatedLetters";
import Test from "./ContactCard";
const Contact = (props) => {
  return (
    <div>
      <div>
        <AnimatedLetters
          strArray={"Contact".split("")}
          customerData="Contact"
        />
      </div>
      <Test></Test>
    </div>
  );
};

export default Contact;
