import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from backend.src import player_util


dotenv = load_dotenv()
app = Flask(__name__, instance_relative_config=True)
CORS(app, resources={r'/*': {'origins': os.getenv('FRONTEND_HOST')}})


@app.route('/', methods=['GET'])
def player_dataframe():
    df = player_util.get_player_dataframe()

    df_as_dict = df.to_dict(orient='records')

    return jsonify(df_as_dict)


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('FLASK_PORT'))