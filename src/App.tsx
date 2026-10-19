import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TTYBar from './components/TTYBar';
import Terminal from './components/Terminal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text scanlines">
      <TTYBar />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <Terminal />
    </div>
  );
};

export default App;
