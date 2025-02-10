import '../../styles/globals.css'; // Adjust the relative path if needed
// import { Header } from '../../components/header';
// import { Footer } from '../../components/footer';

export default function SiteLayout({ children }) {
    return (
        <div className="relative">
            <main>{children}</main>
        </div>
    );
}
