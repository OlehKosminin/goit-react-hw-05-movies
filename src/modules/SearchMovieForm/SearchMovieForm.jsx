// import { useState } from 'react';
import { memo } from 'react';
import { PropTypes } from 'prop-types';
import useForm from '../../hooks/useForm.jsx';
const initialState = {
  search: '',
};

const SearchMovieForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  // console.log('Render form');

  const { search } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Search posts</label>
        <input
          value={search}
          onChange={handleChange}
          name="search"
          placeholder="Search posts"
          required
        />
      </div>
    </form>
  );
};

export default memo(SearchMovieForm);

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
