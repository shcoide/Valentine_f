import React from "react";
import "./Home.css"; // Import your custom CSS for styling
import ProposeForm from "../components/ProposeForm";
import HeroImage from "../static/images/hero.svg";

const Home = ({ className = "" }) => (
    <header className={`hero ${className}`}>
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Afraid To <span className="text-danger">Propose</span> {" "}  Someone?
                    </h1>
                    <p className="hero-description">
                        Don’t worry, I am here to help you. Enter your valentine's name and generate a propose link.
                    </p>
                    <ProposeForm className="hero-form" />
                    <p className="hero-credit">
                        Developed by
                         <a> Elvesh bhai hee heee</a>
                    </p>
                </div>
                <div className="hero-media">
                    <img  src={HeroImage} alt="Afraid To Propose Someone?" className="hero-image" />
                </div>
            </div>
        </div>
    </header>
);

export default Home;
