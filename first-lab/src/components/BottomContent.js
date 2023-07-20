import imageOne from "../images/icon1.png";
import imageTwo from "../images/icon2.png";
import imageThree from "../images/icon3.png";
import imageFour from "../images/icon4.png";
import Info from "./Info";

const info = [
  {
    title: "Declarative",
    image: imageOne,
    content: "React makes it painless to create interactive UIs.",
  },
  {
    title: "Components",
    image: imageTwo,
    content: "Build encapsulated components that manage their state.",
  },
  {
    title: "Single-Way",
    image: imageThree,
    content: "A set of immutable values are passed to the component's",
  },
  {
    title: "JSX",
    image: imageFour,
    content: "Statically-typed. designed to run on modern browsers.",
  },
];

const BottomContent = () => {
  return (
      <Info info={info} />
  );
};

export default BottomContent;
