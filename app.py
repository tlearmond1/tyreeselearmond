from flask import Flask, render_template, request, flash, redirect
import smtplib
from email.message import EmailMessage

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        message = request.form["message"]

        try:
            msg = EmailMessage()
            msg["Subject"] = f"New Contact Message from {name}"
            msg["From"] = "tyreeselearmond@gmail.com"
            msg["To"] = "tyreeselearmond@gmail.com"
            msg.set_content(f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}")

            with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
                smtp.starttls()
                smtp.login("tyreeselearmond@gmail.com", "euwx qyuh jfki hxzo")
                smtp.send_message(msg)

            flash("Message sent successfully!", "success")
        except Exception as e:
            print(e)
            flash("An error occurred while sending the message.", "error")

        return redirect("/contact")
    return render_template("contact.html")

@app.route('/links')
def links():
    return render_template('links.html')

if __name__ == '__main__':
    app.run(debug=True)
