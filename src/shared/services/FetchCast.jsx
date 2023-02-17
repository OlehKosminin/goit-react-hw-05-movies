import axios from 'axios';

const KEY = '6df93cfea9ab79c894afa14efbfcc5c8';
const FetchCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  //   console.log('data: ', data);
  return data.cast;
};

export default FetchCast;
