import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Navbar from 'modules/Navbar';
import HomePage from 'pages/HomePage';
import Movie from 'pages/MoviePage';
import SInglePostPage from 'pages/SInglePostPage';
import SinglePostCastPage from 'pages/SinglePostCastPage';
import SinglePostReviewsPage from 'pages/SinglePostReviewsPage';

import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<SInglePostPage />}>
          <Route path="cast" element={<SinglePostCastPage />} />
          <Route path="rewievs" element={<SinglePostReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
