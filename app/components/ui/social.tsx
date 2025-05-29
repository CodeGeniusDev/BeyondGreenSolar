import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      id: 'facebook',
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'https://www.facebook.com/profile.php?id=61575885641451',
      label: 'Follow us on Facebook',
      color: 'hover:text-[#1877F2]',
    },
    {
      id: 'instagram',
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'https://www.instagram.com/jinnah__xperts/',
      label: 'Follow us on Instagram',
      color: 'hover:text-[#E4405F]',
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'https://www.linkedin.com/company/jinnahxpert',
      label: 'Connect on LinkedIn',
      color: 'hover:text-[#0A66C2]',
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 sm:p-3 rounded-r-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50">
        {socialLinks.map((link) => (
          <div key={link.id} className="group relative">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              aria-label={link.label}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md ${link.color} transform transition-all duration-300 ease-in-out`}
            >
              {link.icon}
              <span className="absolute left-full top-1/2 ml-3 px-3 py-1.5 bg-gray-800 text-white text-[12px] font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none -translate-y-1/2">
                {link.label}
                <span className="absolute right-full top-1/2 w-2 h-2 -mr-1 -translate-y-1/2 rotate-45 bg-gray-800"></span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;