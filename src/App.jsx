import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Navbar from 'modules/Navbar';
import HomePage from 'pages/HomePage';
import Movie from 'pages/MoviePage';
import SInglePostPage from 'pages/SInglePostPage/SInglePostPage';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<SInglePostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
