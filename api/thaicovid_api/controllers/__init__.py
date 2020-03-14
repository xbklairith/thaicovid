from .poi import api as poi_api
from .cases import api as case_api

def register_controller(app):
    app.register_blueprint(poi_api)
    app.register_blueprint(case_api)