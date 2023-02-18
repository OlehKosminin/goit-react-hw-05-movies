import axios from 'axios';

const FetchImg = async url => {
  const { data } = await axios.get(`https://image.tmdb.org/t/p/${url}`);
  console.log('fetchId', data);
  return data;
};

export default FetchImg;
