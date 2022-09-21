import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='container h-full w-full  flex items-center justify-center flex-col'>
      <div className="container  h-3/4 w-10/12  flex items-center justify-start flex-col">
        <h1 className='p-5 my-2 text-center text-5xl '>Halal Chatting</h1>
        <p className='p-2 my-2 text-center '>Only for Halal Conversation</p>
        <div className="container shadow-lg shadow-indigo-500/50  h-96 bg-white rounded text-gray-900 w-96 border-2 flex flex-col items-center justify-center">
          <input onChange={(event) => setName(event.target.value)} type="text" className='p-2 m-4 w-80  text-xl bg-transparent border-b-2 border-gray-500 focus:outline-gray-500 focus:outline-none focus:border-none ' placeholder='Enter Your Name' />
          <input onChange={(event) => setRoom(event.target.value)} type="text" className='p-2 m-4 w-80 text-xl bg-transparent border-b-2 border-gray-500 focus:outline-none focus:outline-gray-500 focus:border-none' placeholder='Enter Room Name' />
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className='text-center bg-transparent text-xl  hover:bg-gray-500 hover:border-gray-500  hover:text-white cursor-pointer transition-all duration-2000 p-3 rounded-md my-4  border-2 w-36' type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
