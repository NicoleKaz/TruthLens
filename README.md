# TruthLens – AI-Powered Misinformation Detection Tool

TruthLens is a web-based tool that uses artificial intelligence to detect potential bias and misinformation in short-form content like social media posts, tweets, and headlines.

This project was developed as a final assignment for the course "From Theory to Practice" at Hadassah Academic College.

## Features

- Sentiment analysis (Positive / Negative / Neutral)
- Credibility score (1–5 scale)
- Bias detection (e.g., confirmation bias, framing effect)
- Supports both English and Hebrew input
- Uses OpenAI's GPT-4o via custom prompt

## Technologies Used

- Frontend: React, Bootstrap
- Backend: Java Spring Boot
- AI API: OpenAI GPT-4o
- Version Control: Git + GitHub

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/NicoleKaz/TruthLens.git
cd TruthLens
```

### 2. Backend Setup (Spring Boot – Java)

```bash
cd demo2
./mvnw spring-boot:run
```

Make sure you have a file at:  
`src/main/resources/application.properties`

### 3. Frontend Setup (React)

Open a new terminal:

```bash
cd untitled
npm install
npm start
```

### 4. API KEY Setup
Copy the OpenAI API key from the provided Word file and paste it inside the
`OpenAIService.java` file at the variable `API_KEY`.
src/main/java/com/example/demo/service/OpenAIService.java
Paste the OpenAI API key here
private static final String API_KEY = "";

Then open your browser at:  
http://localhost:3000/

## Example Prompt and Output

**Prompt:**  
"Classify this tweet as biased or not, and explain why: 'The government always hides the truth from the people.'"

**Expected output:**
```json
{
  "sentiment": "Negative",
  "credibility": 2,
  "biasType": "Appeal to Emotion",
  "bias": "The post uses fear-based language to manipulate readers."
}
```

## Authors

Nicole Kazantsev  
Hodaya Cohen

## Course Info

Final project for "From Theory to Practice"  
Instructor: Akash Maawia  
Hadassah Academic College

## Future Improvements

- Add fact-checking APIs (e.g., Google FactCheck, ClaimReview)
- Compare outputs from multiple AI models
- Improve user interface and error handling

## GitHub

https://github.com/NicoleKaz/TruthLens
