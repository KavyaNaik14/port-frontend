import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="footer-text"
        >
          Made with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="heart-icon" size={16} />
          </motion.span>{" "}
          by Kavya J Naik
        </motion.p>

        <p className="copyright">
          © 2026 All rights reserved
        </p>

      </div>
    </footer>
  );
}


export default Footer;