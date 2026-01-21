import { FileText, Users, HelpCircle, BookOpen, MessageSquare } from 'lucide-react';

export const NAV_ITEMS = [
  {
    label: "Services",
    path: "/services",
    activePrefixes: [
      '/services', '/marketing', '/web', '/paid', '/content', '/social',
      '/google', '/reputation', '/analytics', '/immersive', '/video',
      '/artificial', '/technical', '/widgets', '/recruitment', '/business',
      '/strategic'
    ],
    type: "dropdown"
  },
  {
    label: "About",
    path: "/about-us",
    activePrefixes: ['/about-us', '/our-story'],
    type: "dropdown",
    children: [
      { name: 'About Us', href: '/about-us', icon: Users },
      { name: 'Our Story', href: '/our-story', icon: BookOpen }
    ]
  },
  {
    label: "Resources",
    path: "/resources",
    activePrefixes: ['/blog', '/resources', '/faqs', '/knowledge-base'],
    type: "dropdown",
    children: [
      { name: 'Blog', href: '/blog', icon: FileText },
      { name: 'Resources', href: '/resources', icon: BookOpen },
      { name: 'FAQs', href: '/faqs', icon: HelpCircle },
      { name: 'Knowledge Base', href: '/knowledge-base', icon: MessageSquare }
    ]
  }
];