import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";

const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                <Link to="/" title="logo">
                  <h4>Made with Love</h4>
                </Link>
              </div>
              <p className="copyright-text">
                © 2024 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
