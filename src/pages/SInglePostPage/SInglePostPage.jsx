import { useState, useEffect, useCallback } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  Outlet,
  useLocation,
} from 'react-router-dom';
import FetchPostById from 'shared/services/FetchPostById';
import {
  Button,
  Img,
  Title,
  H2,
  Info,
  Wraper,
  List,
} from './SInglePostPage.styled';

const SinglePostPage = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state;
  // console.log('location: ', location);
  // const backLinkHref = location.state?.from ?? '/movie';

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await FetchPostById(id);
        setPost(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPost();
  }, [id]);

  const goBack = useCallback(() => {
    navigate(from);
  }, [from, navigate]);

  return (
    <>
      <Button type="button" onClick={goBack}>
        Go back
      </Button>
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
              <Link to="cast" state={{ from }}>
                Cast
              </Link>
              <Link to="rewievs" state={{ from }}>
                Rewievs
              </Link>
              <Outlet />
            </List>
          </div>
        </>
      )}
    </>
  );
};

export default SinglePostPage;
