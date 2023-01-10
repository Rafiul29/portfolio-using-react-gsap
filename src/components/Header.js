import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useLineForward, useLinkDownfall } from "../hooks/gsap";

const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);


  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);

  const linkArry = [link1, link2, link3, link4];
  useLinkDownfall(linkArry);

  const lineArry=[line1,line2
  ,line3,line4,line5]

  useLineForward(lineArry)

  return (
    <div className="header container">
      <div className="row">
        <h2>
          Md R<span>a</span>fiul{" "}
        </h2>
        <h2>
          Is<span>la</span>m
        </h2>
      </div>

      <hr ref={line1} />

      <div className="row">
        <span ref={link1}>React Developer</span>
        <a
          ref={link2}
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          View Resume
        </a>
        <a ref={link3} href="mailto:rafiulislam4472@gmail.com">
          {" "}
          Send Email
        </a>
        <Link ref={link4} to="/contact">
          Contact No
        </Link>
      </div>

      <hr ref={line2} />

      <div className="row">
        <Link to="/about" className="box about">
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>Creative</h2>
        <Link to="/projects" className="box projects">
          <span>Parojects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>
      <hr ref={line3} />

      <div className="row">
        <h2>
          Re<span>a</span>ct Dev<span>el</span>oper
        </h2>
      </div>

      <hr ref={line4}/>

      <div className="row">
        <h2>Based</h2>
        <Link to="/skills" className="box skills">
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>in Bangladesh</h2>
      </div>

      <hr ref={line5} />
    </div>
  );
};

export default Header;
