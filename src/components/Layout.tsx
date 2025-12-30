import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-ink dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
