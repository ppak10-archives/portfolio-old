# Flask-React-Notes Hello-World
###### Example branch of [Flask](http://flask.pocoo.org) to test basic functionality

## Documentation
1. [Getting Started](https://github.com/ppak10/Flask-React-Notes/wiki/Getting-Started)
2. [Flask Setup](https://github.com/ppak10/Flask-React-Notes/wiki/Flask-Setup)

## Basic Code Summary
### Flask is Fun
```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
```

### And Easy to Setup
```
$ pip install Flask
$ FLASK_APP=hello.py flask run
 * Running on http://localhost:5000/
```
