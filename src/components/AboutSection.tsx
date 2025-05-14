import React from 'react';
import { Users, BarChart3, Droplets, Leaf } from 'lucide-react';
import AnimatedCounter from './animations/AnimatedCounter';

const AboutSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Jobs Created",
      value: 15000,
      suffix: "+",
      description: "Direct and indirect employment across the supply chain"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "GDP Contribution",
      value: 0.5,
      suffix: "%",
      prefix: "+",
      description: "Estimated contribution to regional GDP in partner countries"
    },
    {
      icon: <Droplets className="h-8 w-8 text-amber-600" />,
      title: "SAF Produced",
      value: 250,
      suffix: "M Liters",
      description: "Annual production capacity at full scale operations"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-700" />,
      title: "CO₂ Reduced",
      value: 1.8,
      suffix: "M Tonnes",
      description: "Annual carbon emission reduction through our technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Agri-BioFuels Global</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the renewable energy sector by creating sustainable aviation and maritime fuels from agricultural waste.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At Agri-BioFuels Global Ltd, we're committed to transforming agricultural waste into high-value sustainable fuels, creating environmental and economic benefits throughout the value chain.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              We envision a world where agricultural residues that were once discarded or burned now power the global transportation network, reducing carbon emissions while providing economic opportunities to farming communities.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Where We Work</h3>
            <p className="text-gray-600">
              Headquartered in London, our operations focus on emerging economies with significant agricultural output. We partner with local communities to build sustainable supply chains and production facilities that benefit all stakeholders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Image Carousel would go here - simplified for this implementation */}
            <div className="rounded-lg overflow-hidden h-64 relative group">
              <img 
                src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg" 
                alt="Farmer in rice field" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Farmer Integration Program</span>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64 relative group">
              <img 
                src="https://images.pexels.com/photos/175930/pexels-photo-175930.jpeg" 
                alt="Biofuel production facility" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">CAT-HTR Production Facility</span>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64 relative group">
              <img 
                src="https://images.pexels.com/photos/127723/pexels-photo-127723.jpeg" 
                alt="Airplane using sustainable aviation fuel" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Sustainable Aviation Fuel</span>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64 relative group">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg" 
                alt="Community development" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Community Development</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{stat.title}</h3>
              <div className="text-3xl font-bold text-center text-gray-900 mb-3">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  duration={2000}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className="text-sm text-gray-600 text-center">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;