import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const nav=useNavigate();
  return (
    <div>
       <div>
              <ul className="list-group">
                
                <li className="list-group-item" onClick={e=>nav("/create")}>CCC </li>
                <li className="list-group-item" onClick={e=>nav("/dash")}>Dashboard</li>
                <li className="list-group-item"onClick={e=>nav("/teacherList")}>Teachers</li>
                <li className="list-group-item"onClick={e=>nav("/modal")}>Modal</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>
    </div>
  )
}

export default Navbar
