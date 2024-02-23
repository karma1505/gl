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
                        <Card.Body>
                            <Card.Img variant="top" alt="poster" src={require("../Assets/ctf.png")} />
                        </Card.Body>
                        <Button variant="primary" href="registration_ctf">Register</Button>
                    </Card>
                    <Card className="event-card">
                        <div className="card-overlay">
                            <Card.Img variant="top" alt="poster" src={require("../Assets/hackathon.png")} />
                            <div className="overlay-text">This</div>
                        </div>
                        <Card.Body>
                            <Button variant="primary" href="registration_ctf">Register</Button>
                        </Card.Body>
                    </Card>
                    <Card className="event-card">
                        <Card.Body>
                            <Card.Img variant="top" alt="e-sports" src={require("../Assets/gaming.png")} />
                        </Card.Body>
                        <Button variant="primary" href="https://shorturl.at/DRSW3">Register</Button>
                    </Card>
                    <Card className="event-card">
                        <Card.Body>
                            <Card.Img variant="top" alt="poster" src={require("../Assets/mmm.jpg")} />
                        </Card.Body>
                        <Button variant="primary" href="registration_micromousemaze">Register</Button>
                    </Card>
                    <Card className="event-card">
                        <Card.Body>
                            <Card.Img variant="top" alt="poster" src={require("../Assets/robo.png")} />
                        </Card.Body>
                        <Button variant="primary" href="registration_robowar">Register</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Events;
