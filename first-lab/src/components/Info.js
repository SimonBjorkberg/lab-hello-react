const Info = (props) => {
  const { info } = props;

  return (
    <div className="flex w-[50%] justify-between mx-auto mt-40 mb-20">
      {info.map((elem) => {
        return (
          <div className="text-left w-[8rem]">
            <img src={elem.image} alt="imageone" className="w-32" />
            <h1 className="text-2xl font-bold">{elem.title}</h1>
            <p>{elem.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
