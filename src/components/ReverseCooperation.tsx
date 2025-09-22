import React, { useState } from 'react';
import { ArrowLeftRight, Microscope, Heart, Calculator, Eye, ChevronDown, ExternalLink } from 'lucide-react';

export function ReverseCooperation() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const reverseCooperationTypes = [
    {
      id: 'support-science',
      icon: Microscope,
      title: 'Support Your Science',
      subtitle: 'Strengthen your scientific theories with axiomatic foundations',
      description: 'Use my unified theories as a mathematical and philosophical foundation to make your scientific work more rigorous and convincing.',
      examples: [
        {
          field: 'Physics & Cosmology',
          application: 'Apply axioms of infinities to support theories about universe structure and quantum mechanics'
        },
        {
          field: 'Mathematics',
          application: 'Use tautological frameworks to create more elegant proofs and theoretical foundations'
        },
        {
          field: 'Psychology & Neuroscience',
          application: 'Connect consciousness theories with mathematical models of awareness and perception'
        },
        {
          field: 'Biology & Evolution',
          application: 'Apply frequency theories to understand biological rhythms and evolutionary patterns'
        }
      ],
      benefits: [
        'Mathematical rigor for philosophical concepts',
        'Tautological proofs for complex theories',
        'Axiomatic base for interdisciplinary work',
        'Framework for scientific-spiritual integration'
      ]
    },
    {
      id: 'support-spiritual',
      icon: Heart,
      title: 'Support Your Spiritual Work',
      subtitle: 'Ground your spiritual or religious theories in mathematical frameworks',
      description: 'Whether you\'re a Star Seed, Buddhist practitioner, or follow any spiritual path, my theories provide philosophical grounding while maintaining agnostic flexibility.',
      examples: [
        {
          field: 'Buddhist Practice',
          application: 'Connect frequency theories with meditation practices and visualization techniques'
        },
        {
          field: 'Star Seed & Cosmic Spirituality',
          application: 'Use philosophical frameworks about natural sources without requiring physical certainty'
        },
        {
          field: 'Religious Studies',
          application: 'Apply God theories that allow both religious and scientific perspectives simultaneously'
        },
        {
          field: 'Ethical Systems',
          application: 'Use infinity axioms to create more robust ethical mathematical systems'
        }
      ],
      benefits: [
        'Scientific credibility for spiritual insights',
        'Mathematical foundation for mystical experiences',
        'Agnostic framework that respects all beliefs',
        'Bridge between ancient wisdom and modern science'
      ]
    }
  ];

  const mutualCooperationAreas = [
    {
      icon: Calculator,
      title: 'Tautological Proofs',
      description: 'Create simulations and formulations that provide self-evident mathematical proofs'
    },
    {
      icon: Eye,
      title: 'Theorem Applications',
      description: 'Apply my theorems to your field while contributing back to the theoretical foundation'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <ArrowLeftRight className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Reverse Cooperation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Use my axiomatic base and unified theories to strengthen your own scientific, spiritual, or religious work. 
            This creates mutual cooperation where both our works grow together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reverseCooperationTypes.map((type) => {
            const Icon = type.icon;
            const isExpanded = expandedCard === type.id;
            
            return (
              <div key={type.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                      <p className="text-sm text-gray-600">{type.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : type.id)}
                    className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-700">View Examples & Benefits</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Application Examples:</h4>
                        <div className="space-y-3">
                          {type.examples.map((example, index) => (
                            <div key={index} className="p-4 bg-purple-50 rounded-lg">
                              <h5 className="font-medium text-purple-900 mb-1">{example.field}</h5>
                              <p className="text-sm text-purple-700">{example.application}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Mutual Cooperation Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mutualCooperationAreas.map((area, index) => {
              const Icon = area.icon;
              
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100">
            <h4 className="font-semibold text-gray-900 mb-3">The Agile Process</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              My theory meets this criteria: the original theory I have in mind can be reached back through this work, 
              even if it takes generations. Through agile development, I bring the completion point closer while others 
              work in parallel, approaching the same unified understanding from their unique perspectives.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/tambetvali/LaeArve/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeftRight className="w-5 h-5 mr-3" />
            Start Reverse Cooperation
          </a>
          <p className="mt-3 text-sm text-gray-600">
            Begin using my theories to support your work, or contribute to the theoretical foundation
          </p>
        </div>
      </div>
    </section>
  );
}