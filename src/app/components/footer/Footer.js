import React from "react";
import styles from "./styles.module.css";
import woman from "../../assets/woman.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img className={styles.woman} src={woman.src} alt="Woman programmer" />
      </div>

      <ul>
        <li>
          <a href="https://codeacademy.lt/kontaktai/">Contacts</a>
        </li>
        <li>
          <a href="https://codeacademy.lt/">About us</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
