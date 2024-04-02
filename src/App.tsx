import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <NavBar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
