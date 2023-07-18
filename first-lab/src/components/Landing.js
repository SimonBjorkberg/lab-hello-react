const Landing = () => {
  return (
    <div className="landing bg-neutral-700">
      <div className="w-[93%] mx-auto py-20 pb-40">
        <h1 className="text-6xl font-bold text-white text-left w-full">
          Say hello to <br /> ReactJS
        </h1>
        <p className="w-[300px] text-left text-white mb-20">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button className="float-left text-neutral-700 bg-white p-4 rounded-sm font-bold">Awesome!</button>
      </div>
    </div>
  );
};

export default Landing;
