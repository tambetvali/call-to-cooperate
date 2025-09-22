import React from 'react';
import { UserType } from '../App';
import { ExternalLink, MessageSquare, GitBranch, Palette, Search, Book, Zap, Globe, Code } from 'lucide-react';

interface CooperationPathsProps {
  userType: UserType;
}

const cooperationData = {
  researcher: {
    title: 'Research Collaboration Paths',
    description: 'Contribute to the theoretical foundation and expand scientific applications',
    paths: [
      {
        icon: Search,
        title: 'Theoretical Development',
        description: 'Use my unified theories as a mathematical foundation for your research',
        actions: ['Study the Notion AI School', 'Review essential theorems', 'Apply to your field'],
        links: [
          { label: 'AI School (Notion)', url: 'https://www.notion.so/Laegna-1a575bfc115480a38129e9a9787ab565?pvs=4' },
          { label: 'Essential Theorems', url: 'https://github.com/tambetvali/' }
        ]
      },
      {
        icon: Book,
        title: 'Academic Publications',
        description: 'Collaborate on papers that bridge your expertise with my theoretical framework',
        actions: ['Identify convergence points', 'Develop joint hypotheses', 'Co-author research'],
        links: [
          { label: 'Hugging Face Dataset', url: 'https://huggingface.co/datasets/tvaeli/LaegnaSpi' },
          { label: 'Join Discussions', url: 'https://github.com/tambetvali/LaeArve/discussions' }
        ]
      }
    ]
  },
  developer: {
    title: 'Development Collaboration Paths',
    description: 'Build tools, platforms, and implementations that make the theories accessible',
    paths: [
      {
        icon: GitBranch,
        title: 'Open Source Development',
        description: 'Contribute to existing repositories or create new tools and platforms',
        actions: ['Fork relevant repos', 'Build complementary tools', 'Improve documentation'],
        links: [
          { label: 'GitHub Repositories', url: 'https://github.com/tambetvali/' },
          { label: 'Development Discussions', url: 'https://github.com/tambetvali/LaeArve/discussions' }
        ]
      },
      {
        icon: Globe,
        title: 'Web Platform Development',
        description: 'Create websites and applications that present the theories to new audiences',
        actions: ['Study existing implementations', 'Design new interfaces', 'Build interactive tools'],
        links: [
          { label: 'Example: Logecs Pathways', url: 'https://logecs-pathways-unfold.lovable.app/logecs' },
          { label: 'Example: Laegna Haven', url: 'https://laegna-visionary-haven.lovable.app/' }
        ]
      }
    ]
  },
  creative: {
    title: 'Creative Collaboration Paths',
    description: 'Transform complex theories into accessible, beautiful, and engaging content',
    paths: [
      {
        icon: Palette,
        title: 'Visual Design & Graphics',
        description: 'Create unique graphics, chakra maps, diagrams that reflect your worldview',
        actions: ['Design theory visualizations', 'Create infographics', 'Develop brand materials'],
        links: [
          { label: 'Somatic Spirituality Example', url: 'https://laegna-spibody-path.lovable.app/' },
          { label: 'Creative Discussions', url: 'https://github.com/tambetvali/LaeArve/discussions' }
        ]
      },
      {
        icon: Book,
        title: 'Content & Popularization',
        description: 'Write articles and create content that simplifies and explains the work',
        actions: ['Write explanatory articles', 'Create educational content', 'Develop tutorials'],
        links: [
          { label: 'Main Website Reference', url: 'https://spireason.neocities.org/' },
          { label: 'AI Bots for Inspiration', url: 'https://poe.com/tambetvali' }
        ]
      }
    ]
  },
  lazy: {
    title: 'Quick & Easy Participation',
    description: 'Low-effort ways to engage and contribute to the community',
    paths: [
      {
        icon: MessageSquare,
        title: 'Community Engagement',
        description: 'Share thoughts, ask questions, and connect with like-minded individuals',
        actions: ['Join discussions', 'Share insights', 'Ask questions'],
        links: [
          { label: 'GitHub Discussions', url: 'https://github.com/tambetvali/LaeArve/discussions' },
          { label: 'Perplexity Q&A', url: 'https://www.perplexity.ai/spaces/new-space-dLTaZz8CSd2FUCjIiYQARA' }
        ]
      },
      {
        icon: Zap,
        title: 'Quick Contributions',
        description: 'Simple ways to help improve and spread the work',
        actions: ['Share on social media', 'Provide feedback', 'Suggest improvements'],
        links: [
          { label: 'Example Implementations', url: 'https://logecs-pathways-unfold.lovable.app/logecs' },
          { label: 'Join Community', url: 'https://github.com/tambetvali/LaeArve/discussions' }
        ]
      }
    ]
  },
  interested: {
    title: 'Exploration & Learning Paths',
    description: 'Discover the theories and find your unique way to contribute',
    paths: [
      {
        icon: Book,
        title: 'Learning Journey',
        description: 'Start with the main website, explore the AI school, and find your interest',
        actions: ['Read main theories', 'Explore AI school', 'Identify your niche'],
        links: [
          { label: 'Spiritual Introduction', url: 'https://spireason.neocities.org/' },
          { label: 'Scientific Introduction', url: 'https://www.notion.so/Laegna-1a575bfc115480a38129e9a9787ab565?pvs=4' }
        ]
      },
      {
        icon: MessageSquare,
        title: 'Community Connection',
        description: 'Connect with others and discover collaboration opportunities',
        actions: ['Join discussions', 'Share your background', 'Find collaborators'],
        links: [
          { label: 'GitHub Discussions', url: 'https://github.com/tambetvali/LaeArve/discussions' },
          { label: 'AI Search & Q&A', url: 'https://www.perplexity.ai/spaces/new-space-dLTaZz8CSd2FUCjIiYQARA' }
        ]
      }
    ]
  },
  any: {
    title: 'All Collaboration Opportunities',
    description: 'Comprehensive overview of all ways to cooperate and contribute',
    paths: [
      {
        icon: Search,
        title: 'Theoretical & Research Work',
        description: 'Use the unified theories as foundation for your scientific or spiritual work',
        actions: ['Apply theorems to your field', 'Develop joint research', 'Create academic papers'],
        links: [
          { label: 'AI School', url: 'https://www.notion.so/Laegna-1a575bfc115480a38129e9a9787ab565?pvs=4' },
          { label: 'Hugging Face Dataset', url: 'https://huggingface.co/datasets/tvaeli/LaegnaSpi' }
        ]
      },
      {
        icon: Code,
        title: 'Development & Tools',
        description: 'Build platforms, tools, and implementations that make theories accessible',
        actions: ['Create web applications', 'Develop AI tools', 'Build documentation sites'],
        links: [
          { label: 'GitHub Repos', url: 'https://github.com/tambetvali/' },
          { label: 'Example Sites', url: 'https://logecs-pathways-unfold.lovable.app/logecs' }
        ]
      },
      {
        icon: Palette,
        title: 'Creative & Design',
        description: 'Transform complex ideas into beautiful, accessible content and visuals',
        actions: ['Design visualizations', 'Create educational content', 'Develop graphics'],
        links: [
          { label: 'Creative Examples', url: 'https://laegna-spibody-path.lovable.app/' },
          { label: 'Join Community', url: 'https://github.com/tambetvali/LaeArve/discussions' }
        ]
      }
    ]
  }
};

export function CooperationPaths({ userType }: CooperationPathsProps) {
  const data = cooperationData[userType];
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{data.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {data.paths.map((path, index) => {
            const Icon = path.icon;
            
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{path.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{path.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How to Start:</h4>
                    <ul className="space-y-1">
                      {path.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Resources:</h4>
                    <div className="space-y-2">
                      {path.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group"
                        >
                          <ExternalLink className="w-3 h-3 mr-2 group-hover:translate-x-0.5 transition-transform" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/tambetvali/LaeArve/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Join the Collaboration
          </a>
          <p className="mt-3 text-sm text-gray-600">
            Start your journey by introducing yourself in our GitHub Discussions
          </p>
        </div>
      </div>
    </section>
  );
}