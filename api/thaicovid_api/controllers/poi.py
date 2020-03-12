from flask import Blueprint, jsonify
api = Blueprint('poi', __name__, url_prefix='/poi')

@api.route('')
def index():
    # Default to 200 OK
    return jsonify({'task': 'get current poi'})

