import React from 'react'
import goTop from './Group 77.png'
import peopl from './Group 99.png'

export default function Section5() {
  return (
    <div>
        <div className="heading">
            <h1><em>Your <span className="blue">Hobby</span>, Your <span className="violet">Community</span></em></h1>
            <img src={goTop} alt="" />
        </div>
        <div className="peopleImg">
            <img src={peopl} alt="" />
        </div>
      
    </div>
  )
}
