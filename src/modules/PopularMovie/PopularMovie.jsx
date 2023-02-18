import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import FetchPopular from 'shared/services/FetchPopular';
import FilmList from 'modules/FilmList';

const PopularMovie = () => {
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const location = useLocation();

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

  return <FilmList items={items} />;
};

export default PopularMovie;
