import Image from 'next/image';

export function Team({ title, members }) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
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
                            <p className="text-gray-300">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 