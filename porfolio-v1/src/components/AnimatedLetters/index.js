import "./index.css";
const AnimatedLetters = (props) => {
  return (
    <span>
      {props.strArray.map((letter, index) => {
        return (
          <span
            className="text-animate"
            data-customer={props.customerData}
            key={index}
            style={{ animationDelay: `calc(${index / 10 + 1}s)` }}
            // important: the animationDelay is calculated by the index of the letter
            // important: the animationDelay is calculated by the index of the letter
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
};
export default AnimatedLetters;
