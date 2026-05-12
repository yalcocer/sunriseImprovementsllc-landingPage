import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
     <a
      href="https://wa.me/17037051661"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex items-center justify-center gap-2 bg-gray-800 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow transition"
    >
      <FaWhatsapp className="w-5 h-5" />
      <span>WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
