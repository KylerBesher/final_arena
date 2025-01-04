import { getProducts } from '../lib/shopify';

export default async function Home() {
    const products = await getProducts();

    return (
        <main className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Our Products</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(({ node: product }) => (
                    <div key={product.id} className="card bg-white text-neutral-900">
                        {product.images.edges[0] && (
                            <figure>
                                <img 
                                    src={product.images.edges[0].node.url}
                                    alt={product.images.edges[0].node.altText || product.title}
                                    className="w-full h-64 object-cover"
                                />
                            </figure>
                        )}
                        <div className="card-body">
                            <h2 className="card-title">{product.title}</h2>
                            <p className="text-sm line-clamp-2">{product.description}</p>
                            <p className="text-lg font-bold">
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: product.priceRange.minVariantPrice.currencyCode
                                }).format(product.priceRange.minVariantPrice.amount)}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
