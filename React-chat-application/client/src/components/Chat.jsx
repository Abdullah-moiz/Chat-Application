import React from 'react'
import querystring from 'query-string';
import io from 'socket.io-client';
import { useEffect } from 'react';
import { useState } from 'react';


let Socket;

export default function Chat() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const Endpoint = 'localhost:5000'

  // ^ to get location of current window 
  const location = window.location;

  useEffect(() => {
    const { name, room } = querystring.parse(location.search);
    Socket = io(Endpoint , {transports: ["websocket"]})
    setName(name)
    setRoom(room)
    console.log(Socket)
  }, [])

  return (
    <div>
      <h1> lets chat</h1>
    </div>
  )
}
