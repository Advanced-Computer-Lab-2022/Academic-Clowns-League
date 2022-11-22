import { useState } from "react";

const Subtitle = ({ subtitle }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div>
      <h4>{subtitle.title}</h4>
      <h4>{subtitle.videoLink}</h4>
      <h4>{subtitle.shortDescription}</h4>
      <h4>{subtitle.totalHours}</h4>
    </div>
  );
};

export default Subtitle;
