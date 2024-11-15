export const languages = [
  { code: 'en', name: 'English' },
  { code: 'cn', name: '中文' },
  { code: 'jp', name: '日本語' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'ar', name: 'العربية' }
] as const;

export type LanguageCode = typeof languages[number]['code'];