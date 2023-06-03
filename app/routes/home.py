from flask import Blueprint, render_template

home_blueprint = Blueprint("home", __name__)


@home_blueprint.route("/")
def home():
    return render_template("base.html")


# @views.route('/hello')
# def hello():
#     return "<h1>Hello</h1>"
