import cups from "../assets/cups.png";
import { motion } from "framer-motion";
import littleCup from "../assets/littleCup.png";
import leftcup from "../assets/leftcup.png";

import mobileapp2 from "../assets/mobileapp2.png";
import mobileapp3 from "../assets/mobileapp3.png";
import SubmitModal from "./Modal";
import { useState } from "react";

const OrderNow = () => {
    const [modalShow, setModalShow] = useState(false);


    return (
        <>
            <section className="flex flex-col-reverse lg:flex-row relative items-center justify-between py-16">
                {/* Left Side: Image */}
                <div className="lg:w-1/2">
                    <motion.img
                        src={cups}
                        alt="Cups"
                        className=" mx-auto sm:my-0 my-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                </div>
                <motion.img
                    initial={{ opacity: 0, x: -50, scale: 0.85 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute left-0 lg:-top-12 top-28  lg:max-w-80 max-w-60 md:block hidden"
                    src={leftcup}
                    alt="cup"
                />

                {/* Right Side: Text & Button */}
                <motion.div
                    className="text-center lg:text-left lg:w-1/2 flex flex-col gap-10 lg:items-start items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-[#1B1B1D] text-3xl lg:text-4xl font-extrabold">
                        Saniyələr içində tətbiqdən sevdiyiniz kofeşoplarda sevdiyiniz
                        qəhvələri sifariş edin
                    </h1>
                </motion.div>
            </section>
            <section className="flex flex-col-reverse lg:flex-row relative items-center justify-between pt-16">
                {/* Left Side: Image */}
                <div className="lg:w-[45%] w-3/4">
                    <motion.img
                        src={mobileapp2}
                        alt="mobileapp"
                        className=" mx-auto sm:my-0 my-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                    <motion.button onClick={() => setModalShow(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="lg:hidden mx-auto block px-8 py-4 bg-green text-pink font-semibold rounded-full hover:bg-green-800 transition duration-300"
                    >
                        ORDER NOW
                    </motion.button>
                </div>
                <motion.img
                    initial={{ opacity: 0, x: 50, scale: 0.85 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute right-0 top-0 lg:max-w-60 max-w-40 md:block hidden"
                    src={littleCup}
                    alt="cup"
                />

                {/* Right Side: Text & Button */}
                <motion.div
                    className="text-center lg:text-left lg:w-1/2 flex flex-col gap-10 lg:items-start items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-[#1B1B1D] text-4xl lg:text-5xl font-extrabold lg:max-w-full max-w-[500px]">
                        Coffeme-yə öncədən qoşul və 1 ay pulsuz premium abunəlik qazan
                    </h1>
                    <motion.button onClick={() => setModalShow(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="lg:block hidden px-8 py-4 bg-green text-pink font-semibold rounded-full hover:bg-green-800 transition duration-300"
                    >
                        ORDER NOW
                    </motion.button>
                </motion.div>
            </section>
            <section className="flex flex-col lg:flex-row relative items-center justify-between sm:py-0 py-16">
                {/* Left Side: Image */}
                <motion.div
                    className="text-center lg:text-left lg:w-1/2 flex flex-col gap-10 lg:items-start items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-[#1B1B1D] text-4xl lg:text-5xl font-extrabold lg:max-w-full max-w-[500px]">
                        Ödənişləri Coffeeme pulqabınızdan ödəyərək endirimlərdən faydalanın
                    </h1>
                </motion.div>
                {/* Right Side: Text & Button */}

                <div className="lg:w-[45%] w-3/4">
                    <motion.img
                        src={mobileapp3}
                        alt="mobileapp"
                        className=" mx-auto sm:my-0 my-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                </div>
                <SubmitModal
                    isOpen={modalShow}
                    onClose={() => setModalShow(false)}
                />
            </section>
        </>
    );
};

export default OrderNow;
