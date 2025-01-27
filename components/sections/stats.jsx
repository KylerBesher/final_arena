export function Stats({ title, items }) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold mb-2">{stat.number}</div>
                            <div className="text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
