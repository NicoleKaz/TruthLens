// src/components/About.js
import React from "react";
import { Container, Card } from "react-bootstrap";

// Component that displays project info and credits
const About = () => {
    return (
        <div className="bg-light min-vh-100 py-5">
            <Container className="d-flex justify-content-center">
                {/* Card containing the about content */}
                <Card style={{ maxWidth: '700px' }} className="shadow p-4">
                    <Card.Body>
                        <Card.Title className="text-primary display-6 mb-4">
                            About TruthLens
                        </Card.Title>
                        {/* Project description and course reference */}
                        <Card.Text>
                            This project was developed as part of the course <strong>"From Theory to Practice"</strong>, taught by Akash Maawia at Jerusalem Multidisciplinary College.
                            The system uses artificial intelligence to assess the reliability, bias, and sentiment of social media posts in real time.
                        </Card.Text>
                        {/* Developer names */}
                        <Card.Text className="mt-4">
                            <strong>Developers:</strong><br />
                            • Nicole Kazantsev<br />
                            • Hodaya Cohen
                        </Card.Text>


                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default About;
