import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Instructions from "./components/Instructions";
import Navigation from "./components/Navigation";
import About from "./components/About";
import { useState } from "react";

// Main component: handles user input and communicates with backend
function AnalyzerPage() {
    const [text, setText] = useState(""); // User input text
    const [result, setResult] = useState(null); // Analysis result
    const [loading, setLoading] = useState(false); // Loading state

    // Sends input text to backend and handles the response
    const handleSubmit = async () => {
        setLoading(true);
        setResult(null);

        try {
            const res = await fetch("http://localhost:8080/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            const data = await res.json();
            setResult(data);
        } catch (error) {
            // In case of error, set default error response
            setResult({
                openai: "Error connecting to backend",
                sentiment: "",
                credibility: "",
                biasType:"",
                bias: ""
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-column align-items-center p-5">
            <h1 className="display-4 fw-bold mb-3">TruthLens</h1>
            <p className="text-secondary mb-4">AI-powered misinformation detection tool</p>

            <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
                {/* Text input field */}
                <textarea
                    className="form-control mb-3"
                    rows="5"
                    placeholder="Paste a post or headline here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {/* Submit button */}
                <button className="btn btn-primary w-100" onClick={handleSubmit}>
                    Analyze
                </button>
                {/* Loading indicator */}
                {loading && (
                    <div className="text-center mt-3">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2">Analyzing...</p>
                    </div>
                )}
                {/* Display results */}
                {!loading && result && (
                    <div className="alert alert-info mt-3 fade show">
                        <h5>OpenAI:</h5>
                        <p>{result.openai}</p>

                        {result.sentiment && (
                            <>
                                <h6>Sentiment:</h6>
                                <p>{result.sentiment}</p>
                            </>
                        )}

                        {result.credibility && (
                            <>
                                <h6>Credibility Score:</h6>
                                <p>{result.credibility} / 5</p>
                            </>
                        )}

                        {result.biasType && result.biasType !== "None" && (
                            <>
                                <h6>Bias Type:</h6>
                                <p>{result.biasType}</p>
                            </>
                        )}

                        {result.bias && (
                            <>
                                <h6>Bias Detected:</h6>
                                <p>{result.bias}</p>
                            </>
                        )}

                    </div>
                )}
            </div>
        </div>
    );
}

// App-level routing between home, instructions, and about pages
function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<AnalyzerPage />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}


export default App;
