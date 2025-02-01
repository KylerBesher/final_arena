import Link from 'next/link';

export function Footer() {
    return (
        <footer>
            <div>
                <p>© {new Date().getFullYear()} Your Site Name. All rights reserved.</p>
            </div>
        </footer>
    );
}
