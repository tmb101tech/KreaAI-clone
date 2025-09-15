"use client"

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// ✅ Define a union type for button variants
type ButtonVariant = "default" | "outline";

const slides: {
  left: {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    buttonText: string;
    buttonVariant: ButtonVariant;
    image: string;
    gradient: string;
  };
  right: {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    buttonText: string;
    buttonVariant: ButtonVariant;
    image: string;
    gradient: string;
  };
}[] = [
  {
    left: {
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Generate complex images with the latest fast and powerful WAN 2.2 model. Experience advanced power generation and ultra-realistic results.",
      badge: "FEATURED MODEL",
      buttonText: "Try WAN 2.2",
      buttonVariant: "default",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    },
    right: {
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description: "Get a visual to use designed to use FLUX.1 Krea model locally. Deploy, train, modify a model and learn the technical aspect of AI generation.",
      badge: "OS MODEL",
      buttonText: "Learn More",
      buttonVariant: "outline",
      image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    }
  },
  {
    left: {
      title: "AI Studio",
      subtitle: "Creative AI Tools",
      description: "Access professional-grade AI tools for creative workflows. Generate, edit, and enhance content with state-of-the-art models.",
      badge: "PRO TOOLS",
      buttonText: "Get Started",
      buttonVariant: "default",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    },
    right: {
      title: "Real-time AI",
      subtitle: "Live Generation",
      description: "Experience real-time AI generation with instant results. Perfect for interactive applications and live demonstrations.",
      badge: "REAL-TIME",
      buttonText: "Try Live",
      buttonVariant: "default",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    }
  },
  {
    left: {
      title: "Video AI",
      subtitle: "Next-Gen Video",
      description: "Create stunning videos with AI-powered generation. From concept to completion in minutes with professional quality.",
      badge: "VIDEO AI",
      buttonText: "Create Video",
      buttonVariant: "default",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    },
    right: {
      title: "3D Models",
      subtitle: "3D Generation",
      description: "Generate stunning 3D models and scenes with advanced AI. Perfect for game development, architecture, and design workflows.",
      badge: "3D AI",
      buttonText: "Try 3D",
      buttonVariant: "outline",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    }
  },
  {
    left: {
      title: "Text AI",
      subtitle: "Advanced Writing",
      description: "Generate high-quality text content with advanced AI models. Perfect for content creation and copywriting.",
      badge: "TEXT AI",
      buttonText: "Try Writing",
      buttonVariant: "default",
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    },
    right: {
      title: "Audio AI",
      subtitle: "Sound Generation",
      description: "Create music, sound effects, and voice synthesis with cutting-edge audio AI technology.",
      badge: "AUDIO AI",
      buttonText: "Try Audio",
      buttonVariant: "outline",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    }
  },
  {
    left: {
      title: "Code AI",
      subtitle: "Smart Coding",
      description: "Generate, debug, and optimize code with AI assistance. Boost your development productivity.",
      badge: "CODE AI",
      buttonText: "Try Coding",
      buttonVariant: "default",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    },
    right: {
      title: "Data AI",
      subtitle: "Analytics & Insights",
      description: "Analyze data and generate insights with powerful AI-driven analytics tools and visualizations.",
      badge: "DATA AI",
      buttonText: "Analyze Data",
      buttonVariant: "outline",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-black/70 via-black/50 to-transparent"
    }
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative">
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-8 w-8 p-0 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-8 w-8 p-0 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-80">
          {/* Left Card */}
          <div className="flex-1 relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out h-64 sm:h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url('${currentSlideData.left.image}')`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.left.gradient}`}></div>
            </div>
            
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30 text-xs">
                  {currentSlideData.left.badge}
                </Badge>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{currentSlideData.left.title}</h2>
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-white mb-2">{currentSlideData.left.subtitle}</h3>
                  <p className="text-white/90 text-sm max-w-xs leading-relaxed">
                    {currentSlideData.left.description}
                  </p>
                </div>
                <Button 
                  className={currentSlideData.left.buttonVariant === 'outline' 
                    ? "border-white/40 text-white hover:bg-white/10 text-sm px-4 py-2" 
                    : "bg-white text-black hover:bg-white/90 text-sm px-4 py-2"
                  }
                  variant={currentSlideData.left.buttonVariant}
                >
                  {currentSlideData.left.buttonText}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-1 relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out h-64 sm:h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url('${currentSlideData.right.image}')`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-l ${currentSlideData.right.gradient}`}></div>
            </div>
            
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <Badge variant="secondary" className="mb-3 bg-blue-500/30 text-white border-blue-400/50 text-xs">
                  {currentSlideData.right.badge}
                </Badge>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{currentSlideData.right.title}</h2>
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-white mb-2">{currentSlideData.right.subtitle}</h3>
                  <p className="text-white/90 text-sm max-w-xs leading-relaxed">
                    {currentSlideData.right.description}
                  </p>
                </div>
                <Button 
                  variant={currentSlideData.right.buttonVariant}
                  className={currentSlideData.right.buttonVariant === 'outline' 
                    ? "border-white/40 text-white hover:bg-white/10 text-sm px-4 py-2" 
                    : "bg-white text-black hover:bg-white/90 text-sm px-4 py-2"
                  }
                >
                  {currentSlideData.right.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-blue-500' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
