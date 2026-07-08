from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Flask Backend is Running! - by aditya"

@app.route("/process", methods=["POST"])
def process():
    data = request.json

    return jsonify({
        "message": "Data received successfully!",
        "received_data": data
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)