import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-start items-start mt-14 mb-5 px-10" id="testimonial">
        <div>
        <div className="xl:w-[15%] w-2/5 xl:mt-28  bg-white rounded-lg flex text-md font-sans shadow-md">
          <span>💓</span>
          <p className="ml-2 text-[#8247ff] font-semibold ">TESTIMONIALS</p>
        </div>
        <div className=" xl:text-left text-center xl:w-2/3 w-[90%] mt-7 mb-14">
          <h1 className=" xl:text-left text-center text-6xl w-full font-semibold font-sans">
             Hear from our <span className="text-[#fe8162]">
              Satisfied 
            </span>{" "}
            clients
          </h1>
          <p className="my-5 xl:w-2/3 w-full xl:text-left text-center font-semibold text-xl text-gray-600">
          Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center items-center px-5">
        <TestimonialCard 
            feedback="Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
            image = "https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg"
            name = "Emily"
            job="Art Director"
        />
        <TestimonialCard 
            feedback="I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks."
            image = "https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg"
            name = "Alex"
            job="IT Manager"
        />
        <TestimonialCard 
            feedback="Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity."
            image = "https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg"
            name = "David"
            job="FreeLancer"
        />
        <TestimonialCard 
            feedback="The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."  
            image = "https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
            name = "Sarah"
            job="Project Manager"
        />
        <TestimonialCard 
            feedback="Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
            image = "https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg"
            name = "Emily"
            job="Art Director"
        />
        <TestimonialCard 
            feedback="Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
            image = "https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg"
            name = "Emily"
            job="Art Director"
        />
        
      </div>
      </div>
    </>
  );
};

export default Testimonials;
