import { motion } from "framer-motion";

const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center'>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className='spinner-border animate-spin inline-block w-16 h-16 border-b-2 border-blue-500 rounded-full'
                role='status'>
                <span className='visually-hidden'></span>
            </motion.div>
        </motion.div>
    );
};

export default Loading;
