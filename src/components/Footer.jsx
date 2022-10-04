import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footerContainer">
      <h2>@NjaiJerreh</h2>
      <div className="footerIcons">
        <AiFillInstagram size={50} />
        <BsYoutube size={50} />
        <FaFacebookSquare size={50} />
        <BsTwitter size={50} />
      </div>
    </div>
  );
};

export default Footer;
