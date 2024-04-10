import React from 'react';
import aboutMePDF from './Resume.pdf'

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <iframe src={aboutMePDF} width="100%" height="500px" title="About Me PDF"></iframe>
    </div>
  );
}
export default AboutMe;