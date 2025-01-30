import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Markdown } from 'components/markdown';


export const dynamic = 'force-dynamic';

export default async function RevalidationPage() {
    const filePath = path.join(process.cwd(), 'content', 'revalidation.md');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Replace placeholders with dynamic content
    const currentTime = new Date().toLocaleString();
    const processedContent = content
        .replace('[Current Time Placeholder]', `**${currentTime}**`)
        .replace('[Revalidate Button Placeholder]', '<RevalidateButton />');

    return (
        <div className="prose prose-invert max-w-none">
            <h1>{data.title}</h1>
            <p className="text-lg">{data.description}</p>
            <Markdown content={processedContent} />
        </div>
    );
}
