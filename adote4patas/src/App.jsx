import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Contatos from './pages/Contatos';  
import Doacoes from './pages/Doacoes';
import Adote from './pages/Adote';
import Apadrinhe from './pages/Apadrinhe';

function App() {
  return (
    
    <Router>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', 
        }}
      >
        <header>
          <ResponsiveAppBar />
        </header>

        <Box 
          component="main" 
          sx={{
            flexGrow: 1, 
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path='/doar' element={<Doacoes />} />
            <Route path='/adotar' element={<Adote />} />
            <Route path='/apadrinhar' element={<Apadrinhe />} />
            
          </Routes>
        </Box>

        <footer>
          <Footer />
        </footer>
      </Box>
    </Router>
  );
}

export default App;
