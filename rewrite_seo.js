const fs = require('fs');

const files = [
  'src/components/admin/SERPOptimizer.tsx',
  'src/components/admin/SEOBulkFixer.tsx',
];

// The de-duped clean card class
const CARD_CLASS = 'border-0 border border-white/8 bg-[#090f1a] hover:border-indigo-500/30 shadow-[0_0_30px_rgba(79,70,229,0.08)] hover:shadow-[0_0_40px_rgba(79,70,229,0.18)] transition-all duration-300';

files.forEach(file => {
  if (!fs.existsSync(file)) { console.log('NOT FOUND:', file); return; }
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // ── 1. Kill ALL duplicated card class patterns ──
  // The triple-dup pattern we know is in this file:
  content = content.replace(
    /border-0 shadow-\[0_0_30px_rgba\(79,70,229,0\.1\)\] border border-white\/5 bg-\[#0f172a\]\/80 backdrop-blur-xl relative z-10(?: bg-\[#0f172a\]\/80 backdrop-blur-xl relative z-10)*(?: hover:border-indigo-500\/30 hover:shadow-\[0_0_40px_rgba\(79,70,229,0\.2\)\] transition-all duration-300)?(?:(?: hover:shadow-lg transition-shadow)?)/g,
    CARD_CLASS
  );
  
  // Also simpler single-dup:
  content = content.replace(
    /shadow-\[0_0_30px_rgba\(79,70,229,0\.1\)\] border border-white\/5 bg-\[#0f172a\]\/80 backdrop-blur-xl relative z-10 hover:border-indigo-500\/30 hover:shadow-\[0_0_40px_rgba\(79,70,229,0\.2\)\] transition-all duration-300/g,
    CARD_CLASS
  );

  // ── 2. Fix remaining legacy cyan ──
  content = content.replace(/focus:ring-\[#00B4D8\]/g, 'focus:ring-indigo-500');
  content = content.replace(/\[#00B4D8\]/g, 'indigo-500');
  content = content.replace(/from-\[#00B4D8\]/g, 'from-indigo-600');
  content = content.replace(/to-\[#1E3A5F\]/g, 'to-purple-900');
  content = content.replace(/text-\[#00B4D8\]/g, 'text-indigo-400');
  content = content.replace(/bg-\[#00B4D8\]/g, 'bg-indigo-600');
  content = content.replace(/border-\[#00B4D8\]/g, 'border-indigo-500');
  
  // ── 3. Fix bad text-rose color utility for "No Issues" badge ──
  content = content.replace(/text-green-700(?=["'])/g, 'text-emerald-400');
  
  // ── 4. Fix bad bg-*-900/200 patterns (invalid Tailwind) ──
  content = content.replace(/bg-rose-900\/200/g, 'bg-rose-500/15');
  content = content.replace(/bg-amber-900\/200/g, 'bg-amber-500/15');
  content = content.replace(/bg-orange-900\/200/g, 'bg-orange-500/15');
  
  // ── 5. Input / select dark styling ──
  content = content.replace(
    /className="w-full pl-10 pr-4 py-2 border border-white\/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/g,
    'className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-colors"'
  );
  content = content.replace(
    /className="(?:px-3 py-2 border border-white\/20 rounded-lg|w-full px-3 py-2 border border-white\/20 rounded-lg)(?: mb-4)?"/g,
    (m) => m.replace('border border-white/20', 'bg-white/5 border border-white/10').replace('rounded-lg"', 'rounded-lg text-slate-200"')
  );

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('✅ Fixed:', file);
  } else {
    console.log('⏭️  No changes needed:', file);
  }
});
