﻿import React from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Fade } from "react-reveal";

export default function GithubProfileCard({prof}) {
  if (prof.hireable!==null){
    prof.hireable="Yes";
  }else{
    prof.hireable="No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
      <div className="row">
        <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <div className="opp-div">
              <span className="desc-prof">Open for opportunities: {prof.hireable}</span>
            </div>
            <SocialMedia/>
          </div>
          <div className="image-content-profile">
            <img src={prof.avatarUrl} alt={prof.name} className="profile-image"/>
          </div>
        </div>
      </div>
    </Fade>
    );
}
