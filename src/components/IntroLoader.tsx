import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleSystem from './animations/ParticleSystem';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate progress from 0 to 100
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    // Fade in text after short delay
    setTimeout(() => {
      setTextVisible(true);
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-green-950 z-50"
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
    >
      <ParticleSystem type="leaves" />
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-semibold text-white mb-10 text-center relative z-10"
      >
        Fueling Sustainable Growth
      </motion.h1>
      
      <div className="relative w-64 h-64 mb-8">
        <motion.div
          className="absolute inset-0 rounded-full bg-green-600/30 flex items-center justify-center"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-48 h-48 rounded-full bg-green-700/60 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut", 
              delay: 0.2
            }}
          >
            <motion.div
              className="w-36 h-36 rounded-full bg-green-800/80 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 0.4 
              }}
            >
              <motion.div
                className="w-24 h-24 rounded-full bg-green-900 flex items-center justify-center text-white text-xl"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear" 
                }}
              >
                {Math.floor(progress)}%
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="w-72 h-2 bg-green-900/50 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default IntroLoader;