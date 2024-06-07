// SocialPills.jsx
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function SocialPills({ href, children, ...props }) { // Agrega ...props para pasar cualquier otra propiedad
  const handleClick = (event) => {
    if (href.startsWith("tel:")) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      sendWhatsAppMessage();
    }
  };

  function sendWhatsAppMessage() {
    const phoneNumber = href.replace("tel:", ""); // Extrae el número de teléfono
    const message = "Buen día Camilo !Tengo una idea increíble! ¿Quieres colaborar?";
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
      onClick={handleClick} // Agrega el manejador de clic
      {...props} // Pasa cualquier otra propiedad a motion.a
    >
      <button
        type="button"
        className="text-white bg-[#22282e] dark:bg-[#96acc8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 flex items-center gap-x-2 mt-4"
      >
        {children}
      </button>
    </motion.a>
  );
}

export default SocialPills;
