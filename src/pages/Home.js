import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
  return (
    <div className="container p-5 my-5 border">
    <h1>Hello</h1>
    <p>This website using Free fake API for testing and prototyping from 
      <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a></p>
    <Link className="btn btn-outline-info btn-lg " to="/posts">go to Posts <br /></Link>
    <Link className="btn btn-outline-info btn-lg" to="/users">go to Users</Link>
    </div>
  )
}
