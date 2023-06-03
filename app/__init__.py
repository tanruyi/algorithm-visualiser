from flask import Flask

# creates & runs the Flask app
def create_app():
    # create the app
    app = Flask(__name__)
    
    # set up blueprints for routing
    from .routes.home import home_blueprint
    
    app.register_blueprint(home_blueprint, url_prefix='/')
    
    return app

