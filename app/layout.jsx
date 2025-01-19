import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ThemeProvider } from '../lib/theme/ThemeContext';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <ThemeProvider>
            <html lang="en">
                <head>
                    <link rel="icon" href="/favicon.svg" sizes="any" />
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
                </head>
                <body className="antialiased bg-background text-text">
                    <Header />
                    <div className="flex flex-col min-h-screen px-6 sm:px-12 pt-16">
                        <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                            <div className="grow">{children}</div>
                            <Footer />
                        </div>
                    </div>
                </body>
            </html>
        </ThemeProvider>
    );
}