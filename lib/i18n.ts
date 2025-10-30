import cs from '../i18n/messages/cs.json';
import en from '../i18n/messages/en.json';

export type Locale = 'cs' | 'en';

export const messages = {
  cs,
  en,
};

export const defaultLocale: Locale = 'cs';

export function getTranslations(locale: Locale = 'cs') {
  return (key: string, params?: Record<string, any>) => {
    let value: any = messages[locale];
    const keys = key.split('.');
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (_, paramKey) => params[paramKey] || '');
    }
    
    return value || key;
  };
}

