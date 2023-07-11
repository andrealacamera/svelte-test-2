import type { Handle, RequestEvent } from '@sveltejs/kit';
import { detectLocale, i18n, isLocale } from './i18n/i18n-util';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import type { Locales } from './i18n/i18n-types';

const getPreferredLocale = ({ request }: RequestEvent) => {
    const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);
    return detectLocale(acceptLanguageDetector);
  };

export const handle: Handle = async ({ event, resolve }) => {
    const lang = event.url.searchParams.get('lang');
    const locale = isLocale(lang as Locales) ? (lang as Locales) : getPreferredLocale(event);
    event.locals.locale = locale;
    
    return resolve(event);
}


