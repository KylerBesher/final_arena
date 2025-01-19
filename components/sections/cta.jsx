import Link from 'next/link';

export function CTA({ title, subtitle, buttonText, buttonLink }) {
    return (
        <section className="py-16 bg-blue-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-xl mb-8">{subtitle}</p>
                <Link 
                    href={buttonLink}
                    className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
} 