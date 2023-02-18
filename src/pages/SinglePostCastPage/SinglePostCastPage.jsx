import FetchCast from 'shared/services/FetchCast';
import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
// import SinglePostCastList from './SinglePostCastList/SinglePostCastList';

const SinglePostCastPage = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  // const location = useLocation();
  // console.log('location cast page: ', location);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await FetchCast(id);
        setPost(result);
      } catch ({ response }) {
        console.log(response.data.messega);
      }
    };
    fetchPost();
  }, [id]);

  // const cast = SinglePostCastList(post);
  const cast = post.map(({ cast_id, name, character }) => {
    return (
      <Link key={cast_id}>
        <li>
          <p>name: {name}</p>
          <p>character: {character}</p>
        </li>
      </Link>
    );
  });

  return <ol>{cast}</ol>;
};
export default SinglePostCastPage;
