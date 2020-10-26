import Posts from './Posts';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';





const BlogSection = (props) => {



  return (
    
    <div className="card">
     
      <div className="card-body"> 
      <container>
        <h5 className="card-title">{props.post.title}</h5>
        <Link to = {`/Posts/${props.post.id}`}>
        <button className="btn btn-primary">Go somewhere</button>
        </Link>
        </container>
      </div>
    </div>

  )



}

export default BlogSection