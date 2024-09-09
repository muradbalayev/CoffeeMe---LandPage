import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import logo from "../assets/logo.png";
import translations from "../translations.json";
import { LanguageContext } from "../context/languageContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const SubmitModal = ({ isOpen, onClose }) => {
  const { language } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    wantsMessages: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to backend
      const response = await fetch("http://localhost:5000/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(translations[language]["thanks"]);
        console.log(data);
        onClose();
      } else {
        toast.error(data.error || "Error submitting form");
      }
    } catch (err) {
      console.log(err);
      toast.error(err || "Error submitting form");
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} center>
      <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
        <div className="text-center my-6 md:mb-0">
          <img
            src={logo}
            alt="Coffeeme Logo"
            className="md:h-20 sm:h-12 h-10 sm:mb-10 mx-auto"
          />
          {/* <h1 className="md:text-2xl text-xl font-bold mt-2 text-[#1B1B1D]">
                        First One’s On Us!
                    </h1> */}
          <div className="mt-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center md:gap-4"
            >
              <input
                type="text"
                name="fullName"
                required
                placeholder={translations[language]["fullname"]}
                value={formData.fullName}
                onChange={handleChange}
                className="p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-64"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={translations[language]["email"]}
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-64"
              />
              <div className="flex gap-4 items-center justify-center mb-5 ps-2">
                <input
                  type="checkbox"
                  name="wantsMessages"
                  checked={formData.wantsMessages}
                  onChange={handleChange}
                />
                <p className="text-gray text-xs">
                  {translations[language]["notification"]}
                </p>
              </div>
              <button
                type="submit"
                className="sm:p-3 p-2 bg-green text-pink rounded-full hover:bg-green-700 transition-all md:w-40 sm:w-36 w-32"
              >
                {translations[language]["subscribe"]}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubmitModal;
