import React from "react";
import AboutImage from "../../assets/images/profile.png";

export const About = () => {
  return (
    <div>
      <div>
        <h2>About me</h2>
        <div>
          <img src={AboutImage} alt='' />
          <p>
            I am a passionate full-stack developer with a focus on building
            mordern and responsive web applications. With a strong foundation in
            both frontend and backend technologies, I strive to create seamless
            and efficient user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};
