import React, { ReactNode, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const tooltipRef = useRef(null);

  const tooltipVariants = {
    slide: {
      y: [10, 0],
      x: ["-50%", "-50%"],
      opacity: [0, 1],
      transition: {
        times: [0, 1],
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleTooltipMouseEnter = () => {
    return setDisplayTooltip(true);
  };

  const handleTooltipMouseLeave = () => {
    return setDisplayTooltip(false);
  };

  const handleTooltipClick = () => {
    return isMobile ? setDisplayTooltip(!displayTooltip) : undefined;
  };

  return (
    <div
      ref={tooltipRef}
      onMouseEnter={handleTooltipMouseEnter}
      onMouseLeave={handleTooltipMouseLeave}
      onClick={handleTooltipClick}
      className="relative"
    >
      <AnimatePresence key={text}>
        {displayTooltip && (
          <motion.div
            className="absolute inline-table left-1/2 bottom-[100%] mx-auto bg-gradient-to-b from-zinc-700 to-zinc-950 py-[1px] px-[6px] ]text-center rounded-sm text-white text-[12px] font-semibold whitespace-nowrap"
            variants={tooltipVariants}
            animate="slide"
          >
            {text}
            <div className="absolute left-0 right-0 bottom-[-4px] mx-auto w-0 h-0 border-l-[4px] border-l-transparent border-t-[4px] border-t-black border-r-[4px] border-r-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
};
