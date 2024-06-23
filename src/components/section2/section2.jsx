import React from "react";
import people from "./Group.png";
import place from "./Vector.png";
import bag from "./Vector (1).png";
import calendar from "./event_available_black_24dp 2.png";

export default function Cards() {
  return (
    <div>
      <div className="row px-5 py-2">
        <div className="col-lg-2 card w-50 h-50 p-lg-5 ">
          <div className="cardHeading">
            <img src={people} alt="" />
            <h4>People</h4>
          </div>
          <p>
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist, or collaborator.
          </p>
          <button className="btn btn-default btn-light">Connect</button>
        </div>
        <div className="col-lg-2 card w-50 h-50 p-lg-5 ">
          <div className="cardHeading">
            <img src={place} alt="" />
            <h4>People</h4>
          </div>
          <p>
            Find a class, school, playground, auditorium, studio, shop, or an
            event venue. Book a slot at venues that allow booking through
            Hobbycue.
          </p>
          <button className="btn btn-default btn-light">Meet up</button>
        </div>
      </div>
      <div className="row px-5 py-2">
        <div className="col-lg-2 card w-50 h-50 p-lg-5 ">
          <div className="cardHeading">
            <img src={bag} alt="" />
            <h4>Product</h4>
          </div>
          <p>
            Find equipment or supplies required for your hobby. Buy, rent, or
            borrow from shops, online stores, or from community members.
          </p>
          <button className="btn btn-default btn-light">Get it</button>
        </div>
        <div className="col-lg-2 card w-50 h-50 p-lg-5">
          <div className="cardHeading">
            <img src={calendar} alt="" />
            <h4>Program</h4>
          </div>
          <p>
            Find events, meetups, and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <button className="btn btn-default btn-light">Attend</button>
        </div>
      </div>
    </div>
  );
}
