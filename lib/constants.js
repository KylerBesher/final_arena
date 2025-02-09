import siteConfig from '../content/settings/site.json';

// Site Information
export const SITE_NAME = siteConfig.branding.name;
export const SITE_DESCRIPTION = siteConfig.branding.description;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thearena.gg';

// Title Templates
export const formatPageTitle = title =>
    title ? `${title} | ${SITE_NAME}` : siteConfig.strings.site.default_title;

// Dynamic String Replacements
export const replaceTemplateStrings = (template, values) => {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        if (key === 'year') return new Date().getFullYear();
        return values[key] || match;
    });
};

// Navigation
export const NAV_MENU_LABEL = siteConfig.strings.nav.menu_label;
export const SKIP_TO_CONTENT = siteConfig.strings.nav.skip_to_content;

// Common Button Text
export const BUTTON_TEXT = {
    default: siteConfig.strings.cta.default_button,
    contact: siteConfig.strings.cta.contact_button,
    events: siteConfig.strings.cta.events_button,
};

// Error Messages
export const ERROR_MESSAGES = {
    notFound: {
        title: siteConfig.strings.error['404_title'],
        message: siteConfig.strings.error['404_message'],
    },
    serverError: {
        title: siteConfig.strings.error['500_title'],
        message: siteConfig.strings.error['500_message'],
    },
};
