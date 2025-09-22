import React from 'react';
import { Lightbulb, Users, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-full flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Call to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Cooperate
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Join a collaborative journey into unified theories that bridge spirituality and science. 
          My work provides a mathematical foundation for diverse worldviews, ready for your unique contribution.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Open Source Community</span>
          </div>
          <div className="text-gray-400">•</div>
          <div className="flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-medium">CC-BY-NC-SA-4.0 License</span>
          </div>
        </div>
      </div>
    </section>
  );
}