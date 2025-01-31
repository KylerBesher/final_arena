// import '../../styles/globals.css';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ThemeProvider } from '../../lib/theme/ThemeContext';
import { DarkModeProvider } from '../../lib/theme/DarkModeContext';
import { StringProvider } from '../../lib/context/StringContext';
import siteConfig from '../../content/settings/site.json';

export const metadata = {
    title: {
        template: siteConfig.strings.site.title_template,
        default: siteConfig.strings.site.default_title
    },
    description: siteConfig.strings.site.default_description
};

export default function RootLayout({ children }) {
    return (
        <div className="grow">{children}</div>
    );
}