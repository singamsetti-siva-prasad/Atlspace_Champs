import React from "react";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";
import Connect from "./connectbutton";
import Onramper from "../onramper/onramper";
export default function Navbar() {
  return (
    <>
      <div>
        <nav id="menu">
          <input type="checkbox" id="responsive-menu" />
          <label></label>
          <span className="sl-container">
            <img className="sl-logo" src={require("./logo.png")} alt="" />
          </span>
          <ul>
            <Connect />
            <Onramper />
            <li>
              <a
                href="http://enteraltspace.com/"
                target="_blank"
                className="link"
              >
                Company
              </a>
            </li>

            <li>
              <HashLink smooth to="/#faq" className="link">
                Faq
              </HashLink>{" "}
            </li>
            <li>
              <HashLink smooth to="/#team" className="link">
                Team
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" className="link">
                About
              </HashLink>{" "}
            </li>
            <li>
              <HashLink smooth to="/#home" className="link">
                Home
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
