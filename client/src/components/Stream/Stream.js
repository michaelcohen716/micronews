import React, { useState } from "react";
import StreamCard from "./StreamCard";
import "./Stream.css";

function Stream() {
  return (
    <div className="d-flex flex-column stream">
      <div className="mx-auto pr-5 d-flex flex-column mt-4">
          <StreamCard />
          <StreamCard />
      </div>
    </div>
  );
}

export default Stream;
