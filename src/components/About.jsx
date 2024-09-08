import { IoCard } from "react-icons/io5";
import { LuFlame } from "react-icons/lu";
import { BiCoffeeTogo } from "react-icons/bi";
import { motion } from "framer-motion";
import leftcup from '../assets/leftcup.png'



const About = () => {
    return (
        <section className="flex flex-col items-center relative">
            <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="font-extrabold sm:my-24 my-16 sm:text-4xl text-3xl text-center mx-auto">Öz zövqünüzə uyğun məhsulları və kofeşopları seçin və sizə uyğun endirimli məhsulları görün.</motion.h1>
            {/* Images */}
            <motion.img
                initial={{ opacity: 0, x: -50, scale: 0.85 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute left-0 top-16 max-w-80 md:block hidden" src={leftcup} alt="cup" />
          

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-4 lg:px-5">
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-bold text-2xl">Loyalty Card</h3>
                    <p className="text-gray">
                        CoffeeMe den 10 məhsul alana 1 məhsul hədiyyə.
                    </p>
                    <div className="min-h-48 flex items-center justify-center">
                        <IoCard className="lg:w-52 lg:h-52 sm:w-40 sm:h-40 w-40 h-40 lg:pt-10" color="#214440" />
                    </div>
                </motion.div>
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-bold text-2xl">Streaks</h3>
                    <p className="text-gray">
                        7 gün ardarda CoffeeMe dən məhsul al və Premiumdan faydalan.
                    </p>
                    <div className="sm:min-h-48 min-h-32 flex items-center justify-center">
                        <LuFlame className="lg:w-52 lg:h-52 sm:w-40 sm:h-40 w-40 h-40" color="#214440" />
                    </div>
                </motion.div>
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-bold text-2xl">Plans</h3>
                    <p className="text-gray">
                        CoffeeMe Free və Premium planlarından faydalana bilərsiniz.
                    </p>
                    <div className="min-h-48 flex items-center justify-center">
                        <BiCoffeeTogo className="lg:w-52 lg:h-52 sm:w-40 sm:h-40 w-40 h-40 lg:pt-10" color="#214440" />
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

export default About
