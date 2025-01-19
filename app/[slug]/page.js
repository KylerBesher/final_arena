import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { SectionComponent } from '../../components/sections';

export default async function Page(props) {
    try {
        const slug = props.params.slug;
        const filePath = path.join(process.cwd(), 'content/pages', slug, 'index.md');
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContent);

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
        notFound();
    }
} 