from flask import Flask, flash, redirect, render_template, request, session, send_from_directory
from flask_session import Session

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/experience")
def experience():
    return render_template("experience.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

@app.route('/sitemap.xml')
def serve_sitemap():
    return send_from_directory(app.root_path, 'sitemap.xml')

@app.route('/robots.txt')
def serve_robots():
    return send_from_directory(app.root_path, 'robots.txt')

if __name__ == "__main__":
    app.run(debug=True)