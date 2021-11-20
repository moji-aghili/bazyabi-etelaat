import React ,{useState , useEffect} from 'react'
import axios from 'axios'


export default function Users() {

  const [users , setUsers] = useState();


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data)).catch(console.log('Error getting users data'));
  },[])

  if(!users)return(
    <div className="App">
      <button class="btn btn-primary" disabled>
        <span class="spinner-border spinner-border-sm"></span>
        Loading..
      </button>
    </div>
    )

  return (
    <div className="container">
      <h3>Users : </h3>
      {users.map(user=>
      <div class="card" key={user.id}>
        <div class="card-body">
          <h4 ><a className="nav-link" href={`/user/${user.id}`} >{user.username}</a></h4>
        </div>
      </div>
      )}
    </div>
  )
}
