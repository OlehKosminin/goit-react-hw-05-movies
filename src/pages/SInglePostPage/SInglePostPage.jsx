import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchPostById from 'shared/services/FetchPostById';
import { Button, Img } from './SInglePostPage.styled';

const SinglePostPage = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await FetchPostById(id);
        console.log('result: ', result);
        setPost(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPost();
  }, []);
  // const { poster_path } = post;
  return (
    <>
      <Button type="button">Go back</Button>
      {post && (
        <div>
          <Img src={post.poster_path}></Img>
        </div>
      )}
    </>
  );
};

export default SinglePostPage;
