// src/components/Instructions.js
import React from "react";
import { Container, Card } from "react-bootstrap";

// Instructions page explaining how to use the TruthLens tool
const Instructions = () => {
    return (
        <div className="bg-light min-vh-100 py-5">
            <Container className="d-flex justify-content-center">
                {/* Card layout for the instructions */}
                <Card style={{ maxWidth: '800px' }} className="shadow p-4">
                    <Card.Body>
                        {/* Title */}
                        <Card.Title className="text-primary display-6 mb-4">
                            How to Use TruthLens
                        </Card.Title>
                        {/* Introductory description */}
                        <Card.Text className="mb-4">
                            <strong>TruthLens</strong> is an AI-powered tool that helps you evaluate the credibility, emotional tone, and potential bias in any social media post or headline.
                        </Card.Text>
                        {/* Step-by-step usage guide */}
                        <ul className="mb-4">
                            <li><strong>Step 1:</strong> Go to the <em>Home</em> page.</li>
                            <li><strong>Step 2:</strong> Paste a post, headline, or any short text.</li>
                            <li><strong>Step 3:</strong> Click the <em>Analyze</em> button to get instant results.</li>
                        </ul>

                        <hr />
                        {/* Explanation of result categories */}
                        <Card.Text className="fw-bold mb-2">What you’ll get:</Card.Text>
                        <ul>
                            {/* Sentiment breakdown */}
                            <li>
                                <strong>Sentiment:</strong>
                                <ul>
                                    <li><em>Positive</em> – The text expresses optimism, praise, or positive tone.</li>
                                    <li><em>Negative</em> – The text contains criticism, fear, or anger.</li>
                                    <li><em>Neutral</em> – The text is factual or emotionally neutral.</li>
                                </ul>
                            </li>
                            {/* Credibility score explanation */}
                            <li className="mt-3">
                                <strong>Credibility Score (1 to 5):</strong>
                                <ul>
                                    <li><em>1</em> – Very unreliable (misleading, conspiratorial, or lacks evidence)</li>
                                    <li><em>3</em> – Mixed or uncertain (may include speculation or vague sources)</li>
                                    <li><em>5</em> – Highly credible (informative, backed by reliable data or facts)</li>
                                </ul>
                            </li>
                            {/* Bias detection explanation */}
                            <li className="mt-3">
                                <strong>Bias Detection:</strong>
                                <ul>
                                    <li>Indicates if the post is biased and what kind of bias (e.g., political, anti-science, emotional exaggeration)</li>
                                    <li>If no bias is found, it will state: <em>"No significant bias detected."</em></li>
                                </ul>
                            </li>
                        </ul>
                        {/* Final technical notes */}
                        <Card.Text className="text-muted mt-4">
                             Works in both <strong>English</strong> and <strong>Hebrew</strong>.
                            <br />Powered by <strong>OpenAI GPT-4o</strong> for real-time, multilingual analysis.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Instructions;
