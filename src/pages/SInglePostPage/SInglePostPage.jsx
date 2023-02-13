import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchPostById from 'shared/services/FetchPostById';
import {
  Button,
  Img,
  Title,
  H2,
  Info,
  Wraper,
  List,
  Item,
} from './SInglePostPage.styled';

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
  }, [id]);
  // const { poster_path } = post;
  return (
    <>
      <Button type="button">Go back</Button>
      {post && (
        <>
          <Wraper>
            <Img src={post.poster_path} alt={post.Title}></Img>
            <div>
              <Title>{post.original_title}</Title>
              <Info>popularity:{post.popularity}</Info>
              <H2>Overview</H2>
              <Info>{post.overview}</Info>
              <H2>Genres</H2>
              <Info>
                {post.genres.map(({ name, id }) => {
                  return <span key={id}>{name}</span>;
                })}
              </Info>
            </div>
          </Wraper>
          <div>
            <Info>Additonal information</Info>
            <List>
              <Item></Item>
              <Item></Item>
            </List>
          </div>
        </>
      )}
    </>
  );
};

export default SinglePostPage;
