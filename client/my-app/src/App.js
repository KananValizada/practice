import React from "react";
import KananForm from "./Form/Form";
import Post from "./Post/Post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <KananForm />;
      <Post />
    </>
  );
};

export default App;
