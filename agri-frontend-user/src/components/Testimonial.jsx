import React from "react";
// import "../assets/images/debu.jpg";
const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font mt-4">
      <div className="container px-5 py-10 mx-auto">
        <h1 className=" text-center text-3xl font-bold text-black">
          Testimonial
        </h1>
        <h2 className=" text-center text-2xl text-gray-800 font-semibold mb-10">
          What our <span className=" text-white">Developers</span> are saying
        </h2>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.imghippo.com/files/UG5CI1706866550.jpg" 
              />
              <p className="leading-relaxed text-white">
               " Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. "
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
              <h2  className="text-white font-medium title-font tracking-wider text-sm uppercase">
               <a href="" className="hover:text-black" style={{textDecoration:"none"}} >Pratik Chakraborty </a> 
              </h2>
              <p className="text-white">Full Stack Developer</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.imghippo.com/files/CDOak1706866838.jpg"
              />
              <p className="leading-relaxed text-white">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
              <h2 className="text-white font-medium title-font tracking-wider text-sm uppercase">
              <a href="" className="hover:text-black" style={{textDecoration:"none"}} > Akash Kumar Laha</a>
              </h2>
              <p className="text-white">Front-End Developer</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.imghippo.com/files/k8wzg1706919789.jpg "
              />
              <p className="leading-relaxed text-white">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
              <h2 className="text-white font-medium title-font tracking-wider text-sm uppercase">
              <a href="https://bio.link/debjitpurohit" className="hover:text-black" style={{textDecoration:"none"}} >Debjit Purohit</a>
              </h2>
              <p className="text-white">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;