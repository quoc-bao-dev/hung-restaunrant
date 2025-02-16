import { motion } from "framer-motion";
import { useSidebarContext } from "../../context/SidebarProvider;";

export default function HamburgerButton({ className }: { className?: string }) {
  const { isShowSideBar, setIsShowSideBar } = useSidebarContext()
  return (
    <button
      onClick={() => setIsShowSideBar(!isShowSideBar)}
      className={`relative flex flex-col items-center justify-center w-12 h-12 p-2 rounded-lg ${className}`}
    >
      <motion.div
        animate={isShowSideBar ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
        className="w-8 h-1 bg-white rounded-lg"
      />
      <motion.div
        animate={isShowSideBar ? { opacity: 0 } : { opacity: 1 }}
        className="w-8 h-1 bg-white rounded-lg my-1"
      />
      <motion.div
        animate={isShowSideBar ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        className="w-8 h-1 bg-white rounded-lg"
      />
    </button>
  );
}