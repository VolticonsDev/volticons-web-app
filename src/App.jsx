import HomePage from './pages/HomePage.jsx';
import NewsPage from './pages/NewsPage.jsx';
//import TeamsPage from './pages/TeamsPage'; // Mantenemos TeamsPage por ahora, aunque no se usa en el router
import ShopPage from './pages/ShopPage.jsx';
import NewsDetailPage from './pages/NewsDetailPage.jsx'; 
import Header from './components/Header.jsx';
import ContactPage from './pages/ContactPage.jsx';  
import LoLPage from './pages/LolPage.jsx'; 
import PokemonPage from './pages/PokemonPage.jsx'; 
import { Routes, Route, Navigate } from 'react-router-dom';
import MatchesPage from './pages/MatchesPage'; 

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<NewsPage />} /> 
        <Route path="/noticias/:id" element={<NewsDetailPage />} /> 
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/partidos" element={<MatchesPage />} />

        <Route path="/equipos/lol" element={<LoLPage />} /> 
        <Route path="/equipos/pokemon" element={<PokemonPage />} /> 

        <Route path="/equipos" element={<Navigate to="/equipos/lol" replace />} /> 
      </Routes>
    </div>
  );
}

export default App;