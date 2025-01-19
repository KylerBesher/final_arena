export function Features({ columns = 3, items }) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
                    {items.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-4">
                                <i className={`fas fa-${feature.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p>{feature.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 