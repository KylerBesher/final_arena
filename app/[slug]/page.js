import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { SectionComponent } from '../../components/sections';
import { processMarkdown } from '../../lib/markdown';

export default async function Page({ params }) {
    try {
        const { slug } = await params;
        const filePath = path.join(process.cwd(), 'content/pages', slug, 'index.md');
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = processMarkdown(fileContent);

        return (
            <div>
                {data.sections?.map((section, index) => (
                    <SectionComponent key={index} section={section} />
                ))}
                {!data.sections && (
                    <div>
                        <h1>{data.title}</h1>
                        <div>{content}</div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('Error loading page:', error);
        notFound();
    }
} 