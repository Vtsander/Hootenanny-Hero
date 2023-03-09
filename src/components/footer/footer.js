import React, { useState, useEffect } from 'react';
import { twitter, instagram, facebook } from "react-3d-icons";
import { Icon } from "react-3d-icons";
import './footer.css';

function Footer() {
  const styles = {
    footer: {
      position: "fixed",
      bottom: "0",
      width: "100%",
      backgroundColor: "none",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      visibility: "hidden",
    },
    footerVisible: {
      visibility: "visible",
    },
    iconWrapper: {
      height: "150px",
      width: "150px",
      margin: "0 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      marginLeft: "20px",
      fontSize: "14px",
    },
  };

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer style={{ ...styles.footer, ...(visible && styles.footerVisible) }}>
      <p style={styles.text}>Connect with us on Social Media!</p>
      <div style={styles.iconWrapper}>
        <Icon file={twitter} color={"#1DA1F2"} scale={10} style={{ height: "100px", width: "100px" }} />
      </div>
      <div style={styles.iconWrapper}>
        <Icon file={instagram} color={"#C13584"} scale={10} style={{ height: "100px", width: "100px" }} />
      </div>
      <div style={styles.iconWrapper}>
        <Icon file={facebook} color={"#4267B2"} scale={10} style={{ height: "100px", width: "100px" }} />
      </div>
    </footer>
  );
}
export default Footer;