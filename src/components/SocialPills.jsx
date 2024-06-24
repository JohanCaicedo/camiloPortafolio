// SocialPills.jsx
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function SocialPills({ href, children, ...props }) { // Agrega ...props para pasar cualquier otra propiedad
  const handleClick = (event) => {
    if (href.startsWith("tel:")) {
      event.preventDefault(); 
      sendWhatsAppMessage();
    }
  };

  function sendWhatsAppMessage() {
    const phoneNumber = href.replace("tel:", ""); // Extrae el número de teléfono
    const message = "Good morning/afternoon Camilo! I have an incredible idea. Do you want to collaborate?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }

  return (
    <motion.a 
      href={href} 
      target="_blank" 
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={handleClick}
      transition={{ type: "spring", stiffness: 400, damping: 10 }} 
      {...props} 
    >
      <button
        type="button"
        className="text-white bg-gradient-to-l from-blue-600 to-purple-500 dark:bg-bg-gradient-to-l dark:from-blue-900 dark:to-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 flex items-center gap-x-2 mt-4"
      >
        {children}
      </button>
    </motion.a>
  );
}

export default SocialPills;
