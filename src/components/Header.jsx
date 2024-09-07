import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiTiktokLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";





import logo from '../assets/logo.png'
import mobileapp from '../assets/mobileapp.png'

const Header = () => {
    return (
        <header>
            <nav className="w-full flex gap-12 justify-between items-center ">
                <div className="logo flex items-center md:min-w-60 sm:min-w-40 sm:max-w-60 max-w-44 min-w-36 md:max-w-72">
                    <img alt="logo" className="object-contain" src={logo} />
                </div>
                <div className="socials flex md:gap-3 sm:gap-2 gap-1 items-center">
                    <a className="btn-pink">
                        <FaFacebookF  className="sm:w-6 sm:h-6 w-3 h-3"/>
                    </a>
                    <a className="btn-pink">
                        <RiInstagramFill className="sm:w-6 sm:h-6 w-3 h-3"/>
                    </a>
                    <a className="btn-pink">
                        <PiTiktokLogoFill  className="sm:w-6 sm:h-6 w-3 h-3"/>
                    </a>
                    <a className="btn-pink">
                        <FaLinkedinIn  className="sm:w-6 sm:h-6 w-3 h-3" />
                    </a>
                </div>
            </nav>
            <section className="h-full grid grid-cols-2 sm:pt-[30px] pt-12">
                <div className="section__left flex flex-col justify-center">
                    <h1 className="font-extrabold max-w-[550px] sm:mb-16 mb-10">Hər şey bir fincan qəhvə ilə başlayır</h1>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 max-w-96 mx-auto mb-4">
                        <a className="sm:px-3 sm:py-2 px-2 py-1 border border-gray-300 rounded-lg flex items-center gap-3 md:text-base sm:text-sm text-xs"><FaAppStoreIos className="sm:w-6 sm:h-6 w-4 h-4" color="blue" /> App Store</a>
                        <a className="sm:px-3 sm:py-2 px-2 py-1 border border-gray-300 rounded-lg flex items-center gap-3 md:text-base sm:text-sm text-xs"><BsGooglePlay className="sm:w-6 sm:h-6 w-4 h-4" color="blue" /> Google Play</a>
                    </div>
                </div>
                <div className="section__right relative flex justify-center items-start px-5 pb-16">
                    <img src={mobileapp} className="phone-img-1 object-fit" alt="mobile-app" />
                    <div className="absolute sm:bottom-0 bottom-8 sm:left-20 left-12 rounded-2xl md:px-4 lg:py-4 px-3 py-2 flex-col bg-white lg:max-w-60 md:max-w-44 sm:max-w-36 max-w-28">
                        <div className="flex sm:gap-2 gap-1 lg:mb-3 sm:mb-1">
                            <FaStar className="md:w-4 sm:w-3 w-2"/>
                            <FaStar className="md:w-4 sm:w-3 w-2"/>
                            <FaStar className="md:w-4 sm:w-3 w-2"/>
                            <FaStar className="md:w-4 sm:w-3 w-2"/>
                            <FaStar className="md:w-4 sm:w-3 w-2"/>

                        </div>
                        <p className="text-gray lg:text-sm sm:text-xs text-[6px]">
                            4.9 out of 5 Overall Star Rating for All Local Business.
                        </p>
                    </div>
                </div>

            </section>
        </header>
    )
}

export default Header
