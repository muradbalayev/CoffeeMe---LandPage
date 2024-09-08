import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import logo from '../assets/logo.png';

const SubmitModal = ({  isOpen, onClose }) => {

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
                                type="email"
                                placeholder="E-mail"
                                className="p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-64"
                            />
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