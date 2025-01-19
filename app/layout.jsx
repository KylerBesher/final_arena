import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ThemeProvider } from '../lib/theme/ThemeContext';
import { DarkModeProvider } from '../lib/theme/DarkModeContext';
import siteConfig from '../content/settings/site.json';

export const metadata = {
    title: {
        template: '%s | ' + siteConfig.branding.name,
        default: siteConfig.branding.name + ' - ' + siteConfig.branding.tagline
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased min-h-screen">
                <DarkModeProvider>
                    <ThemeProvider>
                        <div className="min-h-screen bg-background text-text">
                            <Header />
                            <div className="flex flex-col min-h-screen px-6 sm:px-12 pt-16">
                                <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                                    <div className="grow">{children}</div>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </ThemeProvider>
                </DarkModeProvider>
            </body>
        </html>
    );
}