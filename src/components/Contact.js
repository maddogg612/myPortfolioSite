import React from 'react';
import Github from '../images/contact/291716_github_logo_social network_social_icon.svg';
import Linkedin from '../images/contact/2959747_employment_business_linkedin_work_icon.svg';
import Email from '../images/contact/3586360_email_envelope_mail_send_icon.svg';

const Contact = () => {
  return (
    <div className="contactSection" id="contactSection">
      <a href="https://github.com/maddogg612" target="_blank" rel="noreferrer">
        <img src={Github} alt="github" className="contactimage" />
      </a>
      <a
        href="https://www.linkedin.com/in/gordon-hui-78453935/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" className="contactimage" />
      </a>
      <a href="email" target="_blank" rel="noreferrer">
        <img src={Email} alt="email" className="contactimage" />
      </a>
    </div>
  );
};

export default Contact;
