import React from 'react'

function ModalDemo() {
  return (
    <div>

      <button id="myBtn">Open Modal</button>


      <div id="myModal" className="modal">


        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>

      </div>
    </div>
  )
}

export default ModalDemo
