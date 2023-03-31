/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Footer = () => {
  return (
    <div className="text-attributionTextColor fixed bottom-0 left-1/2 text-lg -translate-x-1/2 text-center">
      <p>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-footeTextColor"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-footeTextColor">
          Wabweni Brian
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
