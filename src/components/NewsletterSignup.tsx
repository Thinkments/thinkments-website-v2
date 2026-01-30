import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

interface NewsletterSignupProps {
  variant?: 'default' | 'inline' | 'sidebar';
  title?: string;
  description?: string;
  className?: string;
}

export default function NewsletterSignup({
  variant = 'default',
  title = 'Get Marketing Tips Weekly',
  description = 'Join 2,500+ business owners who get our best insights delivered to their inbox. No spam, unsubscribe anytime.',
  className = '',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // Validate email
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Netlify Forms submission
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'newsletter',
          email: email,
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your inbox.');
        setEmail('');

        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  // Sidebar variant (compact, for blog sidebar)
  if (variant === 'sidebar') {
    return (
      <div
        className={`bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg p-6 text-white ${className}`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/90 mb-4">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
            required
            disabled={status === 'loading' || status === 'success'}
          />

          <Button
            type="submit"
            className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Subscribed!
              </>
            ) : status === 'loading' ? (
              'Subscribing...'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </>
            )}
          </Button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#4CAF50] text-sm font-medium flex items-center gap-2 bg-white/20 p-2 rounded"
            >
              <CheckCircle className="w-4 h-4" />
              {message}
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-300 text-sm flex items-center gap-2 bg-white/20 p-2 rounded"
            >
              <AlertCircle className="w-4 h-4" />
              {message}
            </motion.p>
          )}

          <p className="text-xs text-white/70 text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </div>
    );
  }

  // Inline variant (for bottom of content pages)
  if (variant === 'inline') {
    return (
      <div className={`bg-[#F8F9FA] rounded-lg p-8 ${className}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                required
                disabled={status === 'loading' || status === 'success'}
              />
              <Button
                type="submit"
                className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold px-8 sm:w-auto w-full"
                size="lg"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Subscribed!
                  </>
                ) : status === 'loading' ? (
                  'Subscribing...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </div>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#4CAF50] text-sm font-medium flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                {message}
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-4 h-4" />
                {message}
              </motion.p>
            )}

            <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
    );
  }

  // Default variant (for footer)
  return (
    <div className={`${className}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/70 mb-6">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F7B928] focus:border-transparent transition-all"
              required
              disabled={status === 'loading' || status === 'success'}
            />
            <Button
              type="submit"
              className="w-full bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold"
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Subscribed!
                </>
              ) : status === 'loading' ? (
                'Subscribing...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </div>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#4CAF50] text-sm font-medium flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              {message}
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm flex items-center justify-center gap-2"
            >
              <AlertCircle className="w-4 h-4" />
              {message}
            </motion.p>
          )}

          <p className="text-xs text-white/50">We respect your privacy. Unsubscribe anytime.</p>
        </form>
      </div>

      {/* Hidden form for Netlify Forms */}
      <form name="newsletter" data-netlify="true" hidden method="POST">
        <input type="email" name="email" />
      </form>
    </div>
  );
}
