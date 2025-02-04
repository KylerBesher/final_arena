import { Hero } from './hero';
import { TextWithImage } from './text-with-image';
import { Stats } from './stats';
import { Team } from './team';
import { Features as BaseFeatures } from './Features';
import { CTA } from './cta';
import { RichText as BaseRichText } from './rich-text';
import { TwoColumnText } from './two-column-text';
import { FAQ } from './faq';
import { Testimonials } from './testimonials';
import { Timeline } from './timeline';
import { Gallery } from './gallery';
import { Video } from './video';
import { Pricing } from './pricing';
import { ContactForm } from './contact-form';
import { Logos as BaseLogos } from './Logos';
import { withSectionStyles } from '../../lib/styles/withSectionStyles';

const components = {
    hero: Hero,
    textWithImage: TextWithImage,
    stats: Stats,
    team: Team,
    features: BaseFeatures,
    cta: CTA,
    richText: BaseRichText,
    twoColumnText: TwoColumnText,
    faq: FAQ,
    testimonials: Testimonials,
    timeline: Timeline,
    gallery: Gallery,
    video: Video,
    pricing: Pricing,
    contactForm: ContactForm,
    logos: BaseLogos
};

export function SectionComponent({ section }) {
    const Component = components[section.type];
    
    if (!Component) {
        console.log('Missing section type:', section.type);
        return null;
    }
    
    return <Component {...section} />;
}

// Export styled versions of components
export const RichText = withSectionStyles(BaseRichText);
export const Features = withSectionStyles(BaseFeatures);
export const Logos = withSectionStyles(BaseLogos);

export {
    Hero,
    TextWithImage,
    Stats,
    Team,
    BaseFeatures,
    CTA,
    BaseRichText,
    TwoColumnText,
    FAQ,
    Testimonials,
    Timeline,
    Gallery,
    Video,
    Pricing,
    ContactForm,
    BaseLogos
};