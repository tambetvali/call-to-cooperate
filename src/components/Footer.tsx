import React from 'react';
import { Globe, Github, Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Tambet Vali</h3>
                <p className="text-gray-400 text-sm">Unified Theories</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bridging spirituality and science through mathematical foundations. 
              Original theories that can be reached back through collaborative work across generations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Core Platforms</h4>
            <div className="space-y-3">
              <a 
                href="https://spireason.neocities.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                Main Website
              </a>
              <a 
                href="https://github.com/tambetvali/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                GitHub Repositories
              </a>
              <a 
                href="https://www.notion.so/Laegna-1a575bfc115480a38129e9a9787ab565?pvs=4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                AI School (Notion)
              </a>
              <a 
                href="https://huggingface.co/datasets/tvaeli/LaegnaSpi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                AI Dataset
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Start Collaborating</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/tambetvali/LaeArve/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4 mr-2" />
                Join Discussions
              </a>
              <p className="text-gray-400 text-xs leading-relaxed">
                No need to inform when you join - just fork and work, or send a welcome message if you'd like
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the unified theory community</span>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            CC-BY-NC-SA-4.0 License • Open Source • Commercial licensing available
          </p>
        </div>
      </div>
    </footer>
  );
}