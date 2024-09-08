import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import rightcup from '../assets/rightcup.png'
import { useState } from "react";
import SubmitModal from "./Modal";


const PricingPlans = () => {
    const [modalShow, setModalShow] = useState(false);


    return (
        <section className="pt-24 px-10 flex flex-col items-center relative mb-16">
            <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], }}
                viewport={{ once: true }}
                className="font-extrabold sm:mb-16 mb-10 sm:text-4xl text-3xl text-center"
            >
                Plans
            </motion.h1>
            <motion.img
                initial={{ opacity: 0, x: 50, scale: 0.85 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="absolute right-0 -top-4 lg:max-w-80 md:max-w-60 max-w-44" src={rightcup} alt="cup" />
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-20 mb-6 ">
                {/* Free Plan */}
                <motion.div
                    className="px-6 py-10 shadow-lg bg-white border rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0, y: 50 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-medium text-3xl text-center text-pink mb-4">Free</h3>
                    <p className="text-gray font-medium text-center mb-4">Have a go and test your superpowers</p>
                    <div className="flex items-center justify-center mb-4 gap-1">
                        <h2 className="text-6xl text-center font-semibold">0 </h2>
                        <span className="text-3xl font-bold text-[#B79D5C]"> ₼</span>
                    </div>
                    <ul className="flex flex-col gap-3 mb-6 bg-gray-50  font-medium px-4 py-4 rounded-xl">
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" /> 2 Users</li>
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />  2 Files</li>
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />  Public Share & Comments</li>
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />  Chat Support</li>
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />  New income apps</li>
                    </ul>
                </motion.div>

                {/* Premium Plan */}
                <motion.div
                    className="px-6 py-10 shadow-lg bg-green text-white border border-gray-200 rounded-2xl"
                    initial={{ scale: 0.7, opacity: 0, y: 50 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-medium text-3xl text-center text-pink mb-4">Premium</h3>
                    <p className="text-white font-medium text-center mb-4">Experiment the power of infinite possibilities</p>
                    <div className="flex items-center justify-center mb-4 gap-1">
                        <h2 className="text-6xl text-center font-semibold">5 </h2>
                        <span className="text-3xl font-bold text-[#B79D5C]"> ₼</span>
                    </div>
                    <p className="max-w-40 mx-auto py-2 rounded-xl text-pink bg-[#429D9280] text-center mb-4">Save $50 a year</p>
                    <ul className="flex flex-col gap-3 mb-6 bg-white border text-black font-medium px-4 py-4 rounded-xl">
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />4 Users</li>
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />All apps</li>
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />Unlimited editable exports</li>
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />Folders and collaboration </li>
                        <li className="flex items-center gap-1"><FaCircleCheck className="text-green" />All incoming apps</li>
                        <motion.button onClick={() => setModalShow(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.8 }}
                            className=" mx-auto  px-6 py-4 bg-green text-pink font-semibold rounded-full hover:bg-green-800 transition duration-300"
                        >
                            ORDER NOW
                        </motion.button>
                    </ul>
                </motion.div>
            </div>
            <SubmitModal
                isOpen={modalShow}
                onClose={() => setModalShow(false)}
            />
        </section>
    )
}

export default PricingPlans
