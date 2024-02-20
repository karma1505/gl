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
                            <Card.Img variant="top" alt="poster" src="2.jpg" />
                            <Button variant="primary" href="registration_ctf">Register</Button>
                        </Card.Body>
                    </Card>

                    <Card className="event-card">
                        <Card.Body>
                            <Card.Img variant="top" alt="poster" src="hackathon_poster.jpg" />
                            <Button variant="primary" href="registration_hackathon">Register</Button>
                        </Card.Body>
                    </Card>

                    <Card className="event-card">
                        <Card.Body>
                            <Card.Img variant="top" alt="e-sports" src="esports_poster.jpg" />
                            <Button variant="primary" href="https://shorturl.at/DRSW3">Register</Button>
                        </Card.Body>
                    </Card>

                    <Card className="event-card">
                        <Card.Body>
                            <Card.Img variant="top" alt="poster" src={require("../Assets/mmm.jpeg")} />
                            <Button variant="primary" href="registration_micromousemaze">Register</Button>
                        </Card.Body>
                    </Card>

                    <Card className="event-card">
                        <Card.Body>
                            <Card.Img variant="top" alt="poster" src="robowar_poster.jpg" />
                            <Button variant="primary" href="registration_robowar">Register</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Events;
