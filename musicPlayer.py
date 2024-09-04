from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Serve HTML
@app.route('/')
def index():
    return render_template('index.html')

# Serve music file
@app.route('/music/<path:filename>')
def music(filename):
    return send_from_directory(r'C:\Users\acer\OneDrive\Desktop\New folder\musicPlayer\music', filename)

if __name__ == '__main__':
    app.run(debug=True)
