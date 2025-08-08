package com.example.demo.controller;

import com.example.demo.service.OpenAIService;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * REST controller for handling misinformation analysis requests.
 * This controller receives short-form text content (e.g., a post or headline)
 * and returns an AI-powered analysis of its sentiment, credibility, and bias.
 *
 * The endpoint is accessible from a frontend running on http://localhost:3000.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MisinformationController {


    /**
     * Endpoint to analyze a given piece of text for misinformation-related insights.
     * <p>
     * The method uses OpenAI's API to:
     * - Detect sentiment (Positive / Negative / Neutral)
     * - Rate the credibility (1 to 5)
     * - Identify cognitive bias (if present)
     * - Provide a short explanation of the bias
     * </p>
     *
     * @param body A JSON request body containing the key "text"
     * @return A map with keys:
     * - "sentiment"
     * - "credibility"
     * - "biasType"
     * - "bias"
     * or an "error" key if analysis fails.
     */
    @PostMapping("/analyze")
    public Map<String, String> analyzePost(@RequestBody Map<String, String> body) {
        String text = body.get("text");
        try {
            return OpenAIService.analyzeText(text);
        } catch (Exception e) {
            e.printStackTrace();
            return Map.of("error", e.getMessage());
        }
    }
}
