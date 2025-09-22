import React, { useState } from 'react';
import { ExternalLink, Globe, Database, FileText, MessageSquare, Search, ChevronDown } from 'lucide-react';

export function WorkShowcase() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const showcaseItems = [
    {
      id: 'main-platforms',
      title: 'Core Platforms',
      icon: Globe,
      items: [
        {
          title: 'Main Website (Spiritual Introduction)',
          description: 'Balanced approach to theories for spiritual seekers',
          url: 'https://spireason.neocities.org/',
          tag: 'Primary'
        },
        {
          title: 'AI School (Scientific Introduction)',
          description: 'Tautological introduction for AI and scientists',
          url: 'https://www.notion.so/Laegna-1a575bfc115480a38129e9a9787ab565?pvs=4',
          tag: 'Education'
        },
        {
          title: 'GitHub Repositories',
          description: 'Specific repos for different purposes and implementations',
          url: 'https://github.com/tambetvali/',
          tag: 'Development'
        },
        {
          title: 'AI Dataset',
          description: 'Comprehensive database of theories and concepts',
          url: 'https://huggingface.co/datasets/tvaeli/LaegnaSpi',
          tag: 'Data'
        }
      ]
    },
    {
      id: 'example-implementations',
      title: 'Example Implementations',
      icon: FileText,
      items: [
        {
          title: 'Logecs Pathways',
          description: 'Interactive exploration of general work and theories',
          url: 'https://logecs-pathways-unfold.lovable.app/logecs',
          tag: 'Interactive'
        },
        {
          title: 'Laegna Visionary Haven',
          description: 'Beautiful presentation of Notion.so content for broader audiences',
          url: 'https://laegna-visionary-haven.lovable.app/',
          tag: 'Portal'
        },
        {
          title: 'SpiBody Path',
          description: 'Implementation of Somatic Spirituality and Material Magic',
          url: 'https://laegna-spibody-path.lovable.app/',
          tag: 'Practice'
        }
      ]
    },
    {
      id: 'ai-tools',
      title: 'AI Tools & Bots',
      icon: MessageSquare,
      items: [
        {
          title: 'Poe.com Bots',
          description: 'AI assistants trained on the theories for interactive exploration',
          url: 'https://poe.com/tambetvali',
          tag: 'Interactive'
        },
        {
          title: 'Perplexity Search & Q&A',
          description: 'AI-powered search engine and question answering system',
          url: 'https://www.perplexity.ai/spaces/new-space-dLTaZz8CSd2FUCjIiYQARA',
          tag: 'Search'
        }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore the Existing Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These platforms and implementations demonstrate the scope and potential of the theories. 
            Use them as inspiration and starting points for your own contributions.
          </p>
        </div>
        
        <div className="space-y-6">
          {showcaseItems.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;
            
            return (
              <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                {isExpanded && (
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {section.items.map((item, index) => (
                        <div key={index} className="group">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </h4>
                              <div className="flex items-center space-x-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                  {item.tag}
                                </span>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}