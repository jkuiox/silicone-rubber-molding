import { defineMiddleware } from 'astro/middleware';
import { defaultLang, languages } from './i18n/ui';

export const onRequest = defineMiddleware(async ({ url, redirect }, next) => {
  // Get current path
  const pathname = url.pathname;
  
  // Handle root path
  if (pathname === '/') {
    return redirect(`/${defaultLang}`);
  }
  
  // Get language from pathname
  const [, lang] = pathname.split('/');
  
  // If no language is specified or language is invalid, redirect to default language
  if (!lang || !Object.keys(languages).includes(lang)) {
    const newPath = `/${defaultLang}${pathname}`;
    return redirect(newPath.replace('//', '/'));
  }
  
  return next();
});