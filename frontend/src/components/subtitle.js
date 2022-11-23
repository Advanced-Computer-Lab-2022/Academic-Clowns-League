import { useState } from "react";

const Subtitle = ({ subtitle }) => {


  return (
    <div>
      


      <h1>{subtitle.title}</h1>
      <h4>Description: {subtitle.shortDescription}</h4>
      <h4>Total Hours: {subtitle.totalHours}</h4>
      <iframe width="480" height="360" src={subtitle.videoLink} frameborder="0" allowfullscreen></iframe>




    </div>
  );
};

export default Subtitle;

/*

<h4>{subtitle.title}</h4>
      <h4>{subtitle.videoLink}</h4>
      <h4>{subtitle.shortDescription}</h4>
      <h4>{subtitle.totalHours}</h4>
*/
