export default function AdminLayout({ children }) {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Content Manager</title>
            </head>
            <body>{children}</body>
        </html>
    );
} 