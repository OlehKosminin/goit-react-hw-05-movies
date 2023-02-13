import items from './item';
import styled from './Navbar.module.scss';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const markup = items.map(({ id, text, link }) => {
    return (
      <li key={id} className={styled.menu_item}>
        <NavLink to={link} className={styled.menu_link}>
          {text}
        </NavLink>
      </li>
    );
  });
  return <ul className={styled.menu}>{markup}</ul>;
};

export default Navbar;
