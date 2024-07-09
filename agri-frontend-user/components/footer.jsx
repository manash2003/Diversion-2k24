import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-10">
        <ul class="grid  px-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#FFA726]">
    <li>
      <h3 class="text-[#FFA726] font-semibold text-5xl">25+</h3>
      <p class="text-gray-300 text-sm mt-2">Company </p>
    </li>
    <li>
      <h3 class="text-[#FFA726] font-semibold text-5xl">99%</h3>
      <p class="text-gray-300 text-sm mt-2">Happy Customers</p>
    </li>
    <li>
      <h3 class="text-[#FFA726] font-semibold text-5xl">150+</h3>
      <p class="text-gray-300 text-sm mt-2">Products</p>
    </li>
    <li>
      <h3 class="text-[#FFA726] font-semibold text-5xl">50+</h3>
      <p class="text-gray-300 text-sm mt-2">Team Members</p>
    </li>
    </ul>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:w-1/4">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>

        <div className="mb-8 md:w-1/4">
          <h3 className="text-xl font-bold mb-4">Customer Service</h3>
          <ul>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="md:w-1/4">
          <h1>Anyting u can add </h1>
        </div>
      </div>
      <div class="flex justify-center space-x-12">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;