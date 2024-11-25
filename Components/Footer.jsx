import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // For social icons

const Footer = () => {
  return (
    <footer className="bg-black text-white">
     <div className="my-10 py-mb-10">
     <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* Logo and Description */}
        <div className="w-[500px]">
          <div className="text-3xl font-bold mb-4 flex items-center space-x-2 ">
            <span className="text-purple-600">We</span>
            <span>5ive</span>
          </div>
          <p className="text-gray-400 text-sm">
            Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi
            mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="w-[500px]">
          <h3 className="text-lg font-semibold mb-4">Sign Up For Our Newsletter!</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get notified about updates and be the first to get early access to new Podcast episodes.
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-black text-sm"
            />
            <button className="px-4 py-2 bg-purple-600 rounded-r-md hover:bg-purple-700 transition text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
        {/* Links Section */}
        <div className="flex justify-between px-6  gap-4">
  {/* Contact Us */}
  <div>
    <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
    <p className="text-gray-400 text-sm">support@we5ive.com</p>
  </div>

  {/* About Us */}
  <div>
    <h4 className="text-lg font-semibold mb-2">About Us</h4>
    <ul className="space-y-2">
      <li className="text-gray-400 text-sm cursor-pointer hover:text-white">
        Contact Us
      </li>
    </ul>
  </div>
   {/* Privacy and Terms */}
   <div>
    <h4 className="text-lg font-semibold mb-1">Policy</h4>
    <ul className="space-y-2">
      <li className="text-gray-400 text-sm cursor-pointer hover:text-white">
        Privacy Policy
      </li>
      <li className="text-gray-400 text-sm cursor-pointer hover:text-white">
        Terms & Conditions
      </li>
    </ul>
  </div>

  {/* Social Links */}
  <div>
    <h4 className="text-lg font-semibold mb-2">Social Links</h4>
    <div className="flex space-x-4 mt-2">
      <a href="#" className="text-gray-400 hover:text-white">
        <FaFacebookF />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <FaLinkedinIn />
      </a>
    </div>
  </div>
       </div>
     </div>

      
      {/* Bottom Purple Strip */}
      <div className="bg-purple-600 mt-6 py-4">
        <p className="text-center">C 2024 | We5ive</p>
        <p className="text-center">C 2024 | We5ive</p>
      </div>
    </footer>
  );
};

export default Footer;
