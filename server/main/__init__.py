# -----------------------------------------------------------------------------
# File Developer: Peter Pak
# Description: Initialization script for main package
# -----------------------------------------------------------------------------

# Package Imports -------------------------------------------------------------
from flask import render_template, request, Blueprint
# -----------------------------------------------------------------------------

# Blueprint -------------------------------------------------------------------
main = Blueprint('main', __name__)
# -----------------------------------------------------------------------------

# Main Routes -----------------------------------------------------------------
@main.route('/')
def index_path():
    return render_template('index.html')
    
@main.route('/<path:path>')
def root_path(path):
    return render_template('index.html')
# -----------------------------------------------------------------------------
