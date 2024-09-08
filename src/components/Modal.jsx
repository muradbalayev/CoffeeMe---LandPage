import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import logo from '../assets/logo.png';

const SubmitModal = ({ isOpen, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return (
        <Modal open={isOpen} onClose={onClose} center>
            <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
                <div className="text-center my-6 md:mb-0">
                    <img src={logo} alt="Coffeeme Logo" className="md:h-20 sm:h-12 h-10 mx-auto" />
                    <h1 className="md:text-2xl text-xl font-bold mt-2 text-[#1B1B1D]">
                        First One’s On Us!
                    </h1>
                    <div className="mt-4">
                        <form onSubmit={handleSubmit} className="flex flex-col items-center md:gap-4">
                            <input
                                type="text"
                                placeholder="Ad Soyad"
                                className="p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-64"
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-64"
                            />
                            <div className='flex gap-4 items-center justify-center mb-5'>
                               
                                <div className="checkbox-wrapper-43">
                                <input type="checkbox" id="cbx-43" />
                                <label htmlFor="cbx-43" className="check">
                                    <svg width="16px" height="16px" viewBox="0 0 18 18">
                                        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                        <polyline points="1 9 7 14 15 4"></polyline>
                                    </svg>
                                </label>
                            </div>
                                <p className='text-gray text-xs pb-2'>Bildirimlərdən xəbərdar olmaq istəyirsinizmi?</p>

                            </div>
                            <button
                                type="submit"
                                className="sm:p-3 p-2 bg-green text-pink rounded-full hover:bg-green-700 transition-all md:w-40 sm:w-36 w-32"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
};


export default SubmitModal;