import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BlogSection from './BlogSection';

const Posts = () => {
    const [post, setPost] = useState([]);
  useEffect(() => {
   const getPosts = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let post = await res.json();
        setPost(post)
        
    }
    
       getPosts();
       console.log(post)
    }, []);

    
    return post.map((post) => ( <BlogSection post = {post} />)
     ) 
}
export default Posts