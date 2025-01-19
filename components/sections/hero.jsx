export function Hero({ title, subtitle, backgroundImage }) {
    return (
        <section 
            className="relative py-24 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl md:text-2xl">{subtitle}</p>
            </div>
        </section>
    );
} 