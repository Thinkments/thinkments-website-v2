import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Home, Mail, Phone, Play, Pause, RotateCcw } from 'lucide-react';
import SEO from '../SEO';

export default function NotFoundPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'paused' | 'ended'>('idle');
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [winner, setWinner] = useState<'player' | 'ai' | null>(null);
  const animationFrameRef = useRef<number>();
  const gameRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game dimensions
    const canvasWidth = 600;
    const canvasHeight = 400;

    // Set canvas size
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Game objects
    const game = {
      paddleWidth: 10,
      paddleHeight: 80,
      ballSize: 8,
      
      player: {
        x: 20,
        y: canvasHeight / 2 - 40,
        dy: 0,
        speed: 6
      },
      
      ai: {
        x: canvasWidth - 30,
        y: canvasHeight / 2 - 40,
        dy: 0,
        speed: 4
      },
      
      ball: {
        x: canvasWidth / 2,
        y: canvasHeight / 2,
        dx: 4,
        dy: 4,
        baseSpeed: 4,
        maxSpeed: 10
      },

      keys: {
        up: false,
        down: false
      }
    };

    gameRef.current = game;

    // Input handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') game.keys.up = true;
      if (e.key === 'ArrowDown') game.keys.down = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') game.keys.up = false;
      if (e.key === 'ArrowDown') game.keys.down = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (gameState !== 'playing') return;
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      game.player.y = mouseY - game.paddleHeight / 2;
      
      // Keep paddle in bounds
      if (game.player.y < 0) game.player.y = 0;
      if (game.player.y > canvasHeight - game.paddleHeight) {
        game.player.y = canvasHeight - game.paddleHeight;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (gameState !== 'playing') return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const touchY = touch.clientY - rect.top;
      game.player.y = touchY - game.paddleHeight / 2;
      
      // Keep paddle in bounds
      if (game.player.y < 0) game.player.y = 0;
      if (game.player.y > canvasHeight - game.paddleHeight) {
        game.player.y = canvasHeight - game.paddleHeight;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Draw functions
    const drawRect = (x: number, y: number, w: number, h: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
    };

    const drawCircle = (x: number, y: number, r: number, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvasWidth; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvasHeight; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
      }
      
      // Center line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 10]);
      ctx.beginPath();
      ctx.moveTo(canvasWidth / 2, 0);
      ctx.lineTo(canvasWidth / 2, canvasHeight);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // Update game logic
    const update = () => {
      if (gameState !== 'playing') return;

      // Update player paddle with arrow keys
      if (game.keys.up) {
        game.player.y -= game.player.speed;
      }
      if (game.keys.down) {
        game.player.y += game.player.speed;
      }

      // Keep player paddle in bounds
      if (game.player.y < 0) game.player.y = 0;
      if (game.player.y > canvasHeight - game.paddleHeight) {
        game.player.y = canvasHeight - game.paddleHeight;
      }

      // AI logic - follow ball with some delay
      const aiCenter = game.ai.y + game.paddleHeight / 2;
      if (aiCenter < game.ball.y - 20) {
        game.ai.y += game.ai.speed;
      } else if (aiCenter > game.ball.y + 20) {
        game.ai.y -= game.ai.speed;
      }

      // Keep AI paddle in bounds
      if (game.ai.y < 0) game.ai.y = 0;
      if (game.ai.y > canvasHeight - game.paddleHeight) {
        game.ai.y = canvasHeight - game.paddleHeight;
      }

      // Update ball position
      game.ball.x += game.ball.dx;
      game.ball.y += game.ball.dy;

      // Ball collision with top/bottom walls
      if (game.ball.y - game.ballSize < 0 || game.ball.y + game.ballSize > canvasHeight) {
        game.ball.dy *= -1;
      }

      // Ball collision with player paddle
      if (
        game.ball.x - game.ballSize < game.player.x + game.paddleWidth &&
        game.ball.x + game.ballSize > game.player.x &&
        game.ball.y > game.player.y &&
        game.ball.y < game.player.y + game.paddleHeight
      ) {
        // Calculate hit position for angle
        const hitPos = (game.ball.y - (game.player.y + game.paddleHeight / 2)) / (game.paddleHeight / 2);
        game.ball.dx = Math.abs(game.ball.dx);
        game.ball.dy = hitPos * 5;
        
        // Speed up slightly
        const speed = Math.sqrt(game.ball.dx * game.ball.dx + game.ball.dy * game.ball.dy);
        if (speed < game.ball.maxSpeed) {
          game.ball.dx *= 1.05;
          game.ball.dy *= 1.05;
        }
      }

      // Ball collision with AI paddle
      if (
        game.ball.x + game.ballSize > game.ai.x &&
        game.ball.x - game.ballSize < game.ai.x + game.paddleWidth &&
        game.ball.y > game.ai.y &&
        game.ball.y < game.ai.y + game.paddleHeight
      ) {
        // Calculate hit position for angle
        const hitPos = (game.ball.y - (game.ai.y + game.paddleHeight / 2)) / (game.paddleHeight / 2);
        game.ball.dx = -Math.abs(game.ball.dx);
        game.ball.dy = hitPos * 5;
        
        // Speed up slightly
        const speed = Math.sqrt(game.ball.dx * game.ball.dx + game.ball.dy * game.ball.dy);
        if (speed < game.ball.maxSpeed) {
          game.ball.dx *= 1.05;
          game.ball.dy *= 1.05;
        }
      }

      // Score points
      if (game.ball.x < 0) {
        // AI scores
        setAiScore(prev => {
          const newScore = prev + 1;
          if (newScore >= 5) {
            setGameState('ended');
            setWinner('ai');
          }
          return newScore;
        });
        resetBall();
      } else if (game.ball.x > canvasWidth) {
        // Player scores
        setPlayerScore(prev => {
          const newScore = prev + 1;
          if (newScore >= 5) {
            setGameState('ended');
            setWinner('player');
          }
          return newScore;
        });
        resetBall();
      }
    };

    const resetBall = () => {
      game.ball.x = canvasWidth / 2;
      game.ball.y = canvasHeight / 2;
      game.ball.dx = game.ball.baseSpeed * (Math.random() > 0.5 ? 1 : -1);
      game.ball.dy = game.ball.baseSpeed * (Math.random() * 2 - 1);
    };

    // Render game
    const render = () => {
      // Clear canvas
      drawRect(0, 0, canvasWidth, canvasHeight, '#1E3A5F');
      
      // Draw grid
      drawGrid();

      // Draw paddles
      drawRect(game.player.x, game.player.y, game.paddleWidth, game.paddleHeight, '#FFFFFF');
      drawRect(game.ai.x, game.ai.y, game.paddleWidth, game.paddleHeight, '#FFFFFF');

      // Draw ball
      drawCircle(game.ball.x, game.ball.y, game.ballSize, '#00B4D8');

      // Draw game state text
      if (gameState === 'idle') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = 'bold 24px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Click "Start Game" to Play!', canvasWidth / 2, canvasHeight / 2);
      } else if (gameState === 'paused') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = 'bold 32px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSED', canvasWidth / 2, canvasHeight / 2);
      }
    };

    // Game loop
    const gameLoop = () => {
      update();
      render();
      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setPlayerScore(0);
    setAiScore(0);
    setWinner(null);
  };

  const togglePause = () => {
    setGameState(prev => prev === 'playing' ? 'paused' : 'playing');
  };

  const playAgain = () => {
    if (gameRef.current) {
      gameRef.current.ball.x = 300;
      gameRef.current.ball.y = 200;
      gameRef.current.ball.dx = 4;
      gameRef.current.ball.dy = 4;
    }
    startGame();
  };

  return (
    <>
      <SEO
        title="404 - Page Not Found | ThinkMents Digital Marketing"
        description="Oops! This page doesn't exist, but you can play some Pong while you're here!"
        url="/404"
        type="website"
        noindex={true}
      />

      <div className="min-h-screen bg-[#F8F9FA] py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-8xl md:text-9xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Page Not Found... But Here&apos;s a Game!
            </h2>
            <p className="text-lg text-gray-600">
              While you&apos;re here, why not play some Pong? Use your mouse or arrow keys to play.
            </p>
          </motion.div>

          {/* Game Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 md:p-8 shadow-xl">
              {/* Score Display */}
              <div className="flex items-center justify-center mb-6 space-x-8">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">You</p>
                  <p className="text-4xl font-bold text-[#00B4D8]">{playerScore}</p>
                </div>
                <div className="text-2xl font-bold text-gray-400">|</div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Computer</p>
                  <p className="text-4xl font-bold text-[#FF6B35]">{aiScore}</p>
                </div>
              </div>

              {/* Game Canvas */}
              <div className="relative flex justify-center mb-6">
                <div className="rounded-lg overflow-hidden shadow-lg border-4 border-[#1E3A5F]">
                  <canvas
                    ref={canvasRef}
                    width={600}
                    height={400}
                    className="block max-w-full h-auto"
                    style={{ background: '#1E3A5F', display: 'block' }}
                  />
                </div>

                {/* Winner Overlay */}
                {gameState === 'ended' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg"
                  >
                    <div className="text-center bg-white rounded-xl p-8 shadow-2xl">
                      <h3 className="text-3xl font-bold mb-4">
                        {winner === 'player' ? (
                          <span className="text-[#00B4D8]">You Win! 🎉</span>
                        ) : (
                          <span className="text-[#FF6B35]">Game Over</span>
                        )}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {winner === 'player' 
                          ? 'Great job! You beat the computer!' 
                          : 'The computer won this time. Try again?'}
                      </p>
                      <Button
                        onClick={playAgain}
                        className="bg-[#00B4D8] hover:bg-[#0096b8]"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Play Again
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Game Controls */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3">
                  {gameState === 'idle' && (
                    <Button
                      onClick={startGame}
                      className="bg-[#00B4D8] hover:bg-[#0096b8]"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Game
                    </Button>
                  )}
                  
                  {(gameState === 'playing' || gameState === 'paused') && (
                    <>
                      <Button
                        onClick={togglePause}
                        variant="outline"
                        className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
                      >
                        {gameState === 'playing' ? (
                          <>
                            <Pause className="w-4 h-4 mr-2" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Resume
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={playAgain}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Restart
                      </Button>
                    </>
                  )}
                </div>

                <p className="text-sm text-gray-600 text-center">
                  Move your paddle with mouse or ↑↓ arrow keys
                  <br />
                  <span className="text-xs">On mobile: Touch and drag to control your paddle</span>
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Navigation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6">
              Or get back to business...
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button
                asChild
                className="bg-[#00B4D8] hover:bg-[#0096b8] min-w-[160px]"
              >
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white min-w-[160px]"
              >
                <Link to="/get-a-quote">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#00B4D8] hover:underline transition-colors">
                Home
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/services" className="hover:text-[#00B4D8] hover:underline transition-colors">
                Services
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/about" className="hover:text-[#00B4D8] hover:underline transition-colors">
                About
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/blog" className="hover:text-[#00B4D8] hover:underline transition-colors">
                Blog
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/get-a-quote" className="hover:text-[#00B4D8] hover:underline transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
              <a
                href="tel:9403151023"
                className="flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] transition-colors text-lg"
              >
                <Phone className="w-4 h-4" />
                <span>(940) 315-1023</span>
              </a>
              <span className="hidden md:block text-gray-300">|</span>
              <a 
                href="mailto:info@thinkments.com" 
                className="flex items-center space-x-2 text-gray-600 hover:text-[#00B4D8] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@thinkments.com</span>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ThinkMents Digital Marketing. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}