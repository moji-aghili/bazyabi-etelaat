import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Post() {
  const {id} = useParams();
  const [post , setPost] = useState();
  const [comments, setComments] = useState();
  const [user , setUser] = useState();
  
  useEffect(()=>{
    if(id != null){
      getPost(id);
      getComments(id);
    }
  },[id])

  useEffect(()=>{ 
    if(post != null){
      let userId = post.userId;
      getUser(userId);
    }
  },[post])
  
  // get POST DATA
  function getPost(id){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res=> {
        setPost(res.data);
      }).catch(err => console.log('err:', err))
  }
  // get POST COMMENTS
  function getComments(id){
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res=> {
        setComments(res.data);
      }).catch(err => console.log('err:', err))
  }
  // GET USER 
  function getUser(id){
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res=> {
        setUser(res.data);
      }).catch(err => console.log('err:', err))
  }

  if(!post || !user || !comments) return (
    <div className="App">
      <button class="btn btn-primary" disabled>
        <span class="spinner-border spinner-border-sm"></span>
        Loading..
      </button>
    </div>
    )

  return (
    <div className="container mt-3">
      <div className="card">
        <div class="card-body">
          {/* //USER */}
          <h4>The writer : <Link className="badge rounded-pill bg-danger" to={`/user/${user.id}`}>{user.username}</Link></h4>
          {/* // POST DATA */}
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      </div>

       

      {/* // COMMENt */}
      <h3>comments : </h3>
      {comments.map(comment => 
       <div className="card"  key={comment.id}>
        <div class="card-body">
          <h6 className="text-primary">{comment.name}</h6>
          <h6 className="badge rounded-pill bg-success">{comment.email}</h6>
          <p className="text-secondary">{comment.body}</p>
        </div>
       </div>
      )}

    </div>
  )
}

export default Post;