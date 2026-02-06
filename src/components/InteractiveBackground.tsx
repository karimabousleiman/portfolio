import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const orbs = [
  { size: 300, x: "20%", y: "30%", speed: 40, opacity: 0.15 },
  { size: 200, x: "70%", y: "20%", speed: 25, opacity: 0.1 },
  { size: 150, x: "80%", y: "70%", speed: 55, opacity: 0.12 },
  { size: 250, x: "10%", y: "75%", speed: 35, opacity: 0.08 },
  { size: 100, x: "50%", y: "50%", speed: 60, opacity: 0.1 },
];

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  speed: Math.random() * 80 + 20,
  delay: Math.random() * 3,
  opacity: Math.random() * 0.5 + 0.1,
}));

const InteractiveBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl bg-primary"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            opacity: orb.opacity,
          }}
          animate={{
            x: mouse.x * orb.speed,
            y: mouse.y * orb.speed,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
      ))}

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            opacity: p.opacity,
          }}
          animate={{
            x: mouse.x * p.speed,
            y: mouse.y * p.speed,
            scale: [1, 1.5, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 15 },
            y: { type: "spring", stiffness: 50, damping: 15 },
            scale: { duration: 3 + p.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveBackground;
