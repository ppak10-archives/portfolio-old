# -----------------------------------------------------------------------------
# File Developer: Peter Pak
# Description: Flask test script
# -----------------------------------------------------------------------------

# Imports ---------------------------------------------------------------------
from flask import Flask
# -----------------------------------------------------------------------------

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "<h1>Hello World</h1>"

@app.route("/about")
def about():
    return "<h1>About</h1>"

# If run from python directly and not from import
if __name__ == '__main__':
    app.run(debug=True)
