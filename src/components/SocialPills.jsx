// SocialPills.jsx
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function SocialPills(props) {
  return (
    <motion.a {...props} target="_blank" variants={buttonVariants} whileHover="hover" whileTap="tap">
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-x-2 py-3 mt-4"
      >
        {props.children}
      </button>
    </motion.a>
  );
}

export default SocialPills;
