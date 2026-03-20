import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Shield, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface ClientLoginProps {
  onLogin: () => void;
}

export default function ClientLogin({ onLogin }: ClientLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showMagicLinkSuccess, setShowMagicLinkSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API Auth Request
    setTimeout(() => {
      setIsLoading(false);
      onLogin(); // Bypass auth for demo purposes
    }, 1200);
  };

  const handleMagicLink = () => {
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowMagicLinkSuccess(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Graphic Effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] bg-[#00B4D8]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1E3A5F]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10"
      >
        {/* Left Side: Login Card */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F]" />
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-xl text-[#1E3A5F] tracking-tight">ThinkMents Portal</div>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
              <p className="text-gray-500">Sign in to your client dashboard to view active campaigns and reports.</p>
            </div>

            <AnimatePresence mode="wait">
              {showMagicLinkSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 p-6 rounded-xl text-center mb-6"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-green-800 mb-1">Check your inbox</h3>
                  <p className="text-sm text-green-600">We've sent a magic login link to <strong>{email}</strong>.</p>
                  <Button 
                    variant="ghost" 
                    className="mt-4 text-green-700 hover:bg-green-100"
                    onClick={() => setShowMagicLinkSuccess(false)}
                  >
                    Back to login
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleLogin}
                  className="space-y-5"
                >
                  <div className="space-y-2 relative">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                        placeholder="client@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-gray-700">Password</label>
                      <button type="button" className="text-xs font-semibold text-[#00B4D8] hover:text-[#1E3A5F]">Forgot password?</button>
                    </div>
                    <div className="relative">
                      <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full py-6 bg-[#1E3A5F] hover:bg-[#152a45] text-white font-bold rounded-xl shadow-lg shadow-[#1E3A5F]/20 flex items-center justify-center transition-all"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Sign In Securely <ArrowRight className="w-4 h-4 ml-2" /></>
                      )}
                    </Button>
                  </div>

                  <div className="relative flex items-center py-4">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">Or</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <Button 
                    type="button"
                    variant="outline"
                    onClick={handleMagicLink}
                    className="w-full py-6 border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white font-bold rounded-xl transition-all"
                    disabled={!email || isLoading}
                  >
                    Email me a Magic Link
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Right Side: Trust & Value Props */}
        <div className="hidden lg:flex flex-col justify-center px-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-[#1E3A5F] mb-6 leading-tight font-heading">
              Your entire digital strategy, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-blue-600">in one place.</span>
            </h2>
            
            <ul className="space-y-6">
              {[
                { title: 'Real-Time ROI Tracking', desc: 'Monitor your inbound leads, Google Ads performance, and organic search traffic 24/7.' },
                { title: 'Automated AI Audits', desc: 'Download comprehensive monthly performance breakdowns generated by the MACE network.' },
                { title: 'Direct Agency Access', desc: 'Submit tasks, request web edits, and manage your billing without ever sending an email.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <div className="w-2 h-2 bg-[#00B4D8] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-xl shadow-blue-500/5">
              <p className="text-sm font-medium text-gray-600 italic">
                "The ThinkMents portal completely changed how we view our marketing spend. Everything is completely transparent and immediate."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm" />
                <div className="ml-3">
                  <p className="text-xs font-bold text-gray-900">David C.</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Acme Construction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
