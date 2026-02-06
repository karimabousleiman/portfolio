import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const FLIP_INTERVAL = 40; // ms per character flip

interface SplitFlapTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const SplitFlapChar = ({
  targetChar,
  delay,
}: {
  targetChar: string;
  delay: number;
}) => {
  const [currentChar, setCurrentChar] = useState(targetChar);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let flipCount = 0;
    const maxFlips = Math.floor(Math.random() * 6) + 4; // 4-9 random flips

    const startFlipping = () => {
      setIsFlipping(true);
      const flip = () => {
        if (flipCount >= maxFlips) {
          setCurrentChar(targetChar);
          setIsFlipping(false);
          return;
        }
        setCurrentChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
        flipCount++;
        timeout = setTimeout(flip, FLIP_INTERVAL);
      };
      flip();
    };

    timeout = setTimeout(startFlipping, delay);
    return () => clearTimeout(timeout);
  }, [targetChar, delay]);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentChar + (isFlipping ? Math.random() : "final")}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.06 }}
          className="inline-block"
          style={{ minWidth: currentChar === " " ? "0.3em" : undefined }}
        >
          {currentChar === " " ? "\u00A0" : currentChar}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const SplitFlapText = ({
  texts,
  interval = 3500,
  className = "",
}: SplitFlapTextProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [key, setKey] = useState(0);

  const maxLen = Math.max(...texts.map((t) => t.length));

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setKey((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  const currentText = texts[textIndex].toUpperCase().padEnd(maxLen);

  return (
    <span className={className} style={{ perspective: 600 }}>
      {currentText.split("").map((char, i) => (
        <SplitFlapChar key={`${key}-${i}`} targetChar={char} delay={i * 30} />
      ))}
    </span>
  );
};

export default SplitFlapText;
