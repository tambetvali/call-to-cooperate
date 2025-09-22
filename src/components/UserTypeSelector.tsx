import React from 'react';
import { UserType } from '../App';
import { Search, Code, Palette, Coffee, Heart, Users } from 'lucide-react';

interface UserTypeSelectorProps {
  selectedType: UserType;
  onTypeSelect: (type: UserType) => void;
}

const userTypes = [
  {
    id: 'researcher' as UserType,
    icon: Search,
    title: 'Researcher',
    description: 'Academic, scientist, or scholar',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'developer' as UserType,
    icon: Code,
    title: 'Developer',
    description: 'Programmer, engineer, or architect',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'creative' as UserType,
    icon: Palette,
    title: 'Creative',
    description: 'Artist, designer, or content creator',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'lazy' as UserType,
    icon: Coffee,
    title: 'Lazy',
    description: 'Looking for easy wins and quick insights',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'interested' as UserType,
    icon: Heart,
    title: 'Interested',
    description: 'Curious about the theories and ideas',
    color: 'from-rose-500 to-red-600'
  },
  {
    id: 'any' as UserType,
    icon: Users,
    title: 'Any of Them',
    description: 'Show me everything',
    color: 'from-gray-500 to-slate-600'
  }
];

export function UserTypeSelector({ selectedType, onTypeSelect }: UserTypeSelectorProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What describes you best?
          </h2>
          <p className="text-lg text-gray-600">
            Choose your path to discover the most relevant cooperation opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {userTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;
            
            return (
              <button
                key={type.id}
                onClick={() => onTypeSelect(type.id)}
                className={`
                  relative p-6 rounded-xl border-2 transition-all duration-300 text-center group
                  ${isSelected 
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:scale-102'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${type.color} 
                  flex items-center justify-center transform transition-transform group-hover:scale-110
                `}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{type.title}</h3>
                <p className="text-xs text-gray-600 leading-tight">{type.description}</p>
                
                {isSelected && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}