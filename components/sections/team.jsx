import Image from 'next/image';

export function Team({ title, description, items }) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
                {description && (
                    <p className="text-xl text-center mb-12">{description}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-gray-600 mb-4">{member.role}</p>
                            <p className="text-gray-700">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 