//src/components/WhyUs.js

import React from 'react';
// import {Video} from "./components"
import ReactPlayer from 'react-player';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhyUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className=" bg-transparent p-10 rounded shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <FloatingWhatsApp accountName="WhatsApp Bot" phoneNumber="6295487731" statusMessage="online" chatMessage="Hello User ! 🤝 \n How can we help?" darkMode={true} notification={true}  allowClickAway={true}/>
        <h1 className="text-4xl font-bold mb-6 ">Why Choose Us?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Quality Service</h3>
            <p className="text-green-800 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum voluptatum autem corporis voluptates voluptate impedit culpa nihil esse officia nemo omnis necessitatibus explicabo sed porro nobis illum excepturi sint. Corrupti explicabo distinctio deleniti nihil ad harum ea maxime, optio, aperiam perspiciatis corporis eveniet repellat tenetur nesciunt quos pariatur! Aliquid quod deserunt exercitationem laudantium doloremque nesciunt vel, inventore corporis provident possimus voluptatem expedita nisi qui ut voluptatum ducimus nihil odit dignissimos consequatur recusandae deleniti! Eos ipsum qui voluptas ut enim quaerat dolorem tempora quasi, rem eaque, provident quae, at distinctio? Quam eligendi quis nam blanditiis omnis culpa voluptate consequatur fuga nemo libero perferendis ut vero consequuntur veniam animi illo maiores corrupti possimus dolore accusamus, cumque nobis! Repellat odio reprehenderit provident maiores praesentium. Tempore pariatur ratione repellat aliquid quam, repellendus a inventore minus error nostrum culpa nesciunt qui commodi earum? Ut blanditiis reprehenderit amet soluta ipsam quod doloremque iusto! Officia, consequatur.
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


