from flask import Blueprint, jsonify
from thaicovid_api.services.cases import show_summary_by_series
api = Blueprint('cases', __name__, url_prefix='/cases')

@api.route('/')
def index():
    # Default to 200 OK
    return jsonify({'task': 'get current poi'})

@api.route('/summary')
def summary():
    # Default to 200 OK
    result = show_summary_by_series()
    return jsonify(result)

