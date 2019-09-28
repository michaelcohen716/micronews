import React, { useState } from "react";
import upArrow from "../../assets/up-arrow.png";
import downArrow from "../../assets/down-arrow.png";
import "./Stream.css";

function StreamCard() {
  return (
    <div className="d-flex stream-card my-3">
      <div className="vote-slice d-flex flex-column">
        <div className="d-flex flex-column my-auto mx-auto">
          <img src={upArrow} className="img-fluid arrow-img" />
          <img src={downArrow} className="img-fluid arrow-img mt-3" />
        </div>
      </div>
      <div className="content-slice p-2 mx-2 d-flex flex-column">
        <div className="d-flex content-header mt-2">
          <div className="channel-title font-weight-bold">m/gaming</div>
          <div className="timestamp ml-3">Posted by Creator472 2 hours ago</div>
        </div>
        <div className="content-title mt-4">
          Counterstrike 17 is the best game ever invented
        </div>
        <div className="content-preview mt-4">
          I first discovered Counterstrike when I was 12 years old. The gameplay
          was...
        </div>
      </div>
    </div>
  );
}

export default StreamCard;
