import React, { useState } from 'react';
import { Shield, Users, Coins, ExternalLink, ChevronDown, Check } from 'lucide-react';

export function LicenseSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const licenseFeatures = [
    {
      icon: Users,
      title: 'Open Source Freedom',
      description: 'Use freely for open source, educational, and scientific purposes'
    },
    {
      icon: Shield,
      title: 'Attribution Required',
      description: 'Credit the original work when using or building upon it'
    },
    {
      icon: Coins,
      title: 'Commercial Licensing',
      description: 'Purchase commercial rights for business use while respecting the community'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            CC-BY-NC-SA-4.0 License
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Similar to GPL but applied to more fields than code - fostering open collaboration while protecting commercial interests
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {licenseFeatures.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gray-50 rounded-xl overflow-hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-gray-600 mr-3" />
              <span className="font-semibold text-gray-900">Full License Details</span>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          {isExpanded && (
            <div className="px-6 pb-6 border-t border-gray-200">
              <div className="mt-6 space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Open Source & Educational Use</h4>
                      <p className="text-sm text-gray-600">
                        You can freely use, modify, and distribute the work for open source projects, educational purposes, and scientific research.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Share-Alike Requirement</h4>
                      <p className="text-sm text-gray-600">
                        Derivative works must be shared under the same license, ensuring the community benefits from improvements.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-start">
                    <Coins className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Commercial Use</h4>
                      <p className="text-sm text-gray-600">
                        Commercial applications require purchasing rights from the author, but cannot disrupt the open source community in any way.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Key Principle:</strong> The original theory can be reached back through this work, 
                    even if it takes generations. The agile process brings the completion point closer as others 
                    contribute parallel development paths.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Read Full CC-BY-NC-SA-4.0 License
          </a>
        </div>
      </div>
    </section>
  );
}