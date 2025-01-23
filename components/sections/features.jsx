export function Features({ title, description, columns = 3, items }) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                {title && (
                    <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
                )}
                {description && (
                    <p className="text-xl text-center mb-12">{description}</p>
                )}
                <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
                    {items.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-4">
                                <i className={`fas fa-${feature.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p>{feature.description || feature.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 