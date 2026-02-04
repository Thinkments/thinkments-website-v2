import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface GoogleSearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    autoFocus?: boolean;
}

export function GoogleSearchBar({
    value,
    onChange,
    placeholder = "Search...",
    className,
    autoFocus = false,
}: GoogleSearchBarProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={cn(
                'max-w-2xl mx-auto relative group transition-all duration-300',
                isFocused ? 'scale-105' : '',
                className
            )}
        >
            <div
                className={cn(
                    'relative flex items-center bg-white rounded-full border transition-all duration-300 shadow-sm hover:shadow-md',
                    isFocused
                        ? 'border-[#4285F4] shadow-md ring-4 ring-blue-50/50'
                        : 'border-gray-200'
                )}
            >
                <Search className="absolute left-6 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus={autoFocus}
                    className="w-full pl-14 pr-6 py-4 rounded-full text-lg text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                />
                {value && (
                    <button
                        onClick={() => onChange('')}
                        className="absolute right-6 p-1 rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
                        type="button"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        </motion.div>
    );
}
