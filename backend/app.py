from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure Gemini API
genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

# ✅ FIXED MODEL (IMPORTANT)
model = genai.GenerativeModel("gemini-1.5-flash")


# Home route (Render health check)
@app.route("/")
def home():
    return "CareerCraft AI Backend Running 🚀"


# Generate AI Resume Summary
@app.route("/generate-summary", methods=["POST"])
def generate_summary():

    try:
        data = request.get_json()

        skills = data.get("skills", "")
        projects = data.get("projects", "")

        # Input validation
        if not skills:
            return jsonify({"error": "Skills are required"}), 400

        # Prompt
        prompt = f"""
Create a professional ATS-friendly resume summary
for a software engineering student.

Skills:
{skills}

Projects:
{projects}

Make it concise, professional, and recruiter-friendly.
"""

        try:
            response = model.generate_content(prompt)

            # Safety check
            ai_summary = response.text if response and response.text else None

            if not ai_summary:
                raise Exception("Empty response from Gemini")

        except Exception as ai_error:
            print("AI ERROR:", ai_error)

            # fallback
            ai_summary = f"""
Passionate software engineering student skilled in {skills}.
Experienced in projects like {projects}.
Strong problem-solving skills and ability to build scalable applications.
"""

        return jsonify({
            "summary": ai_summary
        })

    except Exception as e:
        print("SERVER ERROR:", e)

        return jsonify({
            "error": "Backend error occurred",
            "summary": "Unable to generate summary currently."
        }), 500


# Run locally (Render will ignore this)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)