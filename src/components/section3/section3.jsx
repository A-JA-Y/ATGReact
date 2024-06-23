import React from 'react'
import add from './Add.png'
export default function Section3() {
  return (
    <div>
      <div className="card m-5">
        <div className="heading  ">
            <img src={add} alt="" />
            <h4>Add your own</h4>
        </div>
        <div className="paraBtn">
            <p>Are you a leader or a follower? Do you sell or rent out equipment, venue, or event tickets? Or, do you know someone who should be on hobbycue? Go ahead and add your own page.</p>
            <button className="btn btn-default btn-light">Add new</button>
        </div>

      </div>
    </div>
  )
}
