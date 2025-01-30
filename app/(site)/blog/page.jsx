import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function BlogPage() {
    const postsDirectory = path.join(process.cwd(), 'content/blog');
  
    // Create the directory if it doesn't exist
    try {
        await fs.access(postsDirectory);
    } catch {
        await fs.mkdir(postsDirectory, { recursive: true });
        return (
            <div>
                <h1>Blog Posts</h1>
                <p>No posts yet. Create your first post in the admin panel!</p>
            </div>
        );
    }

    const files = await fs.readdir(postsDirectory);
  
    const posts = await Promise.all(
        files.filter(filename => filename.endsWith('.md')).map(async (filename) => {
            const filePath = path.join(postsDirectory, filename);
            const fileContent = await fs.readFile(filePath, 'utf8');
            const { data } = matter(fileContent);
            return {
                slug: filename.replace('.md', ''),
                title: data.title,
                date: data.date,
                description: data.description
            };
        })
    );

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.length > 0 ? (
                <div className="grid gap-4">
                    {posts.map((post) => (
                        <div key={post.slug} className="card bg-white text-neutral-600">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.description}</p>
                                <div className="text-sm text-neutral-500">
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                                <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No posts yet. Create your first post in the admin panel!</p>
            )}
        </div>
    );
} 