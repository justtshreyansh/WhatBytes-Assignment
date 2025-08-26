import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
    
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=100064288398666" target="_blank" rel="noopener noreferrer">
          <Facebook size={20} />
        </a>
        <a href="https://x.com/Shreyan69951679" target="_blank" rel="noopener noreferrer">
          <Twitter size={20} />
        </a>
      </div>

      
      <div className="footer-center">
        Made with <span role="img" aria-label="love">❤️</span> by Shreyansh © 2025
      </div>

     
      <div className="footer-icons">
        <a href="https://www.instagram.com/justt_shreyansh/" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} />
        </a>
        <a href="https://www.linkedin.com/in/shreyansh-singh-697a96244/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
