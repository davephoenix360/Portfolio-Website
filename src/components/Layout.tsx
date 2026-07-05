import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollProgress from './ScrollProgress';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment text-ink dark:bg-vaultInk dark:text-parchment">
      <ScrollProgress />
      <Navbar />
      <main className="pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
