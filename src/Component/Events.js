import React from "react";
import { Card, Button } from 'react-bootstrap';
import '../App.css';

function EventCard({ title, imageUrl, content, registerLink }) {
    return (
        <Card className="event-card">
            <div className="event-image-container">
                <Card.Img variant="top" src={imageUrl} alt={title} />
                <div className="event-text-overlay">
                    <h1>PRIZES WORTH Rs. XX000</h1>
                    <p>Register By 9 March</p>
                </div>
            </div>
            <Card.Body>
                <h1 className="text">{title}</h1>
                <p>{content}</p>
                <Button variant="primary" href={registerLink}>Register</Button>
            </Card.Body>
        </Card>
    );
}

export default function Events() {
    return (
        <div className="container black-bg"> {/* Add black-bg class */}
            <h2 className="page-title">Events</h2>
            <div className="event-page-container">
                <div className="event-cards">
                    <EventCard
                        title="CTF"
                        imageUrl={require("../Assets/ctf.png")}
                        content="Embark On A Digital Adventure, Grab That Flag, Grab Some More And Ascend The Leaderboard Throne. OUTSMART EVERYONE AND CLAIM VICTORY!"
                        registerLink="https://shorturl.at/cknK7"
                    />
                    <EventCard
                        title="HACKATHON"
                        imageUrl={require("../Assets/hackathon.png")}
                        content="Unleash Your Code, Ignite Innovation ! Join The Ultimate Hackathon Showdown Where Address Collide & Brilliance Sparks. CODE, CREATE & CONQUER!"
                        registerLink="registration_hackathon"
                    />
                    <EventCard
                        title="E-SPORTS"
                        imageUrl={require("../Assets/gaming.png")}
                        content="Level Up Your Gaming Prowess, Dominate the Digital Arena, Try For A Chicken Dinner In The World Of BGMI. Duty Calls Gamers!"
                        registerLink="https://shorturl.at/DRSW3"
                    />
                    <EventCard
                        title="ROBOWARS"
                        imageUrl={require("../Assets/robo.png")}
                        content="Craft A Fierce Robot For The Ultimate Battle , Blending Cunning Design And Control Brilliance To Conquer Adversaries In The Thrilling Arena Of Robots ."
                        registerLink="https://shorturl.at/lIKP1"
                    />
                </div>
            </div>
        </div>
    );
}
