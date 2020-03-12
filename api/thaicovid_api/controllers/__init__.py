from .poi import api as poi_api

def register_controller(app):
    app.register_blueprint(poi_api)