import React, {useState, useEffect} from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import Posts from './Posts';
import Users from './Users';
import Comments from './Comments';

function Button() {

const [testimunial, setTestimunial] = useState("");
const [item, setItem] = useState("");
console.log(`https://jsonplaceholder.typicode.com/${testimunial}`);

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${testimunial}`)
  .then(response => response.json())
  .then(json => setItem(json))
}, [testimunial]);

    return (
      <>
      <div className='mx-auto justify-center items-center flex flex-row'>
      <button className="flex  rounded-md bg-emerald-500  justify-center items-center mt-5 w-24 pb-1 me-4 text-white" onClick={() => setTestimunial("posts")}><AiOutlineHeart className='me-1'/> Post </button>
       <button className="flex  rounded-md bg-emerald-500  justify-center items-center mt-5 w-24 pb-1 me-4 text-white" onClick={() => setTestimunial("users")}><FiUsers className='me-1'/> Usrs </button>
       <button className="flex  rounded-md bg-emerald-500  justify-center items-center mt-5 w-32 pb-1 me-4 text-white" onClick={() => setTestimunial("comments")}><AiOutlineComment className='me-1'/> Comments </button>
      </div>
      <div className='mx-10 justify-center items-center'>
      <div className="rounded-md  justify-center items-center mt-5 text-black">
        { testimunial ? 
          (testimunial === "posts" ? <Posts posts={item} /> : null) || 
          (testimunial === "users" ? <Users users={item} /> : null) ||
          (testimunial === "comments" ? <Comments comments={item} /> : null)
      : "Select any one"}

  
       </div>
      
      </div>
      </>
    )
  }
  
  export default Button