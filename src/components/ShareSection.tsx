import React, { useState } from 'react';
import { Share2, Mail, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';

export function ShareSection() {
  const [copied, setCopied] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  
  const pageUrl = window.location.href;
  const shareText = "Discover collaborative opportunities in unified theories that bridge spirituality and science. Join the open source community working on mathematical foundations for diverse worldviews.";
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const generateEmailContent = () => {
    const subject = encodeURIComponent("Invitation to Collaborate - Tambet Vali Theories");
    const body = encodeURIComponent(`Hi there,

I wanted to share this interesting collaboration opportunity with you:

${shareText}

The work covers unified theories that provide mathematical foundations for spiritual and scientific worldviews. It's all open source under CC-BY-NC-SA-4.0 license, which means you can freely use it for educational, scientific, and open source purposes.

Key platforms to explore:
• Main Website: https://spireason.neocities.org/
• AI School: https://www.notion.so/Laegna-1a575bfc115480a38129e9a9787ab565?pvs=4
• GitHub: https://github.com/tambetvali/
• Dataset: https://huggingface.co/datasets/tvaeli/LaegnaSpi

You can join the collaboration at: https://github.com/tambetvali/LaeArve/discussions

Check out the full cooperation page: ${pageUrl}

Best regards`);
    
    return `mailto:?subject=${subject}&body=${body}`;
  };

  const shareLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Share2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Share the Collaboration
          </h2>
          <p className="text-lg text-gray-600">
            Help expand the community by sharing this cooperation opportunity
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Share on Social Media</h3>
              <div className="space-y-3">
                {shareLinks.map((link, index) => {
                  const Icon = link.icon;
                  
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-white transition-all duration-300 transform hover:scale-105 ${link.color}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">Share on {link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Direct Sharing</h3>
              <div className="space-y-3">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center space-x-3 w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-700">Copy Link</span>
                    </>
                  )}
                </button>
                
                <a
                  href={generateEmailContent()}
                  className="flex items-center space-x-3 w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Share via Email</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-gray-900 mb-3">Your Support Matters</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              My support goes to those in sincere effort who are useful to others, themselves, and the broader mission. 
              By sharing this work, you help build a community where diverse perspectives can find mathematical grounding 
              and tautological proofs for their spiritual, scientific, and philosophical insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}