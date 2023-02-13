import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './PopularMovieList.module.scss';

const SearchMovieList = ({ items }) => {
  const elements = items.map(({ id, title, name }) => (
    <Link className={styles.link} key={id} to={`/movie/${id}`}>
      <li className={styles.item}>
        <h4>{title ? title : name}</h4>
      </li>
    </Link>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default memo(SearchMovieList);

SearchMovieList.defaultProps = {
  items: [],
};
