import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "./Testimonial";
import Footer from "./footer";
import "../components/login.css"
// import Chat from ".components/Chatbot";
const UserSection = () => {
  const slides = [
    {
      url: "https://agribegri.com/admin/images/prod_image/cc38e2749fc328ed09b104ee5697bbba-11-29-23-11-28-21.JPG",
    },
    {
      url: "https://agribegri.com/admin/images/prod_image/d106b37d1b461bdfe76e654cf461d2a0-12-04-23-09-28-36.JPG",
    },
    {
      url: "https://agribegri.com/admin/images/prod_image/b69c687cd3663da3261a1a1af7120f26-10-31-23-17-47-49.jpg",
    },

    {
      url: "https://agribegri.com/admin/images/prod_image/6aa4575b51a96231cbde8b2f8fb2e776-11-29-23-10-48-47.JPG",
    },
    {
      url: "https://agribegri.com/admin/images/prod_image/8512db77723ce5b609b2880e2a9f7227-07-08-23-17-34-08.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="flex flex-col py-10 px-4 sm:px-6 lg:px-8 border font-serif">
        <div className="px-10 flex mt-28 space-x-12 w-auto h-auto mb-2">
          <div className="">
            <img
              className="w-96"
              src="../src/assets/agroimg.png"
            />
            <h3 className=" login text-white text-left text-2xl font-bold  ">
              Welcome to AGRO-Life, where innovation meets agriculture. As
              pioneers in agrochemical solutions, we are committed to enhancing
              crop yield, promoting sustainable farming practices, and ensuring
              food security globally.
              <br /> Explore our comprehensive range of cutting-edge products,
             fertilizers and pesticides to advanced soil conditioners,
              meticulously designed to optimize plant health.
              <br />
              At AGRO-Life, we blend science with nature, delivering solutions
              that not only protect crops but also nurture the environment.
            </h3>
           < div className="mt-4 ml-12 mb-4">
           <a href="/contact" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span class="relative text-white">Contact Us</span>
</span>
</a>
           </div>
          </div>
          <div className="mt-24 w-full z-0 ">
            <div className="max-w-[200px] h-[250px]  w-full m-auto mt-5 py-25 relative group">
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-2 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>

              <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer"
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
          <Testimonial />
        </div>
        <iframe
          className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.122702150879!2d88.43129347497651!3d22.574513679490323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e0!3m2!1sen!2sin!4v1706870130487!5m2!1sen!2sin"
            // width="1515"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
      <Footer />
      
    </>
  );
};

export default UserSection;