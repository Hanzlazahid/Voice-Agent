"use client";

import React, { useEffect, useRef } from 'react';

const FeatureCard = ({ icon, title, description, iconColor }) => {
  return (
    <div className="bg-gray-950 rounded-lg p-6 h-full min-h-[250px] min-w-[350px] w-full flex flex-col justify-between hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 border border-white/20">
      <div>
        <div className={`inline-flex items-center justify-center w-8 h-8 rounded ${iconColor} mb-4`}>
          {icon}
        </div>
        <h2 className="text-white font-semibold text-lg mb-3">{title}</h2>
        <p className="text-gray-300 text-md leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const nodes = [];
    const nodeCount = 12;
    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          radius: Math.random() * 6 + 4,
          opacity: Math.random() * 0.8 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initNodes();

    let time = 0;

    const animate = () => {
      time += 0.016;
      // Remove the background fill to make it transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between ALL nodes
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Connect all nodes but make distant connections more transparent
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            
            // Calculate opacity based on distance - closer nodes have stronger connections
            const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
            const baseOpacity = Math.max(0.02, (1 - distance / maxDistance) * 0.3);
            const pulseOpacity = Math.sin(time * 2 + distance * 0.01) * 0.1;
            const finalOpacity = Math.max(0.01, baseOpacity + pulseOpacity);
            
            const colorMix = (Math.sin(node.x * 0.01 + time) + 1) * 0.5;
            const r = Math.floor(168 + (236 - 168) * colorMix);
            const g = Math.floor(85 + (72 - 85) * colorMix);
            const b = Math.floor(247 + (153 - 247) * colorMix);
            
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
            ctx.lineWidth = distance < 180 ? 2 : 1; // Thicker lines for closer connections
            ctx.stroke();
          }
        });
      });

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges with some margin
        if (node.x <= 5 || node.x >= canvas.width - 5) {
          node.vx *= -1;
          node.x = Math.max(5, Math.min(canvas.width - 5, node.x));
        }
        if (node.y <= 5 || node.y >= canvas.height - 5) {
          node.vy *= -1;
          node.y = Math.max(5, Math.min(canvas.height - 5, node.y));
        }

        // Update pulse phase
        node.pulsePhase += node.pulseSpeed;
        const pulseFactor = Math.sin(node.pulsePhase) * 0.3 + 0.7;

        // Draw node with pulsing effect
        ctx.beginPath();
        const currentRadius = node.radius * pulseFactor;
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        
        // Create radial gradient for each node
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, currentRadius * 2
        );
        
        // Dynamic node color
        const colorPhase = node.x * 0.005 + node.y * 0.005 + time * 0.5;
        const colorMix = (Math.sin(colorPhase) + 1) * 0.5;
        const r = Math.floor(168 + (236 - 168) * colorMix);
        const g = Math.floor(85 + (72 - 85) * colorMix);
        const b = Math.floor(247 + (153 - 247) * colorMix);
        
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${node.opacity * pulseFactor})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add a bright center
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity * 0.8 * pulseFactor})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay to ensure canvas is properly sized
    setTimeout(() => {
      resizeCanvas();
      initNodes();
      animate();
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

// Main Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: "🏠",
      title: "Data In-House",
      description: "We store and manage your information in-house, reducing external risks and maintaining full control over your data.",
      iconColor: "bg-yellow-500"
    },
    {
      icon: "🔒",
      title: "SOC2 Type II Compliant",
      description: "We follow strict security protocols and regularly monitor our systems to ensure your data remains protected.",
      iconColor: "bg-pink-500"
    },
    {
      icon: "🛡️",
      title: "GDPR Compliant",
      description: "We follow EU privacy standards, guaranteeing transparency and secure handling of personal information.",
      iconColor: "bg-purple-500"
    },
    {
      icon: "🏥",
      title: "HIPAA Compliant",
      description: "Prioritize the security and privacy of sensitive customer data, ensuring full protection throughout your experience.",
      iconColor: "bg-orange-500"
    },
    {
      icon: "🔍",
      title: "Regular Pen Tests",
      description: "We simulate cyberattacks to identify weaknesses, ensuring your systems stay secure against emerging threats.",
      iconColor: "bg-purple-500"
    },
    {
      icon: "⚡",
      title: "Constant Unit Tests",
      description: "We ensure continuous security by identifying and addressing vulnerabilities in real time.",
      iconColor: "bg-orange-500"
    },
    {
      icon: "👨‍💼",
      title: "Expert Implementation",
      description: "We ensure your security measures are seamlessly integrated, protecting your systems from day one.",
      iconColor: "bg-yellow-500"
    },
    {
      icon: "🔐",
      title: "Robust Guardrails",
      description: "Ensure your data and operations are secure, with built-in protections against risks and vulnerabilities.",
      iconColor: "bg-pink-500"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Neural Network Animation */}
      <NeuralNetworkBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-white/80 mb-2 tracking-wide uppercase">
            Voice Agent Security
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Own your customer experience end-to-end.
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Bland provides end-to-end infrastructure so your customer experience is never reliant on big 
            model providers. That means faster response times, 99.99% uptime and fewer dependencies on 
            external factors. All while driving your marginal call costs to zero.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;