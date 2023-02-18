import FetchReviews from 'shared/services/FetchReviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostReviewsPage = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await FetchReviews(id);
        // console.log('result', result);
        setPost(result);
      } catch ({ response }) {
        console.log(response.data.messega);
      }
    };
    fetchPost();
  }, [id]);

  const cast = post.map(({ id, author, content, created_at }) => {
    return (
      <li key={id}>
        <p>name: {author}</p>
        <p>character: {content}</p>
        <p>create: {created_at}</p>
      </li>
    );
  });
  return <ol>{cast}</ol>;
};

export default SinglePostReviewsPage;
