import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer m-5">
        <div className="row">
          <div className="col-md-3">
            <ul style={{
                listStyleType: "none",
                textAlign: "left",
                paddingLeft: "10px"
  
            }}>
              <li>Hobbycue</li>
              <li>About us</li>
              <li>Our Services</li>
              <li>Work With Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-3">
          <ul style={{
                listStyleType: "none",
                textAlign: "left",
                paddingLeft: "10px"
  
            }}>
              <li>How Do I</li>
              <li>Sign up</li>
              <li>Add a listing</li>
              <li>Claim Listing</li>
              <li>Post a query</li>
              <li>Add a blogpost</li>
              <li>Other queries</li>
            </ul>
          </div>
          <div className="col-md-3"><ul style={{
                listStyleType: "none",
                textAlign: "left",
                paddingLeft: "10px"
  
            }}>
              <li>Quick Links</li>
              <li>Listings</li>
              <li>Our Services</li>
              <li>Blogpost</li>
              <li>Shop/Store</li>
              <li>Community</li>
            </ul></div>
          <div className="col-md-3">
          
          </div>
        </div>
      </div>
      <div className="copyright" style={{textAlign:"center"}}><p>&#169; Purple Cues Private Limited</p></div>
    </div>
  );
}
