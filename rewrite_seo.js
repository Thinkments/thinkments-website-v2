import fs from 'fs';

const files = ['src/components/admin/SERPOptimizer.tsx', 'src/components/admin/SEOBulkFixer.tsx', 'src/components/admin/EcommerceWebDesigner.tsx'];

const replacements = [
  // Old cyan legacy overrides missing from prior passes
  {from: '\\[#00B4D8\\]/5', to: 'indigo-500/10'},
  {from: '\\[#00B4D8\\]/50', to: 'indigo-500/30'},
  {from: 'bg-\\[#00B4D8\\]', to: 'bg-indigo-600'},
  {from: 'text-\\[#00B4D8\\]', to: 'text-indigo-400'},
  {from: 'border-\\[#00B4D8\\]', to: 'border-indigo-500'},
  {from: 'from-\\[#00B4D8\\]', to: 'from-indigo-600'},
  {from: 'to-\\[#1E3A5F\\]', to: 'to-purple-900'},
  {from: '\\[#1E3A5F\\]', to: 'purple-900'},
  {from: 'from-\\[#1E3A5F\\]', to: 'from-purple-900'},

  // Fix custom colors in text
  {from: 'text-\\[#FF6B35\\]', to: 'text-amber-400'},
  {from: 'text-whitember-', to: 'text-amber-'},
  
  // Premium glassmorphic alerts & statuses instead of old green/red badging
  {from: 'bg-emerald-900/20 rounded border border-green-200', to: 'bg-emerald-500/10 rounded-lg border border-emerald-500/30 backdrop-blur-md'},
  {from: 'text-green-800', to: 'text-emerald-300'},
  {from: 'border-green-200', to: 'border-emerald-500/30'},
  {from: 'bg-rose-900/20 rounded border border-red-200', to: 'bg-rose-500/10 rounded-lg border border-rose-500/30 backdrop-blur-md'},
  {from: 'text-red-800', to: 'text-rose-300'},
  
  // Extra 10x Glows
  {from: 'shadow-2xl border border-white/5', to: 'shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all duration-300'}
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  
  replacements.forEach(r => {
    content = content.replace(new RegExp(r.from, 'g'), r.to);
  });
  
  // Also inject a background glowing orb for maximum 10x presentation
  if (!content.includes('blur-[120px]') && content.includes('<div className="mb-6">')) {
    content = content.replace('<div className="mb-6">', 
      '<div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />\\n      <div className="mb-6 relative z-10">'
    );
  }

  // Ensure main cards actually use the glassmorphic background layer
  content = content.replace(/className="border-0 shadow-\[0_0_30px_rgba\(79,70,229,0\.1\)\] border border-white\/5/g, 'className="border-0 shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 bg-[#0f172a]/80 backdrop-blur-xl relative z-10');

  fs.writeFileSync(file, content);
  console.log('10x Upgrade Applied To:', file);
});
