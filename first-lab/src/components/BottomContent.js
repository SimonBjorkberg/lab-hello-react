import imageOne from "../images/icon1.png";
import imageTwo from "../images/icon2.png";
import imageThree from "../images/icon3.png";
import imageFour from "../images/icon4.png";

const BottomContent = () => {
  return (
    <div className="bottom-content flex w-[50%] justify-between mx-auto mt-40 mb-20">
      <div className="text-left w-[8rem]">
        <img src={imageOne} alt="imageone" className="w-32" />
        <h1 className="text-2xl font-bold">Declarative</h1>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="text-left w-[8rem]">
        <img src={imageTwo} alt="imagetwo" className="w-32" />
        <h1 className="text-2xl font-bold">Components</h1>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="text-left w-[8rem]">
        <img src={imageThree} alt="imagethree" className="w-32" />
        <h1 className="text-2xl font-bold">Single-Way</h1>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="text-left w-[8rem]">
        <img src={imageFour} alt="imagefour" className="w-32" />
        <h1 className="text-2xl font-bold">JSX</h1>
        <p>Statically-typed. designed to run on modern browsers.</p>
      </div>
    </div>
  );
};

export default BottomContent;
