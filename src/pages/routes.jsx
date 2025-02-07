import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PokemonCardPage } from './PokemonCardPage';
import { PokemonDetailsPage } from './PokemonDetailsPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokemonCardPage />} />
        <Route exact path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
