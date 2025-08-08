package com.example.demo.service;

import okhttp3.*;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.HashMap;
import java.util.Map;


/**
 * Service class that communicates with OpenAI's GPT model
 * to analyze the sentiment, credibility, and bias in a given social media post or headline.
 * This class is responsible for constructing the prompt, sending the request to OpenAI's API,
 * parsing the response, and returning a structured result.
 */
public class OpenAIService {

    // OpenAI API key and endpoint URL
    private static final String API_KEY = "";
    private static final String URL = "https://api.openai.com/v1/chat/completions";

    /**
     * Analyzes a given text by sending it to the OpenAI GPT-4o model.
     * The analysis includes:
     * - Sentiment (Positive, Negative, or Neutral)
     * - Credibility score (1 to 5)
     * - Bias analysis and the type of cognitive bias (if applicable)
     *
     * The GPT prompt also includes a predefined list of 24 cognitive biases to detect,
     * such as confirmation bias, anchoring, framing effect, etc.
     *
     * @param text The social media post or headline to be analyzed
     * @return A Map containing:
     *  - "sentiment": The detected sentiment
     *  - "credibility": An integer rating from 1 to 5
     *  - "biasType": The name of the matching cognitive bias (or "None")
     *  - "bias": A brief description of the bias in the content
     * @throws Exception If the request fails or the response format is invalid
     */
    public static Map<String, String> analyzeText(String text) throws Exception {
        OkHttpClient client = new OkHttpClient();

        // Construct prompt for the AI model
        String prompt = """
        Analyze the following social media post and provide:
        1. Sentiment: Positive / Negative / Neutral
        2. Credibility rating (1-5): Where 1 = very unreliable, 5 = very reliable
        3. Bias analysis: Is there any detectable bias? If yes, describe it briefly.
        4. Bias Type: If the post contains any cognitive bias from the list below, return its exact name.
                
        List of known cognitive biases to detect:
        - Anchoring
        - Sunk cost fallacy
        - Confirmation bias
        - Dunning-kruger Effect
        - Backfire Effect
        - Barnum Effect
        - Declinism
        - In-group Bias
        - Fundamental Attribution Error
        - Placebo Effect
        - Framing Effect
        - Just-world Hypothesis
        - Halo Effect
        - Bystander Effect
        - Availability Heuristic
        - Belief Bias
        - Groupthink
        - Spotlight Effect
        - Optimism Bias
        - Reactance
        - Curse Of Knowledge
        - Self-serving Bias
        - Negativity Bias
        - Pessimism Bias

        Post:
        \\"\\"\\"%s\\"\\"\\"
        
        Respond in the following JSON format:
        {
          "sentiment": "...",
          "credibility": ...,
          "biasType": "...", // name of the matching bias from the list above or "None"
          "bias": "..."
        }
        """.formatted(text);

        // Create JSON request for OpenAI API
        JSONObject json = new JSONObject();
        json.put("model", "gpt-4o");

        JSONArray messages = new JSONArray();
        messages.put(new JSONObject().put("role", "user").put("content", prompt));
        json.put("messages", messages);

        RequestBody body = RequestBody.create(
                json.toString(),
                MediaType.get("application/json")
        );

        Request request = new Request.Builder()
                .url(URL)
                .header("Authorization", "Bearer " + API_KEY)
                .header("OpenAI-Project", "proj_GVxQ6xi8W9M7MUEGlVYlUYib")
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new RuntimeException("Request failed: " + response);
            }

            // Parse JSON content from OpenAI's response
            String responseBody = response.body().string();
            JSONObject obj = new JSONObject(responseBody);
            String content = obj.getJSONArray("choices")
                    .getJSONObject(0)
                    .getJSONObject("message")
                    .getString("content")
                    .trim();

            // Extract JSON result from response string
            int start = content.indexOf("{");
            int end = content.lastIndexOf("}") + 1;
            if (start == -1 || end == -1) {
                throw new RuntimeException("Could not find JSON object in OpenAI response: " + content);
            }
            String jsonOnly = content.substring(start, end);

            // Return parsed results as a Map
            JSONObject result = new JSONObject(jsonOnly);
            Map<String, String> map = new HashMap<>();
            map.put("sentiment", result.getString("sentiment"));
            map.put("credibility", String.valueOf(result.getInt("credibility")));
            map.put("biasType", result.optString("biasType", "None"));
            map.put("bias", result.getString("bias"));
            return map;
        }
    }
}
