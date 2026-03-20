import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TrendingDown, Activity, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LiquidationData {
  id: string;
  asset: string;
  side: 'LONG' | 'SHORT';
  amountUsd: number;
  exchange: string;
  timestamp: number;
}

interface ObsidianData {
  id: string;
  blockchain: string;
  fromAddress: string;
  toAddress: string;
  token: string;
  amount: number;
  usdValue: number;
  timestamp: number;
}

export default function LiveAgentFeeds() {
  const [liquidations, setLiquidations] = useState<LiquidationData[]>([]);
  const [obsidian, setObsidian] = useState<ObsidianData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setLoading(true);
    try {
      const [liqRes, obsRes] = await Promise.all([
        fetch('/api/liquidation-node').then((res) => res.json()),
        fetch('/api/obsidian-ledger').then((res) => res.json()),
      ]);

      if (liqRes.success) setLiquidations(liqRes.data);
      if (obsRes.success) setObsidian(obsRes.data);
    } catch (error) {
      console.error('Failed to fetch live feeds:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeeds();
    const interval = setInterval(fetchFeeds, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const formatUsd = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-6">
      {/* Liquidation Node */}
      <Card className="border-0 shadow-2xl border border-white/5 h-full bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <CardHeader className="pb-3 border-b border-white/10 flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white">
            <TrendingDown className="w-5 h-5 text-red-400" />
            The Liquidation Node
          </CardTitle>
          <button onClick={fetchFeeds} className="text-white/50 hover:text-white transition-colors">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            <AnimatePresence>
              {liquidations.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-between items-center p-3 rounded-lg bg-[#0f172a]/40 backdrop-blur-xl/5 border border-white/10"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{item.asset}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-sm font-semibold ${
                          item.side === 'LONG' ? 'bg-rose-900/200/20 text-red-400' : 'bg-emerald-900/200/20 text-green-400'
                        }`}
                      >
                        {item.side} REKT
                      </span>
                    </div>
                    <div className="text-xs text-white/50 mt-1">{item.exchange}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-medium text-lg text-white">{formatUsd(item.amountUsd)}</div>
                    <div className="text-xs text-white/40">{new Date(item.timestamp).toLocaleTimeString()}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {!loading && liquidations.length === 0 && <div className="text-center text-white/50 py-4">No recent liquidations...</div>}
            {loading && liquidations.length === 0 && <div className="text-center text-white/50 py-4">Scanning exchanges...</div>}
          </div>
        </CardContent>
      </Card>

      {/* Obsidian Ledger */}
      <Card className="border-0 shadow-2xl border border-white/5 h-full bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
        <CardHeader className="pb-3 border-b border-white/10 flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white">
            <Activity className="w-5 h-5 text-whitemerald-400" />
            Obsidian Ledger
          </CardTitle>
          <button onClick={fetchFeeds} className="text-white/50 hover:text-white transition-colors">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            <AnimatePresence>
              {obsidian.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-between items-center p-3 rounded-lg bg-[#0f172a]/40 backdrop-blur-xl/5 border border-white/10"
                >
                  <div className="min-w-0 flex-1 mr-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold truncate text-white">{item.amount.toLocaleString()} {item.token}</span>
                      <span className="text-xs bg-emerald-500/20 text-whitemerald-400 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
                        {item.blockchain}
                      </span>
                    </div>
                    <div className="text-xs text-white/50 mt-1 truncate">
                      {item.fromAddress} → {item.toAddress}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono font-medium text-lg text-whitemerald-300">{formatUsd(item.usdValue)}</div>
                    <div className="text-xs text-white/40">{new Date(item.timestamp).toLocaleTimeString()}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {!loading && obsidian.length === 0 && <div className="text-center text-white/50 py-4">No whale movements...</div>}
            {loading && obsidian.length === 0 && <div className="text-center text-white/50 py-4">Scanning mempool...</div>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
