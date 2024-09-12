import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiTiktokLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import appStore from "../assets/appStore.png";
import { motion } from "framer-motion";

import translations from "../translations.json";

import logo from "../assets/logo.png";
import mobileapp from "../assets/mobileapp1.png";
import { useContext, useEffect, useState } from "react";
import SubmitModal from "./Modal";
import { LanguageContext } from "../context/languageContext";

/* global fbq */

const Header = () => {
    const [modalShow, setModalShow] = useState(false);

    const { language, changeLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (newLanguage) => {
        changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    const languages = [
        { code: "az", label: "AZ" },
        { code: "en", label: "EN" },
        { code: "ru", label: "RU" },
    ];

    const filteredLanguages = languages.filter((lang) => lang.code !== language);

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        // Inject Meta Pixel script
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1582357232704839');
        fbq('track', 'PageView');
      }, []);


    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <motion.nav
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full flex gap-12 justify-between sm:items-center items-start"
            >
                <div className="logo flex items-center md:min-w-60 sm:min-w-40 sm:max-w-60 max-w-44 min-w-36 md:max-w-72">
                    <img alt="logo" className="object-contain" src={logo} />
                </div>
                <div className="flex sm:flex-row flex-col-reverse sm:items-center items-end justify-center gap-3">
                    <div className="lang-switcher flex p-1 border border-gray-300 rounded-md">
                        {filteredLanguages.map((lang) => (
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
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=61565481160428"
                            target="_blank"
                            className="btn-pink"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 90,
                                borderRadius: "100%",
                            }}
                        >
                            <FaFacebookF className="sm:w-6 sm:h-6" />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/coffeemeapp"
                            target="_blank"
                            className="btn-pink"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 90,
                                borderRadius: "100%",
                            }}
                        >
                            <RiInstagramFill className="sm:w-6 sm:h-6" />
                        </motion.a>
                        <motion.a
                            href="https://www.tiktok.com/@coffeeme.app"
                            target="_blank"
                            className="btn-pink"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 90,
                                borderRadius: "100%",
                            }}
                        >
                            <PiTiktokLogoFill className="sm:w-6 sm:h-6" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/company/coffeemee"
                            target="_blank"
                            className="btn-pink"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 90,
                                borderRadius: "100%",
                            }}
                        >
                            <FaLinkedinIn className="sm:w-6 sm:h-6" />
                        </motion.a>
                    </div>
                </div>
            </motion.nav>
            <div className="h-full grid sm:grid-cols-2 sm:pt-0 pt-12">
                <div className="header__left flex flex-col justify-start sm:mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="font-extrabold sm:max-w-[550px] text-[#1B1B1D] sm:mb-16 mb-10 sm:text-left text-center mx-auto max-w-[300px]"
                    >
                        {translations[language]["header-title"]}
                    </motion.h1>
                    <div className="sm:grid hidden grid-cols-2 gap-3 mx-auto mb-4">
                        <a className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs">
                            <img className="object-contain max-w-6" src={appStore} />
                            App Store
                        </a>
                        <a className="px-3 py-2  border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_116_3414)">
                                    <path
                                        d="M22.0817 11.0006L18.0172 8.6532L12.4485 12.814L18.0171 16.9748L22.0955 14.6194C22.7314 14.233 23.1109 13.558 23.1109 12.8141C23.1109 12.0703 22.7314 11.3952 22.0817 11.0006Z"
                                        fill="#FF9100"
                                    />
                                    <path
                                        d="M13.8564 12.8142C13.8503 12.822 8.93269 19.1446 8.9287 19.1497L2.52275 24.1947C2.12849 23.8005 1.88919 23.2655 1.88919 22.6741V2.91929C1.88919 2.32802 2.12849 1.79297 2.52275 1.3988L8.9287 6.47861C8.93269 6.48373 13.8503 12.8063 13.8564 12.8142Z"
                                        fill="#25D9F8"
                                    />
                                    <path
                                        d="M13.8564 12.8142L12.4485 14.6303V10.9979L13.8564 12.8142Z"
                                        fill="#00C0F1"
                                    />
                                    <path
                                        d="M18.0238 8.64669L13.8564 12.8141L2.52274 1.39881C2.66348 1.27205 2.80432 1.1735 2.95919 1.07494C3.63493 0.694857 4.43748 0.708889 5.09924 1.11723L12.4484 5.43672L18.0238 8.64669Z"
                                        fill="#7FE881"
                                    />
                                    <path
                                        d="M18.0238 8.64674L13.8564 12.8142L12.4485 11.4063V5.43677L18.0238 8.64674Z"
                                        fill="#5BC980"
                                    />
                                    <path
                                        d="M18.0238 16.9814L12.4484 20.1915L5.08517 24.4903C4.74727 24.6874 4.38121 24.8 4.00103 24.8C3.64906 24.8 3.29708 24.7014 2.95919 24.5184C2.80432 24.4199 2.66348 24.3213 2.52274 24.1946L13.8564 12.8141L18.0238 16.9814Z"
                                        fill="#FF637B"
                                    />
                                    <path
                                        d="M18.0238 16.9814L12.4485 20.1915V14.222L13.8564 12.8141L18.0238 16.9814Z"
                                        fill="#E63950"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_116_3414">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                            transform="translate(0.5 0.800049)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            Google Play
                        </a>
                    </div>
                    <motion.button
                        onClick={() => setModalShow(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        className=" mx-auto mt-6 sm:block hidden px-10 py-4 bg-green text-pink font-semibold rounded-full hover:bg-green-800 transition duration-300"
                    >
                        {translations[language]["order"]}
                    </motion.button>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="header__right relative sm:flex-row flex-col flex justify-center items-start sm:px-5 px-0 sm:pb-0 pb-10 w-full mx-auto"
                >
                    <div className="relative pb-12 sm:pr-0 pr-3">
                        <img
                            src={mobileapp}
                            className="phone-img object-fit"
                            alt="mobile-app"
                            loading="lazy"
                            onLoad={() => setImageLoaded(true)}

                        />
                        <div style={{ display: imageLoaded ? 'block' : 'none' }} className="absolute sm:bottom-28 bottom-20 left-20 rounded-2xl md:px-4 lg:py-4 px-3 py-2 flex-col bg-white lg:max-w-60 md:max-w-44 sm:max-w-36 max-w-44">
                            <div className="flex sm:gap-2 gap-1 lg:mb-3 sm:mb-1 mb-2">
                                <FaStar className="w-4" />
                                <FaStar className="w-4 " />
                                <FaStar className="w-4 " />
                                <FaStar className="w-4" />
                                <FaStar className="w-4 " />
                            </div>
                            <p className="text-gray lg:text-sm sm:text-xs text-xs">
                                {translations[language]["rating"]}
                            </p>
                        </div>
                    </div>
                    <div className="sm:hidden grid grid-cols-2 gap-3 mx-auto mb-4">
                        <a className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs">
                            <img className="object-contain max-w-6" src={appStore} />
                            App Store
                        </a>
                        <a className="px-3 py-2  border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_116_3414)">
                                    <path
                                        d="M22.0817 11.0006L18.0172 8.6532L12.4485 12.814L18.0171 16.9748L22.0955 14.6194C22.7314 14.233 23.1109 13.558 23.1109 12.8141C23.1109 12.0703 22.7314 11.3952 22.0817 11.0006Z"
                                        fill="#FF9100"
                                    />
                                    <path
                                        d="M13.8564 12.8142C13.8503 12.822 8.93269 19.1446 8.9287 19.1497L2.52275 24.1947C2.12849 23.8005 1.88919 23.2655 1.88919 22.6741V2.91929C1.88919 2.32802 2.12849 1.79297 2.52275 1.3988L8.9287 6.47861C8.93269 6.48373 13.8503 12.8063 13.8564 12.8142Z"
                                        fill="#25D9F8"
                                    />
                                    <path
                                        d="M13.8564 12.8142L12.4485 14.6303V10.9979L13.8564 12.8142Z"
                                        fill="#00C0F1"
                                    />
                                    <path
                                        d="M18.0238 8.64669L13.8564 12.8141L2.52274 1.39881C2.66348 1.27205 2.80432 1.1735 2.95919 1.07494C3.63493 0.694857 4.43748 0.708889 5.09924 1.11723L12.4484 5.43672L18.0238 8.64669Z"
                                        fill="#7FE881"
                                    />
                                    <path
                                        d="M18.0238 8.64674L13.8564 12.8142L12.4485 11.4063V5.43677L18.0238 8.64674Z"
                                        fill="#5BC980"
                                    />
                                    <path
                                        d="M18.0238 16.9814L12.4484 20.1915L5.08517 24.4903C4.74727 24.6874 4.38121 24.8 4.00103 24.8C3.64906 24.8 3.29708 24.7014 2.95919 24.5184C2.80432 24.4199 2.66348 24.3213 2.52274 24.1946L13.8564 12.8141L18.0238 16.9814Z"
                                        fill="#FF637B"
                                    />
                                    <path
                                        d="M18.0238 16.9814L12.4485 20.1915V14.222L13.8564 12.8141L18.0238 16.9814Z"
                                        fill="#E63950"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_116_3414">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                            transform="translate(0.5 0.800049)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            Google Play
                        </a>
                    </div>
                    <motion.button
                        onClick={() => setModalShow(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        className=" mx-auto mt-6 sm:hidden block px-10 py-4 bg-green text-pink font-semibold rounded-full hover:bg-green-800 transition duration-300"
                    >
                        {translations[language]["order"]}
                    </motion.button>
                </motion.div>
                <SubmitModal isOpen={modalShow} onClose={() => setModalShow(false)} />
            </div>
        </motion.header>
    );
};

export default Header;
