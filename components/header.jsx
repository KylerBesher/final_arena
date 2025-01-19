import { NavBar } from './navbar';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

async function getNavigationData() {
    try {
        const filePath = path.join(process.cwd(), 'content/settings/navigation.yml');
        const fileContent = await fs.readFile(filePath, 'utf8');
        const data = yaml.load(fileContent);
        return data?.mainMenu || [];
    } catch (error) {
        console.error('Error reading navigation:', error);
        return [];
    }
}

export async function Header() {
    const navItems = await getNavigationData();
    
    return <NavBar items={navItems} />;
}