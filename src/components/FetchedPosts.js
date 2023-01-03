import Post from './Post';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPost} from '../redux/action';
import {Loader} from './Loader';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if (loading) {
    return <Loader />
  }

  const clickHandler = () => {
    dispatch(fetchPost());
  }

  if (!posts.length) {
    return <button className="btn btn-primary" onClick={clickHandler}>Download</button>
  }

  return posts.map(post => <Post post={post} key={post.id}/>);
}
