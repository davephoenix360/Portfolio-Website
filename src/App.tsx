import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
