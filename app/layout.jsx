import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ThemeProvider } from '../lib/theme/ThemeContext';
import { DarkModeProvider } from '../lib/theme/DarkModeContext';
import { StringProvider } from '../lib/context/StringContext';

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}