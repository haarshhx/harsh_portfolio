"use client";

import React, { useState, useRef, useEffect } from 'react';

export const HoverMouseSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isHovered) {
      setTimeout(() => setShowContent(true), 100);
    } else {
      setShowContent(false);
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  return (
    <section id="experience" className="py-20">
      

      <div className="min-h-[600px] flex items-center justify-center p-8 overflow-hidden mt-12">
        <div
          className="relative w-full max-w-5xl h-[500px] bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border-2 border-gray-700/50 rounded-3xl flex items-center justify-center cursor-pointer overflow-visible transition-all duration-500 hover:border-purple-500/70 hover:shadow-2xl hover:shadow-purple-500/20"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Main Text */}
          <h2 className="text-7xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text select-none z-10 relative transition-all duration-300 hover:scale-105">
            Hover Mouse Here
          </h2>

          {/* Water Glass Effect Card - Centered and Stable */}
          {showContent && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
              <div 
                className="relative"
                style={{
                  animation: 'fadeInScale 0.4s ease-out'
                }}
              >
                {/* Outer glow */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-40 blur-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.4))',
                    animation: 'pulseGlow 3s ease-in-out infinite'
                  }}
                ></div>
                
                {/* Water Glass Card */}
                <div 
                  className="relative rounded-3xl shadow-2xl overflow-hidden w-[400px]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: `
                      0 8px 32px 0 rgba(0, 0, 0, 0.37),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.1)
                    `,
                  }}
                >
                  {/* Water ripple effect overlay */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.15) 100%)',
                      animation: 'waterFlow 4s ease-in-out infinite'
                    }}
                  ></div>

                  {/* Shimmer effect */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s ease-in-out infinite'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative p-6 space-y-4">
                    {/* Profile Photo */}
                    <div className="flex justify-center">
                      <div className="relative">
                        {/* Photo outer glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"></div>
                        
                        {/* Photo with glass border */}
                        <div 
                          className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            padding: '3px',
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                            <img
                              src="/WhatsApp%20Image%202025-10-05%20at%2015.44.57_73adc018.png"
                              alt="Harsh Sharma"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "https://ui-avatars.com/api/?name=Harsh+Sharma&size=128&background=8b5cf6&color=fff";
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* Water droplet sparkle */}
                        <div 
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full"
                          style={{
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(147, 51, 234, 0.4) 100%)',
                            animation: 'droplet 2s ease-in-out infinite',
                            boxShadow: '0 0 20px rgba(255, 255, 255, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Name with water glass text effect */}
                    <h3 
                      className="text-2xl font-bold text-center"
                      style={{
                        background: 'linear-gradient(135deg, #93c5fd 0%, #c084fc 50%, #f9a8d4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))',
                      }}
                    >
                      Harsh Sharma
                    </h3>

                    {/* Divider with water effect */}
                    <div 
                      className="h-px w-full relative"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      }}
                    >
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.3), transparent)',
                          animation: 'flowLine 3s ease-in-out infinite'
                        }}
                      ></div>
                    </div>

                    {/* Bio Text */}
                    <div className="text-gray-200 text-sm leading-relaxed text-center space-y-2">
                      <p 
                        className="font-medium"
                        style={{
                          color: 'rgba(196, 181, 253, 0.9)',
                          textShadow: '0 0 10px rgba(147, 51, 234, 0.3)'
                        }}
                      >
                        Hey, I'm Harsh Sharma
                      </p>
                      <p style={{ color: 'rgba(229, 231, 235, 0.85)' }}>
                        A passionate tech enthusiast who loves turning ideas into functional and visually appealing web experiences.
                      </p>
                      <p style={{ color: 'rgba(209, 213, 219, 0.8)' }}>
                        I enjoy learning new technologies, solving real-world problems with clean code, and continuously improving my craft one project at a time.
                      </p>
                    </div>

                    {/* Bottom water wave line */}
                    <div 
                      className="h-1 w-full rounded-full relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.4))',
                      }}
                    >
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                          animation: 'wave 2s ease-in-out infinite'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Glass reflection */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
                    }}
                  ></div>

                  {/* Bottom glass shadow */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none"
                    style={{
                      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)',
                    }}
                  ></div>
                </div>

                {/* Water droplet effects on corners */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: '8px',
                      height: '8px',
                      top: i < 2 ? '-4px' : 'auto',
                      bottom: i >= 2 ? '-4px' : 'auto',
                      left: i % 2 === 0 ? '-4px' : 'auto',
                      right: i % 2 === 1 ? '-4px' : 'auto',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(147, 51, 234, 0.3) 100%)',
                      animation: `droplet ${2 + i * 0.3}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.6)'
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-pink-500/50 rounded-br-2xl"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          0% { 
            transform: scale(0.8); 
            opacity: 0; 
          }
          100% { 
            transform: scale(1); 
            opacity: 1; 
          }
        }

        @keyframes droplet {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(0.9); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1); 
          }
        }

        @keyframes pulseGlow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.4; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.6; 
          }
        }

        @keyframes waterFlow {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.5;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes flowLine {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};