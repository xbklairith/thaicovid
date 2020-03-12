from flask import Flask, jsonify, url_for

from thaicovid_api.shared.logger import logger
from thaicovid_api.controllers import register_controller
app = Flask(__name__)

register_controller(app)

@app.route("/routes")
def list_url():
    import urllib

    output = []
    for rule in app.url_map.iter_rules():

        options = {}
        for arg in rule.arguments:
            options[arg] = "[{0}]".format(arg)

        methods = ",".join(rule.methods)
        url = url_for(rule.endpoint, **options)
        line = urllib.parse.unquote(
            "{:40s} {:20s} {:20s}".format(url, methods, rule.endpoint)
        )
        output.append(line)
    logger.info(output)
    return jsonify(output)


@app.route("/ping")
def ping():
    logger.info("Ping")
    return jsonify({"ping": "ok"})