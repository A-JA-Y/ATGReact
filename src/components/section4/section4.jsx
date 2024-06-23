import React from "react";
import quote from "./quote.png";
import audio from './Audio Track.png'
import intro from './Group 108.png'

export default function Section4() {
  return (
    <div>
      <div className="testinomials m-5">
        <div
          className="headingAndImage"
          style={{
            display: "flex",
          }}
        >
          <img src={quote} alt="" />
          <h4>Testinomials</h4>
        </div>
        <p>In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com are a great service that helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
        <div className="audioAndIntro" style={{display:"flex"}}>
            <img src={audio} alt="" />
            <img src={intro} alt="" />
            
        </div>
      </div>

    </div>
  );
}
