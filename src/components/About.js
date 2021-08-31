import React from 'react';
import Face from '../images/gordon-hui.jpg';

const About = () => {
  return (
    <div className="aboutSection" id='aboutSection'>
      <h1>
        {' '}
        Hi, I am <strong>Gordon Hui</strong>
      </h1>
      <p> full-stack developer & veterinarian</p>
      <img src={Face} alt="headshot" class="facePicture" />
      <p>my narriative goes here</p>
    </div>
  );
};

export default About;
