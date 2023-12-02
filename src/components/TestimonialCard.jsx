// eslint-disable-next-line react/prop-types
const TestimonialCard = ({feedback, image, name, job}) => {
  return (
    <>
      <div className=" class flex flex-col justify-center items-start shadow-xl p-7 rounded-lg my-7 xl:h-72">
        <div className="text-xl">
          <p>
            &ldquo;{feedback}&rdquo;
          </p>
        </div>
        <div className="flex mt-6 ">
          <div>
            <img className="w-2/4" src={image} alt="" />
          </div>
          <div>
            <p>{name}</p>
            <p>{job}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
