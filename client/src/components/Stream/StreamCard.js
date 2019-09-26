import React, { useState } from "react";
import "./Stream.css";

function StreamCard(){
    return (
        <div className="d-flex stream-card my-3">
            <div className="vote-slice">
                {/* up/down */}
            </div>
            <div className="content-slice">
                {/* content */}
            </div>
        </div>
    )
}

export default StreamCard;