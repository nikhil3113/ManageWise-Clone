
import { useState } from "react";
const Faq = () => {
  const faqs = [
    {
      question: 'What is Manage Wise and what does it offer?',
      answer: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.',
    },
    {
      question: 'Is Manage Wise suitable for small businesses and larger enterprises alike?',
      answer: 'Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.',
    },
    {
      question: 'Can I access Manage Wise from different devices and platforms?',
      answer: 'Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices..',
    },
    {
      question: 'Can I access Manage Wise from different devices and platforms?',
      answer: 'Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices..',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="flex xl:flex-row flex-col" id="faq">
      <div className="bg-white flex flex-col justify-center items-center ">
        <div className="xl:w-[70%] xl:mt-28 mt-14 mb-5 bg-white rounded-lg flex text-md font-sans ">
          <span>👋</span>
          <p className="ml-2 text-[#8247ff] font-semibold ">
            FAQ
          </p>
        </div>
        <div className=" text-center xl:w-2/3 w-[90%] mt-26">
          <h1 className=" xl:text-left text-center  text-5xl  font-bold font-sans">
          Need <br /><span className="text-[#fe8162]">Answers?</span> 
          </h1>
          <p className="my-5 xl:w-[80%] xl:text-left text-center font-semibold text-xl text-gray-600">
          Check out our most commonly asked questions below to find the information you need.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-8 w-[80%]">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <p className="text-2xl font-semibold">{faq.question}</p>
            <svg
              className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
      </div>
    </>
  );
};

export default Faq;
