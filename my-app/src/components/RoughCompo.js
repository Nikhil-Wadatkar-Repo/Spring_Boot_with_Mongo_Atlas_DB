import React from 'react'
import { useParams } from 'react-router-dom'

function RoughCompo() {
    let {id}=useParams();
  return (
    <div>RoughCompo ID:{id}</div>
  )
}

export default RoughCompo