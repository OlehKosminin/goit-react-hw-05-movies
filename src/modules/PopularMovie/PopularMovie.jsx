import { useState, useEffect } from 'react';
import FetchPopular from 'shared/services/FetchPopular';
import PostMovieList from './PopularMovieList/PostMovieList';

const PopularMovie = () => {
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (!items) {
      return;
    }
    if (items.length > 20) {
      return;
    }
    const fetchPosts = async () => {
      try {
        // setLoading(true);
        const data = await FetchPopular();
        // console.log('data: ', data);

        setItems(prevItems => [...prevItems, ...data]);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    fetchPosts();
  }, [items]);

  return <PostMovieList items={items} />;
};

export default PopularMovie;
