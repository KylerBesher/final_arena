import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

async function getHomeData() {
    const filePath = path.join(process.cwd(), 'content/static/home.yml');
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const data = yaml.load(fileContent);
        return data;
    } catch (error) {
        console.error('Error reading home data:', error);
        return null;
    }
}

export default async function Home() {
    const homeData = 'replace me home layout';//await getHomeData();

    if (!homeData) {
        return <div>Loading...</div>;
    } 

    return (
        <main>
            <div>{homeData}</div>
            {/* <h1>{homeData.heroTitle}</h1> */}
            {/* <p>{homeData.heroSubtitle}</p> */}
        </main>
    );
}
