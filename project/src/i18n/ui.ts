export const languages = {
  en: 'English',
  cn: '中文',
  jp: '日本語',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  ar: 'العربية'
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.products': 'Products',
    'nav.technology': 'Technology',
    'nav.certifications': 'Certifications',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    // Add more translations
  },
  cn: {
    'nav.products': '产品',
    'nav.technology': '技术',
    'nav.certifications': '认证',
    'nav.blog': '博客',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.faq': '常见问题',
    // Add more translations
  },
  // Add other languages
} as const;