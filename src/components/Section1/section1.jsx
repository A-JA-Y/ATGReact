import React from "react";
import SignInComponent from "./signIn";
import "bootstrap/dist/css/bootstrap.min.css";
import peopleImage from  './people.png'
import './section1.css'


export default function Section1() {
  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-md-6">
          <div className="headlineandpara">
            <h1>
              <em>Explore your <span className="blue">hobby</span> or <span className="violet">passion</span></em>
            </h1>
            <p className="para">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops, and
              places to participate, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities. <br /> <br/> If you are an
              expert or a seller, you can add your listing and promote yourself,
              your students, products in services or events. Hop on your
              hobbyhorse and enjoy the ride.
            </p>
            <div className="photo">
            <img src={peopleImage} alt="peoplePngImage" />
                </div>
          </div>
        </div>
        <div className="col-md-6">
          <SignInComponent />
        </div>
      </div>
    </div>
  );
}
