import { LuFlame } from "react-icons/lu";
import { FaWallet } from "react-icons/fa6";
import { motion } from "framer-motion";
import leftcup from '../assets/leftcup.png'
import littleCup from "../assets/littleCup.png";

import { TbGiftCardFilled } from "react-icons/tb";



const About = () => {
    return (
        <section className="flex flex-col items-center relative">
            <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="sm:w-4/5 font-extrabold sm:my-24 my-16 sm:text-4xl text-3xl text-center mx-auto">Öz zövqünüzə uyğun məhsulları və kofeşopları seçin və sizə uyğun endirimli məhsulları görün.</motion.h1>
            {/* Images */}
            <motion.img
                initial={{ opacity: 0, x: -50, scale: 0.85 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute left-0 sm:top-16 top-52 lg:max-w-80 sm:max-w-60 max-w-36  " src={leftcup} alt="cup" />
            <motion.img
                initial={{ opacity: 0, x: 50, scale: 0.85 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute right-0 sm:top-96 top-[600px] lg:max-w-56 sm:max-w-40 max-w-32"
                src={littleCup}
                alt="cup"
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-4 sm:px-5 px-12">
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-bold sm:text-2xl text-xl">Loyalty Card</h3>
                    <p className="text-gray sm:text-base text-sm ">
                        CoffeeMe den 10 məhsul alana 1 məhsul hədiyyə.
                    </p>
                    <div className="sm:min-h-48 min-h-32 flex items-center justify-center">
                        <TbGiftCardFilled className="lg:w-60 lg:h-60 sm:w-40 sm:h-40 w-32 h-32 lg:pt-10" color="#214440" />
                    </div>
                </motion.div>
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-bold sm:text-2xl text-xl">Streaks</h3>
                    <p className="text-gray sm:text-base text-sm">
                        7 gün ardarda CoffeeMe dən məhsul al və Premiumdan faydalan.
                    </p>
                    <div className="sm:min-h-48 min-h-32 flex items-center justify-center">
                        <LuFlame className="lg:w-52 lg:h-52 sm:w-40 sm:h-40 w-32 h-32" color="#214440" />
                    </div>
                </motion.div>
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-bold sm:text-2xl text-xl">MeWallet</h3>
                    <p className="text-gray sm:text-base text-sm">
                        CoffeeMe Free və Premium planlarından faydalana bilərsiniz.
                    </p>
                    <div className="sm:min-h-48 min-h-32 flex items-center justify-center">
                        <FaWallet className="lg:w-52 lg:h-52 sm:w-40 sm:h-40 w-28 h-28 lg:pt-10" color="#214440" />
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

export default About
