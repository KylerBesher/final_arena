import { Hero } from './hero';
import { TextWithImage } from './text-with-image';
import { Stats } from './stats';
import { Team } from './team';
import { Features } from './features';
import { CTA } from './cta';
import { RichText } from './rich-text';
import { TwoColumnText } from './two-column-text';
import { FAQ } from './faq';
import { Testimonials } from './testimonials';
import { Timeline } from './timeline';
import { Gallery } from './gallery';
import { Video } from './video';
import { Pricing } from './pricing';
import { ContactForm } from './contact-form';
import { Logos } from './logos';

const components = {
    hero: Hero,
    textWithImage: TextWithImage,
    stats: Stats,
    team: Team,
    features: Features,
    cta: CTA,
    richText: RichText,
    twoColumnText: TwoColumnText,
    faq: FAQ,
    testimonials: Testimonials,
    timeline: Timeline,
    gallery: Gallery,
    video: Video,
    pricing: Pricing,
    contactForm: ContactForm,
    logos: Logos
};

export function SectionComponent({ section }) {
    const Component = components[section.type];
    
    if (!Component) {
        console.log('Missing section type:', section.type);
        return null;
    }
    
    return <Component {...section} />;
}

export {
    Hero,
    TextWithImage,
    Stats,
    Team,
    Features,
    CTA,
    RichText,
    TwoColumnText,
    FAQ,
    Testimonials,
    Timeline,
    Gallery,
    Video,
    Pricing,
    ContactForm,
    Logos
};