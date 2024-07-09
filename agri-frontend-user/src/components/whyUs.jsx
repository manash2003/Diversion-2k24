//src/components/WhyUs.js

import React from 'react';
// import {Video} from "./components"
import ReactPlayer from 'react-player';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import "../components/login.css"

const WhyUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className=" bg-transparent p-10 rounded shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <FloatingWhatsApp accountName="WhatsApp Bot" phoneNumber="6295487731" statusMessage="online" chatMessage="Hello User ! 🤝 \n How can we help?" darkMode={true} notification={true}  allowClickAway={true}/>
        <h1 className="text-4xl font-bold mb-6 login text-white">Why Choose Us?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2 text-white">Quality Service</h3>
            <p className="text-dark text-xl login">
            Welcome to Agro-Life, where innovation meets agriculture! As a leading force in the agrochemical industry, we pride ourselves on a steadfast commitment to revolutionizing farming practices.With a team of seasoned experts, we meticulously formulate agrochemicals that maximize crop yields while minimizing environmental impact. What defines us is not just our products, but the promise of a greener, more prosperous future for farmers worldwide. At AGro-Life, we harness the power of science to cultivate a healthier, more resilient planet. Choose us for unparalleled expertise, eco-friendly formulations, and a profound belief in the transformative potential of agrochemical innovation. Join us in cultivating tomorrow's harvest, today!
            </p>
          </div>
            <div className="rounded-lg  border-red-400  flex items-center justify-center ">
                
					<ReactPlayer className="" controls={true} muted={true} url='https://youtu.be/E1ImyXFwezE?si=u-ybCF492LvaRDyO' height="400px" width="500px" playing={true} />
		    </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;


