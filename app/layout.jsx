import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { StringProvider } from '../lib/context/StringContext';
import { DarkModeProvider } from '../lib/theme/DarkModeContext';
import { ThemeProvider } from '../lib/theme/ThemeContext';
import siteConfig from '../public/admin/settings/site.json';

export const metadata = {
    title: {
        template: siteConfig.strings.site.title_template,
        default: siteConfig.strings.site.default_title,
    },
    description: siteConfig.strings.site.default_description,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <DarkModeProvider>
                    <ThemeProvider>
                        <StringProvider>
                            <Header />
                            <div>{children}</div>
                            <Footer />
                        </StringProvider>
                    </ThemeProvider>
                </DarkModeProvider>
            </body>
        </html>
    );
}
