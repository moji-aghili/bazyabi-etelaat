import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios';

export default function User() {
  
  const {id} = useParams();
  const [user , setUser] = useState();


  useEffect(()=>{
    getUser(id);
  },[id])

  // GET USER 
  async function getUser(id){
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res=>setUser(res.data))
      .catch(err => console.log('err:', err))
  }


  if(!user) return (
    <div className="App">
      <button class="btn btn-primary" disabled>
        <span class="spinner-border spinner-border-sm"></span>
        Loading..
      </button>
    </div>
    )

  return (
    <div className="container">
      {/* individual DATA */}
      <h3 className="badge rounded-pill bg-primary">User Info : </h3>
      <div class="card">
        <div class="card-body">
          <h4>Username : {user.username}</h4>
          <h4>Name : {user.name}</h4>
          <h4>Email :{user.email}</h4>
          <h4>Phone : {user.phone}</h4>
          <h4>Website  : {user.website}</h4>
        </div>
      </div>
      
      {/* ADDRESS */}
      <h3 className="badge rounded-pill bg-success">ADDRESS : </h3>
      <div class="card">
        <div class="card-body">
          <h3>{user.address.street},{user.address.suit}{user.address.city},Zipcode : {user.address.zipcode}</h3>
        </div>
      </div>

      {/* COMPANY */}
      <h3 className="badge rounded-pill bg-secondary">Company : </h3>
      <div class="card">
        <div class="card-body">
          <h3>Name : {user.company.name}</h3>
          <h3>Bio : {user.company.bs}</h3>
          <h3>Fields : {user.company.catchPhrase}</h3>
        </div>
      </div>

    </div>
  )
}
