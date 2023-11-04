import React from "react";
import { Snack } from "./Snack";

export const CandidateCard = () => {
  return (
    <>
      <div>CandidateCard</div>
      <div className="frame">
        <div className="rectangle" />
        <div className="div">
          <div className="top">
            <img className="ellipse" alt="Ellipse" src="ellipse-3.png" />
            <img
              className="icon-more-horiz"
              alt="Icon more horiz"
              src="icon-more-horiz.png"
            />
          </div>
          <div className="content">
            <div className="text-wrapper">Potential Department</div>
            <div className="text-wrapper-2">Uploaded: 08-06-2023</div>
          </div>
          <div className="skill-set">
            <Snack className="snack-instance" property1="default" />
            <Snack
              className="snack-instance"
              property1="default"
              text="JavaScript"
            />
            <Snack
              className="snack-instance"
              property1="default"
              text="Flutter"
            />
            <Snack
              className="snack-instance"
              property1="default"
              text="Flutter"
            />
            <Snack
              className="snack-instance"
              property1="default"
              text="Microsoft Azure"
            />
          </div>
        </div>
      </div>
    </>
  );
};
