import React from "react";
import { Card, Button } from 'react-bootstrap';
import '../App.css';

function Events() {
    return (
        <div className="container">
            <h2 className="page-title">Events</h2>
            <div className="event-page-container">
                <div className="event-cards">
                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src={require("../Assets/ctf.png")} />
                        <Card.Body>
                            <div className="text">This is CTF</div>
                            <Button variant="primary" href="registration_ctf">Register</Button>
                        </Card.Body>
                    </Card>
                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src={require("../Assets/hackathon.png")} />
                        <Card.Body>
                            <div className="text">This Is Hackathon</div>
                            <Button variant="primary" href="registration_hackathon">Register</Button>
                        </Card.Body>
                    </Card>
                    <Card className="event-card">
                        <Card.Img variant="top" alt="e-sports" src={require("../Assets/gaming.png")} />
                        <Card.Body>
                            <div className="text">This is E-Sports</div>
                            <Button variant="primary" href="https://shorturl.at/DRSW3">Register</Button>
                        </Card.Body>
                    </Card>
                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src={require("../Assets/mmm.png")} />
                        <Card.Body>
                            <div className="text">This is Micro Mouse Maze</div>
                            <Button variant="primary" href="registration_micromousemaze">Register</Button>
                        </Card.Body>
                    </Card>
                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src={require("../Assets/robo.png")} />
                        <Card.Body>
                            <div className="text">This is Robowars</div>
                            <Button variant="primary" href="registration_robowar">Register</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Events;
