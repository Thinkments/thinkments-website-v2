import React from 'react';
import SEO from '../SEO';

const TestReactCssPage = () => {
  return (
    <>
      <SEO
        title="Button Showcase | ThinkMents"
        description="A showcase of custom button styles."
        url="/test-react-css"
        type="website"
      />
      <div className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-8 font-sans relative overflow-hidden">

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* --- SECTION 1: CYBERPUNK UI --- */}
        <div className="mb-16 text-center z-10">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#ff00ff] text-4xl md:text-5xl font-black tracking-tighter mb-2" style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 20px rgba(0, 242, 255, 0.5)' }}>
            CYBER<span className="text-white">PUNK</span> UI
          </h1>
          <p className="text-[#00f2ff] text-xs tracking-[0.5em] font-mono">SYSTEM_READY // V.2.0</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full max-w-5xl z-10 mb-24">

          {/* Button 1: The Glitch */}
          <div className="flex flex-col items-center gap-6 group">
            <button className="btn-glitch" data-text="INITIALIZE">
              INITIALIZE
            </button>
            <span className="text-[10px] text-[#555] font-mono group-hover:text-[#00f2ff] transition-colors">.btn-glitch</span>
          </div>

          {/* Button 2: The Neon Border */}
          <div className="flex flex-col items-center gap-6 group">
            <button className="btn-neon">
              <span>SCANNING</span>
            </button>
            <span className="text-[10px] text-[#555] font-mono group-hover:text-[#ff00ff] transition-colors">.btn-neon</span>
          </div>

          {/* Button 3: The Cyber Press */}
          <div className="flex flex-col items-center gap-6 group">
            <button className="btn-cyber">
              EXECUTE
            </button>
            <span className="text-[10px] text-[#555] font-mono group-hover:text-[#ffe600] transition-colors">.btn-cyber</span>
          </div>

        </div>


        {/* --- SECTION 2: MINT UI --- */}
        <div className="mb-12 text-center z-10">
          <h1 className="text-white text-3xl font-bold tracking-widest mb-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            THINK<span style={{ color: '#64f4ac' }}>MENTS</span>
          </h1>
          <p className="text-gray-400 text-sm">MINT UI SHOWCASE</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-4xl z-10">

          {/* Button 1: The Split-Slide */}
          <div className="flex flex-col items-center gap-4">
            <button className="mint-btn-slide">
              <span>Get Started</span>
            </button>
            <span className="text-xs text-gray-500 font-mono">.mint-btn-slide</span>
          </div>

          {/* Button 2: The Outline Glow */}
          <div className="flex flex-col items-center gap-4">
            <button className="mint-btn-outline">
              Learn More
            </button>
            <span className="text-xs text-gray-500 font-mono">.mint-btn-outline</span>
          </div>

          {/* Button 3: The Solid Tech */}
          <div className="flex flex-col items-center gap-4">
            <button className="mint-btn-solid">
              Join Now
            </button>
            <span className="text-xs text-gray-500 font-mono">.mint-btn-solid</span>
          </div>

        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

          /* =========================================
             CYBERPUNK STYLES
             ========================================= */

          /* --- Style 1: The Glitch --- */
          .btn-glitch {
            font-family: 'Share Tech Mono', monospace;
            font-size: 1.2rem;
            color: #fff;
            background: transparent;
            border: 1px solid #fff;
            padding: 15px 35px;
            position: relative;
            cursor: pointer;
            letter-spacing: 2px;
            min-width: 200px;
            overflow: hidden;
            transition: 0.2s;
          }

          .btn-glitch::before,
          .btn-glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #050505;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: 0.2s;
          }

          .btn-glitch:hover {
            background: #fff;
            color: #000;
            box-shadow: 0 0 15px #fff;
          }

          .btn-glitch:hover::before {
            opacity: 1;
            color: #00f2ff;
            z-index: 1;
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(-2px, 0);
            animation: glitch-anim-1 0.3s infinite linear alternate-reverse;
          }

          .btn-glitch:hover::after {
            opacity: 1;
            color: #ff00ff;
            z-index: 2;
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translate(2px, 0);
            animation: glitch-anim-2 0.3s infinite linear alternate-reverse;
          }

          @keyframes glitch-anim-1 {
            0% { clip-path: inset(20% 0 80% 0); }
            20% { clip-path: inset(60% 0 10% 0); }
            40% { clip-path: inset(40% 0 50% 0); }
            60% { clip-path: inset(80% 0 5% 0); }
            80% { clip-path: inset(10% 0 70% 0); }
            100% { clip-path: inset(30% 0 20% 0); }
          }

          @keyframes glitch-anim-2 {
            0% { clip-path: inset(10% 0 60% 0); }
            20% { clip-path: inset(30% 0 20% 0); }
            40% { clip-path: inset(70% 0 10% 0); }
            60% { clip-path: inset(20% 0 50% 0); }
            80% { clip-path: inset(60% 0 30% 0); }
            100% { clip-path: inset(50% 0 40% 0); }
          }


          /* --- Style 2: The Neon Border --- */
          .btn-neon {
            position: relative;
            padding: 15px 35px;
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            color: #ff00ff;
            background: transparent;
            border: none;
            cursor: pointer;
            letter-spacing: 2px;
            min-width: 200px;
            text-transform: uppercase;
            transition: 0.5s;
            overflow: hidden;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
          }

          .btn-neon:hover {
            background: #ff00ff;
            color: #050505;
            box-shadow: 0 0 5px #ff00ff,
                        0 0 25px #ff00ff,
                        0 0 50px #ff00ff,
                        0 0 200px #ff00ff;
          }

          .btn-neon span {
            position: relative;
            z-index: 1;
          }

          .btn-neon::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 10px;
            height: 10px;
            border-top: 2px solid #ff00ff;
            border-left: 2px solid #ff00ff;
            transition: 0.5s;
            transition-delay: 0.5s;
          }

          .btn-neon:hover::before {
            width: 100%;
            height: 100%;
            transition-delay: 0s;
          }

          .btn-neon::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 10px;
            height: 10px;
            border-bottom: 2px solid #ff00ff;
            border-right: 2px solid #ff00ff;
            transition: 0.5s;
            transition-delay: 0.5s;
          }

          .btn-neon:hover::after {
            width: 100%;
            height: 100%;
            transition-delay: 0s;
          }


          /* --- Style 3: The Cyber Press --- */
          .btn-cyber {
            font-family: 'Orbitron', sans-serif;
            font-weight: 900;
            font-size: 1.1rem;
            color: #050505;
            background: #ffe600;
            border: none;
            padding: 15px 35px;
            cursor: pointer;
            position: relative;
            min-width: 200px;
            clip-path: polygon(
              10px 0, 100% 0,
              100% calc(100% - 10px), calc(100% - 10px) 100%,
              0 100%, 0 10px
            );
            transition: all 0.1s ease;
          }

          .btn-cyber::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent 5%, rgba(255,255,255,0.5) 5%, rgba(255,255,255,0.5) 10%, transparent 10%);
            background-size: 15px 15px;
          }

          .btn-cyber:hover {
            transform: translate(-2px, -2px);
            box-shadow: 4px 4px 0 #00f2ff;
            text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
          }

          .btn-cyber:active {
            transform: translate(1px, 1px);
            box-shadow: 1px 1px 0 #00f2ff;
          }

          .btn-cyber::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 15px;
            width: 20px;
            height: 4px;
            background: #050505;
          }


          /* =========================================
             MINT UI STYLES
             ========================================= */

          :root {
            --tm-mint: #64f4ac;
            --tm-dark: #1a1a1a;
            --tm-white: #ffffff;
          }

          /* Base Mint Button Styles */
          .mint-btn-slide, .mint-btn-outline, .mint-btn-solid {
            font-family: 'Arial Black', 'Impact', sans-serif;
            text-transform: uppercase;
            font-size: 1.1rem;
            padding: 18px 40px;
            cursor: pointer;
            border: none;
            position: relative;
            transition: all 0.3s ease;
            letter-spacing: 2px;
            min-width: 200px;
          }

          .mint-btn-slide::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--tm-mint);
            z-index: -1;
            transform: translateX(-101%);
            transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          }

          .mint-btn-slide:hover {
            color: var(--tm-dark);
            border-color: var(--tm-mint);
          }

          .mint-btn-slide:hover::before {
            transform: translateX(0);
          }

          /* --- Style 2: The Outline Glow --- */
          .mint-btn-outline {
            background: transparent;
            color: var(--tm-mint);
            border: 2px solid var(--tm-mint);
            box-shadow: 0 0 5px rgba(100, 244, 172, 0);
          }

          .mint-btn-outline:hover {
            box-shadow: 0 0 20px rgba(100, 244, 172, 0.6), inset 0 0 10px rgba(100, 244, 172, 0.2);
            text-shadow: 0 0 8px rgba(100, 244, 172, 0.8);
            transform: translateY(-3px);
            background: rgba(100, 244, 172, 0.05);
          }

          /* --- Style 3: The Solid Tech --- */
          .mint-btn-solid {
            background: var(--tm-mint);
            color: var(--tm-dark);
            font-weight: 900;
            /* Angled "Tech" cut on bottom right */
            clip-path: polygon(0 0, 100% 0, 100% 75%, 92% 100%, 0 100%);
          }

          .mint-btn-solid:hover {
            background: var(--tm-white);
            transform: translate(-2px, -2px);
            filter: drop-shadow(4px 4px 0px rgba(255, 255, 255, 0.3));
          }

          .mint-btn-solid:active {
             transform: translate(0, 0);
             filter: drop-shadow(0px 0px 0px rgba(255, 255, 255, 0.3));
          }
        `}</style>
      </div>
    </>
  );
};

export default TestReactCssPage;