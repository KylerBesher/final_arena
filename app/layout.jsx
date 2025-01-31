import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ThemeProvider } from '../lib/theme/ThemeContext';
import { DarkModeProvider } from '../lib/theme/DarkModeContext';
import { StringProvider } from '../lib/context/StringContext';

export default function RootLayout({ children }) {
    // Check if we're in the admin route
    const isAdmin = typeof window !== 'undefined' && window.location.pathname.startsWith('/admin');
  
    // If we're in admin, render just the children
    if (isAdmin) {
        return (
            <html>
                <body>{children}</body>
            </html>
        );
    }
  
    // Otherwise, render the full site layout
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            </head>
            <body className="antialiased min-h-screen">
                <DarkModeProvider>
                    <ThemeProvider>
                        <StringProvider>
                            {children}
                        </StringProvider>
                    </ThemeProvider>
                </DarkModeProvider>
            </body>
        </html>
    );
}