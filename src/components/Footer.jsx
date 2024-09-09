import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiTiktokLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { FaPhone } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import translations from "../translations.json";
import { LanguageContext } from "../context/languageContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
    const { language } = useContext(LanguageContext);


    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        wantsMessages: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Send data to backend
          const response = await fetch("http://localhost:5000/api/subscribers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          if (response.ok) {
            toast.success(translations[language]["thanks"]);
          } else {
            toast.error(data.error || translations[language]["errorSubmittingForm"]);
          }
        } catch (err) {
          // Handle request error
          console.error("Request error:", err);
          toast.error(translations[language]["errorSubmittingForm"]);
        }
      };

    return (
        <footer className="py-10">
            <div className="mx-auto">
                {/* Logo and Subscription Form */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left section: Logo and email input */}
                    <div className="text-center md:text-left mb-8 md:mb-0">
                        <img src={logo} alt="Coffeeme Logo" className="h-20 mx-auto" />
                        {/* <h1 className="text-2xl font-bold mt-2 text-[#1B1B1D]">
                            First One’s On Us!
                        </h1> */}
                        <div className="mt-4">
                            <form onSubmit={handleSubmit} className="flex flex-col md:items-start items-center md:gap-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    placeholder={translations[language]["fullname"]}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="p-3 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder={translations[language]["email"]}
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-3 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
                                />
                                <div className='flex gap-4 items-center justify-center mb-5 ps-2'>
                                        <input
                                            type="checkbox"
                                            name="wantsMessages"
                                            checked={formData.wantsMessages}
                                            onChange={handleChange} />
                                    
                                    <p className='text-gray text-xs'>{translations[language]["notification"]}</p>

                                </div>
                                <button
                                    type="submit"
                                    className="p-3 bg-green text-pink rounded-full hover:bg-green-700 transition-all w-40"
                                >
                                    {translations[language]["subscribe"]}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right section: Contact Info and Social Media */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl text-[#1B1B1D] font-bold mb-4">
                            {translations[language]["contact"]}
                        </h3>
                        <div className="flex flex-col md:items-start items-center">
                            <div>

                                <div className="flex items-center mb-2">
                                    <MdEmail className="mr-2 btn" size={40} />
                                    <a
                                        className=" text-gray">
                                        info@coffeeme.app
                                    </a>
                                </div>
                                {/* <div className="flex items-center mb-2">
                                    <FaPhone className="mr-2 btn" size={40} />
                                    <a className=" text-gray">
                                        +994503344430
                                    </a>
                                </div> */}
                            </div>
                            <div className="flex items-center gap-2">
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: 90,
                                        borderRadius: "100%",
                                    }}
                                    className="btn"
                                >
                                    <FaFacebookF size={25} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: 90,
                                        borderRadius: "100%",
                                    }}
                                    className="btn"
                                >
                                    <RiInstagramFill size={25} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: 90,
                                        borderRadius: "100%",
                                    }}
                                    className="btn"
                                >
                                    <PiTiktokLogoFill size={25} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: 90,
                                        borderRadius: "100%",
                                    }}
                                    className="btn"
                                >
                                    <FaLinkedinIn size={25} />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="text-center text-gray-600 border-t pt-8 flex sm:flex-row flex-col sm:gap-0 gap-5 justify-between text-sm mt-8">
                    <p>
                        Copyright © 2024 CoffeeMe
                    </p>
                    <p>
                        <a className="hover:underline">
                            Terms of Use
                        </a>{" "}
                        |{" "}
                        <a className="hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
