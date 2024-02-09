import React from "react";
import '../App.css';

function AboutUs() {
    return (
        <div className="container">
            <main>
                <h1 className="page-title">About Us</h1>

                <section className="content">
                    <div className="content__descriptor">
                        <p className="content__text">
                        Join us at Glitch 24, the ultimate tech fest showcasing exhilarating competitions like Robowars, Micro Mouse Maze, and CTF challenges. Immerse yourself in cutting-edge technology, innovation, and friendly competition. Explore the future of robotics, conquer coding challenges, and witness mind-bending tech battles. 
                        </p>
                    </div>

                    <div className="content__text-box">
                        <p className="content__text">
                        Unleash your skills, connect with like-minded enthusiasts, and experience the thrill of Glitch 24, where technology and talent collide for an unforgettable celebration of innovation.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;
