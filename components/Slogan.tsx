import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

const Slogan = () => {
  const [seconds, setSeconds] = useState(0);

  const wordArrays = useMemo(
    () => [
      {
        name: "Design",
        color:
          "linear-gradient(60deg, rgba(255,68,111,1) 0%, rgba(255,13,13,1) 100%)",
      },
      {
        name: "Codes",
        color:
          "linear-gradient(60deg, rgba(0,155,119,1) 0%, rgba(0,103,2,1) 100%)",
      },
      {
        name: "Ideas",
        color:
          "linear-gradient(60deg, rgba(68,204,255,1) 0%, rgba(0,32,250,1) 100%)",
      },
    ],
    []
  );

  const [quote, setQuote] = useState(wordArrays[2]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 1) {
        setSeconds(0);
        setQuote(wordArrays[seconds]);
      } else {
        setSeconds((seconds: number) => seconds + 1);
        setQuote(wordArrays[seconds]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [quote, seconds, wordArrays]);
  return (
    <AnimatePresence>
      {quote && (
        <motion.span
          key={seconds}
          className="absolute inline-block text-white px-3 ml-3"
          initial={{ y: 10, opacity: 0, background: quote.color }}
          animate={{ y: 0, opacity: 1, background: quote.color }}
          exit={{ y: 10, opacity: 0, background: quote.color }}
          transition={{ type: "sring" }}
        >
          {quote.name}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default Slogan;
