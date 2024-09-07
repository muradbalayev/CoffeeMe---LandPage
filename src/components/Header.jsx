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
                <div className="socials flex md:gap-3 gap-2  items-center">
                    <a className="btn-pink">
                        <FaFacebookF  className="sm:w-6 sm:h-6"/>
                    </a>
                    <a className="btn-pink">
                        <RiInstagramFill className="sm:w-6 sm:h-6"/>
                    </a>
                    <a className="btn-pink">
                        <PiTiktokLogoFill  className="sm:w-6 sm:h-6"/>
                    </a>
                    <a className="btn-pink">
                        <FaLinkedinIn  className="sm:w-6 sm:h-6" />
                    </a>
                </div>
            </nav>
            <div className="h-full grid sm:grid-cols-2 sm:pt-[30px] pt-12">
                <div className="section__left flex flex-col justify-center">
                    <h1 className="font-extrabold sm:max-w-[550px] sm:mb-16 mb-10 sm:text-left text-center mx-auto max-w-[300px]">Hər şey bir fincan qəhvə ilə başlayır!</h1>
                    <div className="sm:grid hidden sm:grid-cols-2 grid-cols-1 gap-3 max-w-96 mx-auto mb-4">
                        <a className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs"><FaAppStoreIos className="w-6 h-6"  color="blue" /> App Store</a>
                        <a className="px-3 py-2  border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs"><BsGooglePlay className="w-6 h-6"  color="blue" /> Google Play</a>
                    </div>
                </div>
                <div className="section__right relative sm:flex-row flex-col flex justify-center items-start px-5 pb-16 w-full mx-auto">
                   <div className="relative sm:pb-12 pb-20 sm:px-0 px-5">
                    <img src={mobileapp} className="phone-img object-fit" alt="mobile-app" />
                    <div className="absolute sm:bottom-0 bottom-5 left-14 rounded-2xl md:px-4 lg:py-4 px-3 py-2 flex-col bg-white lg:max-w-60 md:max-w-44 sm:max-w-36 max-w-44">
                        <div className="flex sm:gap-2 gap-1 lg:mb-3 sm:mb-1 mb-2">
                            <FaStar className="w-4"/>
                            <FaStar className="w-4 "/>
                            <FaStar className="w-4 "/>
                            <FaStar className="w-4"/>
                            <FaStar className="w-4 "/>

                        </div>
                        <p className="text-gray lg:text-sm sm:text-xs text-xs">
                            4.9 out of 5 Overall Star Rating for All Local Business.
                        </p>
                    </div>
                   </div>
                    <div className="sm:hidden grid grid-cols-2 gap-3 mx-auto mb-4">
                        <a className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs"><FaAppStoreIos className="w-6 h-6"  color="blue" /> App Store</a>
                        <a className="px-3 py-2  border border-gray-300 rounded-lg flex items-center gap-3 md:text-sm sm:text-sm text-xs"><BsGooglePlay className="w-6 h-6"  color="blue" /> Google Play</a>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
