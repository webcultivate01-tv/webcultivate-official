import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "917821096438";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-10 right-5 z-50">
      <button
        onClick={openWhatsApp}
        aria-label="Chat with us on WhatsApp"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
