import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import ParticleSystem from './animations/ParticleSystem';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPartnerClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onPartnerClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://player.vimeo.com/external/373787103.hd.mp4?s=48b39f125e811e06a7b25f2af41936ed8fbd9096&profile_id=175&oauth2_token_id=57447761"
          poster="https://images.pexels.com/photos/68494/pexels-photo-68494.jpeg"
        >
          <source
            src="https://player.vimeo.com/external/373787103.hd.mp4?s=48b39f125e811e06a7b25f2af41936ed8fbd9096&profile_id=175&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Particle overlay */}
      <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
        <ParticleSystem type="mixed" density={30} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Turning Waste Into Fuel.<br />
            <span className="text-green-400">Powering Nations.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            At Agri-BioFuels Global Ltd, we transform agricultural waste into sustainable aviation and maritime fuel, creating environmental and economic value across the supply chain.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={onExploreClick}
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Explore Our Technology
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onPartnerClick}
              className="border-white text-white hover:bg-white/10"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce">
        <div className="text-sm font-medium mb-2">Scroll to explore</div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;