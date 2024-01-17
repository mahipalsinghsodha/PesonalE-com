// Footer.js

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css"; // Create a separate CSS module for custom styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Main Links</h3>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className={styles.section}>
          <h3>Other Links</h3>
          <div className={styles.links}>
            <Link to="/policy">Policy</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
        </div>
        <div className={styles.socialLinks}>
          {/* Add social media links/icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
