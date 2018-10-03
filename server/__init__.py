# -----------------------------------------------------------------------------
# File Developer: Peter Pak
# Description: Initialization script for server package
# -----------------------------------------------------------------------------

# Package Imports -------------------------------------------------------------
import os
from flask import Flask
from server.config import Config

# -----------------------------------------------------------------------------

# Create Application ----------------------------------------------------------
def create_app( config_class = Config ):

    # Application Initialization ----------------------------------------------
    app = Flask(__name__)
    app.config.from_object(Config)

    # Package Imports ---------------------------------------------------------
    from server.base import base

    # Register Routes ---------------------------------------------------------
    app.register_blueprint(base)

    return app

# -----------------------------------------------------------------------------
