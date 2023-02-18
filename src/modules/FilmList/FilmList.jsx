import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './FilmList.module.scss';

const FilmList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, name }) => (
    <Link
      className={styles.link}
      key={id}
      to={`/movie/${id}`}
      state={{ from: location }}
    >
      <li className={styles.item}>
        <h4>{title ? title : name}</h4>
      </li>
    </Link>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default memo(FilmList);

FilmList.defaultProps = {
  items: [],
};
