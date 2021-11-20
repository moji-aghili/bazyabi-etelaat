import React , {useState, useEffect} from 'react'
import axios from 'axios'

export default function Posts() {

  const [posts , setPosts] = useState();
  
  useEffect(() => {
    getPosts();
  }, [])

  async function getPosts(){
   await axios('https://jsonplaceholder.typicode.com/posts/')
    .then((res)=> {
      setPosts(res.data)
    }).catch(err => console.log(err))
  }

  if (!posts) return (
  <div className="App">
    <button class="btn btn-primary" disabled>
      <span class="spinner-border spinner-border-sm"></span>
      Loading..
    </button>
  </div>
  )
    
  return (
    <div className="container mt-3">
      <h4>Posts :</h4>
      {posts.map(post=>
        <div className="card" key={post.id} >
          <div class="card-body">
            <h4><a className="nav-link text-info" href={`/post/${post.id}`}>{post.title}</a></h4>
          </div>
        </div>
        )}
    </div>
  )
}
