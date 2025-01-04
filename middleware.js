import { NextResponse } from 'next/server';

export async function middleware(request) {
    // Only run in development mode
    if (process.env.NODE_ENV === 'development') {
        if (request.nextUrl.pathname === '/config.yml' || request.nextUrl.pathname === '/admin/config.yml') {
            try {
                const response = await fetch(new URL('/admin/config.yml', request.url));
                const content = await response.text();

                return new NextResponse(content, {
                    status: 200,
                    headers: {
                        'Content-Type': 'text/yaml',
                        'Access-Control-Allow-Origin': '*',
                        'Cache-Control': 'no-store',
                    },
                });
            } catch(error) {
                console.error('Error reading config.yml:', error);
                return new NextResponse(null, { status: 404 });
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/(config.yml)',
        '/admin/(config.yml)'
    ]
}; 