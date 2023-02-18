import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
const List = items => {
  const location = useLocation();
  return items.map(({ cast_id, name, character }) => {
    return (
      <Link key={cast_id} state={{ from: location }}>
        <li>
          <p>name: {name}</p>
          <p>character: {character}</p>
        </li>
      </Link>
    );
  });
};

export default List;

List.propTypes = {
  items: PropTypes.array.isRequired,
};
