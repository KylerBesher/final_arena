'use client';

import { RichText as BaseRichText } from './rich-text';
// import { Hero } from './hero';
// import { TextWithImage } from './text-with-image';
// import { Stats } from './stats';
// import { Team } from './team';
// import { Features as BaseFeatures } from './Features';
// import { CTA } from './cta';
// import { TwoColumnText } from './two-column-text';
// import { FAQ } from './faq';
// import { Testimonials } from './testimonials';
// import { Timeline } from './timeline';
// import { Gallery } from './gallery';
// import { Video } from './video';
// import { Pricing } from './pricing';
// import { ContactForm } from './contact-form';
// import { Logos as BaseLogos } from './Logos';
import { processSectionStyles } from '../../lib/styles/processSectionStyles';
import { useTheme } from '../../lib/theme/ThemeContext';

const components = {
    // hero: Hero,
    // textWithImage: TextWithImage,
    // stats: Stats,
    // team: Team,
    // features: BaseFeatures,
    // cta: CTA,
    richText: BaseRichText,
    // twoColumnText: TwoColumnText,
    // faq: FAQ,
    // testimonials: Testimonials,
    // timeline: Timeline,
    // gallery: Gallery,
    // video: Video,
    // pricing: Pricing,
    // contactForm: ContactForm,
    // logos: BaseLogos
};

export function SectionComponent({ section, pageStyles, siteStyles , siteTheme }) {
    console.group('SectionComponent Render');
    console.log('Section:', section);
    console.log('Page Styles:', pageStyles);
    console.log('Site Styles:', siteStyles);
    console.log('Site Theme:', siteTheme);
    
    const { sectionStyles, isDarkMode } = useTheme();
    console.log('Theme Styles:', sectionStyles);
    
    const Component = components[section.type];
    
    if (!Component) {
        console.warn('Missing section type:', section.type);
        console.groupEnd();
        return null;
    }

    // Merge styles in order of specificity
    const mergedStyles = [
        ...(sectionStyles || []),      // Site-wide styles (lowest priority)
        ...(pageStyles || []),         // Page-level styles
        ...(section.style || [])       // Section-specific styles (highest priority)
    ];
    console.log('Merged Styles:', mergedStyles);

    const classes = processSectionStyles(mergedStyles);
    console.log('Processed Classes:', classes);
    
    const combinedClasses = [
        classes,
        ...(section.classification?.classes || [])
    ].filter(Boolean).join(' ');
    console.log('Final Classes:', combinedClasses);
    
    console.groupEnd();
    
    return (
        <section 
            id={section.classification?.id}
            className={combinedClasses}
        >
            <Component {...section} />
        </section>
    );
}

// Export base versions for admin preview
export {
    BaseRichText,
    // BaseFeatures,
    // BaseLogos
};

export {
    // Hero,
    // TextWithImage,
    // Stats,
    // Team,
    // CTA,
    // TwoColumnText,
    // FAQ,
    // Testimonials,
    // Timeline,
    // Gallery,
    // Video,
    // Pricing,
    // ContactForm,
};