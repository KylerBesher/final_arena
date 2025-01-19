import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ThemeProvider } from '../lib/theme/ThemeContext';
import { DarkModeProvider } from '../lib/theme/DarkModeContext';
import { StringProvider } from '../lib/context/StringContext';
import siteConfig from '../content/settings/site.json';

export const metadata = {
    title: {
        template: siteConfig.strings.site.title_template,
        default: siteConfig.strings.site.default_title
    },
    description: siteConfig.strings.site.default_description
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased min-h-screen">
                <DarkModeProvider>
                    <ThemeProvider>
                        <StringProvider>
                            <div className="min-h-screen bg-background text-text">
                                <Header />
                                <div className="flex flex-col min-h-screen px-6 sm:px-12 pt-16">
                                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                                        <div className="grow">{children}</div>
                                        <Footer />
                                    </div>
                                </div>
                            </div>
                        </StringProvider>
                    </ThemeProvider>
                </DarkModeProvider>
            </body>
        </html>
    );
}