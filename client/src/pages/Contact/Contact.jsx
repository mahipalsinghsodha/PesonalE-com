import React from "react";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import "./contact.css";
const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <main className="row">
          <section className="col left">
            <div className="contactTitle">
              <h2>Get In Touch</h2>
              <p>Welcome to SHAYAR Dairy - Your Source for Pure Desi Ghee!</p>
              <p>
                Have questions about our premium clarified butter? We're here to
                help! Reach out to us for any inquiries, feedback, or
                assistance.
              </p>
            </div>

            <div className="contactInfo">
              <div className="iconGroup">
                <div className="icon">
                  <LocalPhoneIcon />
                </div>
                <div className="details">
                  <span>Phone</span>
                  <span>+91 7665 3064 03</span>
                </div>
              </div>

              <div className="iconGroup">
                <div className="icon">
                  <MarkEmailUnreadIcon />
                </div>
                <div className="details">
                  <span>Email</span>
                  <span>mssodha2510@gmail.com</span>
                </div>
              </div>

              <div className="iconGroup">
                <div className="icon">
                  <PlaceIcon />
                </div>
                <div className="details">
                  <span>Location</span>
                  <span>Khuri, Khoohdi, Jaisalmer, Rajasthan 345034</span>
                </div>
              </div>
            </div>

            <div className="socialMedia">
              <Link to="/home">
                <InstagramIcon />
              </Link>
              <Link to="/home">
                <YouTubeIcon />
              </Link>
              <Link to="/home">
                <TwitterIcon />
              </Link>
              <Link to="/home">
                <LinkedInIcon />
              </Link>
            </div>
          </section>

          <section className="col right">
            <form className="messageForm">
              <div className="inputGroup halfWidth">
                <input type="text" name="" required="required" />
                <label>Your Name</label>
              </div>

              <div className="inputGroup halfWidth">
                <input type="email" name="" required="required" />
                <label>Email</label>
              </div>

              <div className="inputGroup fullWidth">
                <input type="text" name="" required="required" />
                <label>Subject</label>
              </div>

              <div className="inputGroup fullWidth">
                <textarea required="required"></textarea>
                <label>Message</label>
              </div>

              <div className="inputGroup fullWidth">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
