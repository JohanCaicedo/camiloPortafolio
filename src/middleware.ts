import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
    const url = new URL(context.request.url);
    const pathname = url.pathname;

    // Skip middleware for static assets
    if (pathname.includes('.') || pathname.startsWith('/_')) {
        return next();
    }

    // Check if user is already on a language-specific path
    const isOnEnglish = pathname.startsWith('/en') || (!pathname.startsWith('/es') && pathname !== '/');
    const isOnSpanish = pathname.startsWith('/es');

    // If already on a language path, continue
    if (isOnEnglish || isOnSpanish) {
        return next();
    }

    // Only redirect from root path
    if (pathname === '/' || pathname === '') {
        // Check for stored language preference in cookie
        const cookies = context.request.headers.get('cookie');
        let preferredLang = null;

        if (cookies) {
            const langCookie = cookies.split(';').find(c => c.trim().startsWith('preferredLanguage='));
            if (langCookie) {
                preferredLang = langCookie.split('=')[1];
            }
        }

        // If no stored preference, use browser language
        if (!preferredLang) {
            const acceptLanguage = context.request.headers.get('accept-language');

            if (acceptLanguage) {
                // Parse the Accept-Language header
                const languages = acceptLanguage
                    .split(',')
                    .map(lang => {
                        const parts = lang.trim().split(';');
                        const code = parts[0].toLowerCase();
                        const quality = parts[1] ? parseFloat(parts[1].split('=')[1]) : 1.0;
                        return { code, quality };
                    })
                    .sort((a, b) => b.quality - a.quality);

                // Check if Spanish is preferred
                const browserLang = languages[0].code;
                preferredLang = browserLang.startsWith('es') ? 'es' : 'en';
            }
        }

        // Redirect based on preference
        if (preferredLang === 'es') {
            return Response.redirect(new URL('/es/camiloPortfolio', url), 302);
        }

        // Default to English
        return Response.redirect(new URL('/camiloPortfolio', url), 302);
    }

    return next();
});
