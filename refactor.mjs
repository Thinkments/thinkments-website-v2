import fs from 'fs';

const filePath = 'C:/Users/dad/thinkments-website-v2/src/components/admin/BrokenLinkChecker.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Global Color Palette Replacement
const replacements = [
  // Backgrounds
  { regex: /bg-white/g, replace: 'bg-[#0f172a]/50 backdrop-blur-md' },
  { regex: /bg-gray-50/g, replace: 'bg-white/5' },
  { regex: /bg-gray-100/g, replace: 'bg-white/10' },
  { regex: /bg-gray-200/g, replace: 'bg-white/20' },
  { regex: /bg-blue-50/g, replace: 'bg-indigo-900/20' },
  { regex: /bg-blue-100/g, replace: 'bg-indigo-500/10' },
  { regex: /bg-red-50/g, replace: 'bg-rose-900/20' },
  { regex: /bg-red-100/g, replace: 'bg-rose-500/10' },
  { regex: /bg-green-50/g, replace: 'bg-emerald-900/20' },
  { regex: /bg-green-100/g, replace: 'bg-emerald-500/10' },
  { regex: /bg-yellow-50/g, replace: 'bg-amber-900/20' },
  { regex: /bg-yellow-100/g, replace: 'bg-amber-500/10' },
  { regex: /bg-orange-50/g, replace: 'bg-orange-900/20' },
  { regex: /bg-orange-100/g, replace: 'bg-orange-500/10' },
  
  // Text Colors
  { regex: /text-\[#1E3A5F\]/g, replace: 'text-white' },
  { regex: /text-gray-900/g, replace: 'text-gray-100' },
  { regex: /text-gray-800/g, replace: 'text-gray-200' },
  { regex: /text-gray-700/g, replace: 'text-slate-300' },
  { regex: /text-gray-600/g, replace: 'text-slate-400' },
  { regex: /text-gray-500/g, replace: 'text-slate-500' },
  { regex: /text-blue-900/g, replace: 'text-indigo-200' },
  { regex: /text-blue-700/g, replace: 'text-indigo-300' },
  { regex: /text-blue-600/g, replace: 'text-indigo-400' },
  { regex: /text-red-900/g, replace: 'text-rose-200' },
  { regex: /text-red-700/g, replace: 'text-rose-300' },
  { regex: /text-red-600/g, replace: 'text-rose-400' },
  
  // Borders
  { regex: /border-gray-100/g, replace: 'border-white/5' },
  { regex: /border-gray-200/g, replace: 'border-white/10' },
  { regex: /border-gray-300/g, replace: 'border-white/20' },
  
  // Specific styling tweaks to match 10x
  { regex: /shadow-md/g, replace: 'shadow-2xl border border-white/5' },
  { regex: /shadow-lg/g, replace: 'shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10' },
];

for (const { regex, replace } of replacements) {
  content = content.replace(regex, replace);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully mass-migrated Tailwind classes to Dark Mode.');
