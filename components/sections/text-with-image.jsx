import Image from 'next/image';

export function TextWithImage({ title, content, image, imagePosition = 'right' }) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div
                    className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                        <div className="prose prose-invert">{content}</div>
                    </div>
                    <div className="flex-1">
                        <Image
                            src={image}
                            alt={title}
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
