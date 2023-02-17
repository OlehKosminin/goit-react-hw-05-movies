import axios from 'axios';

const KEY = '6df93cfea9ab79c894afa14efbfcc5c8';

const FetchReviews = async id => {
  // console.log('id: ', id);

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  // console.log('fetchId', data);
  return data.results;
};

export default FetchReviews;
