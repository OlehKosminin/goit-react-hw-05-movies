import axios from 'axios';

const KEY = '6df93cfea9ab79c894afa14efbfcc5c8';
const FetchByName = async (search, page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${search}&language=en-US&page=${page}&include_adult=fasle`
  );
  //   console.log('FetchByNAme: ', data);
  return data.results;
};

export default FetchByName;
