import { IoCard } from "react-icons/io5";
import { LuFlame } from "react-icons/lu";
import { BiCoffeeTogo } from "react-icons/bi";
import { motion } from "framer-motion";


const Main = () => {

    return (
        <section className="flex flex-col items-center">
            <motion.h1
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="font-extrabold sm:my-24 my-16 sm:text-4xl text-3xl text-center mx-auto">Öz zövqünüzə uyğun məhsulları və kofeşopları seçin və sizə uyğun endirimli məhsulları görün.</motion.h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mb-24 px-5">
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="font-bold text-2xl">Loyalty Card</h3>
                    <p className="text-gray">
                        CoffeeMe den 10 məhsul alana 1 məhsul hədiyyə.
                    </p>
                    <div className="min-h-48 flex items-center justify-center">
                        <IoCard className="sm:w-52 sm:h-52 w-40 h-40 sm:pt-10" color="#214440" />
                    </div>
                </motion.div>
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="font-bold text-2xl">Streaks</h3>
                    <p className="text-gray">
                        7 gün ardarda CoffeeMe dən məhsul al və Premiumdan faydalan.
                    </p>
                    <div className="sm:min-h-48 min-h-32 flex items-center justify-center">
                        <LuFlame className="w-40 h-40" color="#214440" />
                    </div>
                </motion.div>
                <motion.div
                    className="px-6 py-8 flex flex-col gap-3 shadow-lg  border border-gray-100 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="font-bold text-2xl">Plans</h3>
                    <p className="text-gray">
                        CoffeeMe Free və Premium planlarından faydalana bilərsiniz.
                    </p>
                    <div className="min-h-48 flex items-center justify-center">
                        <BiCoffeeTogo className="sm:w-52 sm:h-52 w-40 h-40 sm:pt-10" color="#214440" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Main
