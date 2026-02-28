import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Music } from 'lucide-react';

const LoadingSpinner = ({ size = 'default', message = 'Chargement...' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} border-2 border-brand-primary/30 border-t-brand-primary rounded-full`}
      />
      {message && (
        <p className="text-slate-400 text-sm font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

const PageLoading = ({ message = 'Chargement de la page...' }) => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-primary/20">
            <Music size={32} className="text-white animate-pulse" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 border-2 border-brand-primary/20 rounded-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2"
        >
          <h2 className="text-xl font-bold text-white">Vibrato</h2>
          <p className="text-slate-400">{message}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex space-x-1 justify-center"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-brand-primary rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const SkeletonLoader = ({ className = '', lines = 3 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-slate-700 rounded mb-2 last:mb-0"
          style={{
            width: i === lines - 1 ? '60%' : '100%',
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export { LoadingSpinner, PageLoading, SkeletonLoader };
