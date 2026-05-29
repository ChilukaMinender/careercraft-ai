from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
import os

# Load Environment Variables
load_dotenv()

# Configure Gemini API
genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Gemini Model
model = genai.GenerativeModel("gemini-2.0-flash")

# Home Route
@app.route("/")
def home():
    return "CareerCraft AI Backend Running"


# Generate AI Resume Summary
@app.route("/generate-summary", methods=["POST"])
def generate_summary():

    try:

        data = request.get_json()

        skills = data.get("skills", "")
        projects = data.get("projects", "")

        prompt = f"""
        Create a professional ATS-friendly resume summary
        for a software engineering student.

        Skills:
        {skills}

        Projects:
        {projects}

        Keep it concise, professional, attractive,
        and recruiter-friendly.
        """

        # Try Gemini AI
        try:

            response = model.generate_content(prompt)

            ai_summary = response.text

        # Fallback Summary If API Fails
        except Exception as ai_error:

            print("AI ERROR:", ai_error)

            ai_summary = f"""
Passionate and detail-oriented software engineering student skilled in {skills}.
Experienced in developing innovative projects including {projects}.
Strong problem-solving abilities, quick learning mindset, and enthusiasm for
building modern scalable applications with real-world impact.
"""

        return jsonify({
            "summary": ai_summary
        })

    except Exception as e:

        print("SERVER ERROR:", e)

        return jsonify({
            "summary": "Unable to generate summary currently."
        })


# Run Flask App
if __name__ == "__main__":
    app.run(debug=True)