import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiTiktokLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";
import { motion } from "framer-motion";






import logo from '../assets/logo.png'
import mobileapp from '../assets/mobileapp1.png'
import { useState } from "react";
import SubmitModal from "./Modal";

const Header = () => {

    const [modalShow, setModalShow] = useState(false);
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'az');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    const languages = [
        { code: 'az', label: 'AZ' },
        { code: 'en', label: 'EN' },
        { code: 'ru', label: 'RU' },
    ];

    const filteredLanguages = languages.filter(lang => lang.code !== language);


    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], }}
        >
            <motion.nav
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], }}
                className="w-full flex gap-12 justify-between items-center ">
                <div className="logo flex items-center md:min-w-60 sm:min-w-40 sm:max-w-60 max-w-44 min-w-36 md:max-w-72">
                    <img alt="logo" className="object-contain" src={logo} />
                </div>
                <div className="flex sm:flex-row flex-col-reverse sm:items-center items-end justify-center gap-3">
                <div className="lang-switcher flex p-1 border border-gray-300 rounded-md">
                        {filteredLanguages.map(lang => (
                            <button
                                key={lang.code}
                                className={`text-gray text-sm font-medium px-1 first:border-e`}
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                    <div className="socials flex md:gap-3 gap-2  items-center">
                        <motion.a className="btn-pink"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 90,
                                borderRadius: "100%"
                            }}>
                            <FaFacebookF className="sm:w-6 sm:h-6" />
                        </motion.a>
                        <motion.a className="btn-pink"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 90,
                                borderRadius: "100%"
                            }}>
                            <RiInstagramFill className="sm:w-6 sm:h-6" />
                        </motion.a>
                        <motion.a className="btn-pink"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 90,
                                borderRadius: "100%"
                            }}>
                            <PiTiktokLogoFill className="sm:w-6 sm:h-6" />
                        </motion.a>
                        <motion.a className="btn-pink"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 90,
                                borderRadius: "100%"
                            }}>
                            <FaLinkedinIn className="sm:w-6 sm:h-6" />
                        </motion.a>
                    </div>
                </div>

            </motion.nav>
            <div className="h-full grid sm:grid-cols-2 sm:pt-0 pt-12">
                <div className="section__left flex flex-col justify-start sm:mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="font-extrabold sm:max-w-[550px] sm:mb-16 mb-10 sm:text-left text-center mx-auto max-w-[300px]">Hər şey bir fincan qəhvə ilə başlayır!</motion.h1>
                    <div className="sm:grid hidden sm:grid-cols-2 grid-cols-1 gap-3 max-w-96 mx-auto mb-4">
                        <a className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs"><FaAppStoreIos className="w-6 h-6" color="blue" /> App Store</a>
                        <a className="px-3 py-2  border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs"><BsGooglePlay className="w-6 h-6" color="blue" /> Google Play</a>
                    </div>
                    <motion.button onClick={() => setModalShow(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        className=" mx-auto mt-6  px-6 py-4 bg-green text-pink font-semibold rounded-full hover:bg-green-800 transition duration-300"
                    >
                        ORDER NOW
                    </motion.button>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="section__right relative sm:flex-row flex-col flex justify-center items-start sm:px-5 px-0 pb-16 w-full mx-auto">
                    <div className="relative pb-12 sm:pr-0 pr-3">
                        <img src={mobileapp} className="phone-img object-fit" alt="mobile-app" />
                        <div className="absolute sm:bottom-28 bottom-20 left-20 rounded-2xl md:px-4 lg:py-4 px-3 py-2 flex-col bg-white lg:max-w-60 md:max-w-44 sm:max-w-36 max-w-44">
                            <div className="flex sm:gap-2 gap-1 lg:mb-3 sm:mb-1 mb-2">
                                <FaStar className="w-4" />
                                <FaStar className="w-4 " />
                                <FaStar className="w-4 " />
                                <FaStar className="w-4" />
                                <FaStar className="w-4 " />
                            </div>
                            <p className="text-gray lg:text-sm sm:text-xs text-xs">
                                4.9 out of 5 Overall Star Rating for All Local Business.
                            </p>
                        </div>
                    </div>
                    <div className="sm:hidden grid grid-cols-2 gap-3 mx-auto mb-4">
                        <a className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs"><FaAppStoreIos className="w-6 h-6" color="blue" /> App Store</a>
                        <a className="px-3 py-2  border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs"><BsGooglePlay className="w-6 h-6" color="blue" /> Google Play</a>
                    </div>
                </motion.div>
                <SubmitModal
                    isOpen={modalShow}
                    onClose={() => setModalShow(false)}
                />
            </div>
        </motion.header>
    )
}

export default Header
