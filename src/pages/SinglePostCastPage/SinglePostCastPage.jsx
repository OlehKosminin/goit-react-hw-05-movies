import FetchCast from 'shared/services/FetchCast';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function SinglePostCastPage() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

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

  const cast = post.map(({ cast_id, name, character, profile_path }) => {
    return (
      <Link key={cast_id}>
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
            alt=""
          ></img>
          <p>name: {name}</p>
          <p>character: {character}</p>
        </li>
      </Link>
    );
  });

  return <ol>{cast}</ol>;
}
export default SinglePostCastPage;
