const SubtitleMap = ({subtitle}) => {
    return (
<div>

<li style={{ display: (subtitle.totalHours) >= 60 ? "true" : "none" }}>
        {subtitle.title} - Total Hours: {Math.floor(subtitle.totalHours / 60)}hrs{subtitle.totalHours % 60}min
      </li>

      <li style={{ display: (subtitle.totalHours) >= 60 ? "none" : "true" }}>
        {subtitle.title} - Total Hours: {subtitle.totalHours % 60}min
      </li>



</div>



      );
}

export default SubtitleMap