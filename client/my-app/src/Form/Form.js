import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

const KananForm = () => {
  const [postData, setPostData] = useState({ creator: "", message: "" });

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="message">Mesaj</label>
      <input
        type="text"
        id="message"
        onChange={(e) =>
          setPostData({ creator: e.target.value, message: e.target.value })
        }
      ></input>
      <button type="submit">Təsdiq</button>
    </form>
  );
};

export default KananForm;
