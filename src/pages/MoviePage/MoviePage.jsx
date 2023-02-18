import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchMovieForm from 'modules/SearchMovieForm';

import FetchByName from 'shared/services/FetchByName';
import FilmList from 'modules/FilmList';

const Movie = () => {
  // const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  //   const [showModal, setShowModal] = useState(false);
  //   const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchPosts = async () => {
      try {
        // setLoading(true);
        const data = await FetchByName(search, page);
        // console.log('data: ', data);

        setItems(prevItems => [...prevItems, ...data]);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    fetchPosts();
  }, [page, search]);

  const onSearchPosts = useCallback(
    ({ search }) => {
      setSearchParams({ search });
      setItems([]);
      setPage(1);
    },
    [setSearchParams]
  );

  return (
    <>
      <SearchMovieForm onSubmit={onSearchPosts} />
      {items && <FilmList items={items}></FilmList>}
    </>
  );
};

export default Movie;
