import axios from 'axios';

const KEY = '6df93cfea9ab79c894afa14efbfcc5c8';
const FetchPopular = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
  // console.log('FetchPopular: ', data);
  return data.results;
};

export default FetchPopular;
