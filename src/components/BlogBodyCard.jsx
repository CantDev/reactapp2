import BlogBody from './BlogBody';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';





const BlogBodyCard = (props) => {



  return (
    
    <div className="card">
     
      <div className="card-body"> 
      <container>
        <h5 className="card-title">{props.post.body}</h5>
        
        </container>
      </div>
    </div>

  )



}

export default BlogBodyCard