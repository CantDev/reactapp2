import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

const BlogBody = () => {
  const { id } = useParams()
  const [onePost, setOnePost] = useState({});

  useEffect(() => {
    const setPost = async () => {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      let post = await res.json();
      console.log(post)
      setOnePost(post);
    }

    setPost();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <container>
          <h5 className="card-title">{onePost.body}</h5>
        </container>
      </div>
    </div>
  )
}

export default BlogBody;