import Accordion from 'react-bootstrap/Accordion';



const Subtitle = ({ subtitle }) => {


  return (
    <div>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{subtitle.title}</Accordion.Header>
        <Accordion.Body>
        <h4>Description: {subtitle.shortDescription}</h4>

      <h4 style={{display: (subtitle.totalHours)>=60?"true":"none"}}>Total Hours: {Math.floor(subtitle.totalHours/60)}hrs{subtitle.totalHours%60}min</h4>
      <h4 style={{display: (subtitle.totalHours)>=60?"none":"true"}}>Total Hours: {subtitle.totalHours%60}min</h4>


      <iframe width="480" height="360" src={subtitle.videoLink} frameBorder="0" allowFullScreen></iframe>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      

{/*
      <h1>{subtitle.title}</h1>
      <h4>Description: {subtitle.shortDescription}</h4>
      <h4>Total Hours: {subtitle.totalHours}</h4>
      <iframe width="480" height="360" src={subtitle.videoLink} frameBorder="0" allowFullScreen></iframe>

  */}
    




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
