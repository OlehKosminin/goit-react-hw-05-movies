import FetchCast from 'shared/services/FetchCast';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostCastPage = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    // if (!post) {
    //   return;
    // }
    const fetchPost = async () => {
      try {
        const result = await FetchCast(id);
        // console.log('result', result);
        setPost(result);
      } catch ({ response }) {
        console.log(response.data.messega);
      }
    };
    fetchPost();
  }, [id]);

  const cast = post.map(({ cast_id, name, character }) => {
    return (
      <li key={cast_id}>
        <p>name: {name}</p>
        <p>character: {character}</p>
      </li>
    );
  });
  return <ol>{cast}</ol>;
};
export default SinglePostCastPage;
