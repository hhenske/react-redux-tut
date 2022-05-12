import React from "react";
import AddPost from "./AddPost";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

export const HomePage = () => {
  return (
    <>
      <AddPost />
      <PostList />
    </>
  );
};
