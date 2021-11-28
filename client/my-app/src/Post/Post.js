import { useSelector } from "react-redux";

const Post = () => {
  const post = useSelector((state) => state.posts);
  console.log(post);
  return <div>Post</div>;
};

export default Post;
