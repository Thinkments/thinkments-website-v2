import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, RotateCcw, Coffee, Briefcase, Zap } from 'lucide-react';

type TimerMode = 'work' | 'shortBreak' | 'longBreak';

const MODE_TIMES: Record<TimerMode, number> = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export default function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(MODE_TIMES.work);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      // Optional: Play a sound or notification here when time is up
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(MODE_TIMES[mode]);
  };

  const switchMode = (newMode: TimerMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(MODE_TIMES[newMode]);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progress = ((MODE_TIMES[mode] - timeLeft) / MODE_TIMES[mode]) * 100;

  return (
    <div className="bg-[#1a1f2e] border border-white/10 rounded-3xl p-6 shadow-2xl max-w-sm w-full backdrop-blur-xl shrink-0">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#00B4D8]" />
          Focus Timer
        </h2>
      </div>

      <div className="flex justify-center gap-2 mb-8 bg-white/5 p-1 rounded-full">
        {(['work', 'shortBreak', 'longBreak'] as const).map((m) => (
          <button
            key={m}
            onClick={() => switchMode(m)}
            className={`flex-1 py-2 px-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 capitalize flex flex-col sm:flex-row items-center justify-center gap-1 ${
              mode === m
                ? 'bg-[#00B4D8] text-white shadow-lg'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {m === 'work' ? (
              <Briefcase className="w-4 h-4" />
            ) : (
              <Coffee className="w-4 h-4" />
            )}
            <span>{m === 'work' ? 'Work' : m === 'shortBreak' ? 'Short Break' : 'Long Break'}</span>
          </button>
        ))}
      </div>

      <div className="relative flex justify-center items-center mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-white/5 pointer-events-none" />
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="transparent"
            stroke={mode === 'work' ? '#00B4D8' : '#10B981'}
            strokeWidth="4"
            strokeDasharray="301.59"
            strokeDashoffset={301.59 - (301.59 * progress) / 100}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center z-10">
          <motion.div
            key={timeLeft}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono"
            data-testid="time-display"
          >
            {formatTime(timeLeft)}
          </motion.div>
          <div className="text-xs sm:text-sm text-white/50 mt-2 font-medium uppercase tracking-widest">
            {mode === 'work' ? 'Focus Session' : 'Rest'}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={toggleTimer}
          aria-label={isRunning ? 'Pause' : 'Play'}
          className={`w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 ${
            isRunning
              ? 'bg-rose-500/20 text-rose-500 hover:bg-rose-500/30'
              : 'bg-[#00B4D8] text-white hover:bg-[#0096b8]'
          }`}
        >
          {isRunning ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
        </button>
        <button
          onClick={resetTimer}
          aria-label="Reset"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all hover:scale-105 active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
