import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from backend.src import player_util, stats
from backend.src.player import Player


player_util.start_player_csv()
dotenv = load_dotenv()
app = Flask(__name__, instance_relative_config=True)
CORS(app, resources={r'/*': {'origins': os.getenv('FRONTEND_HOST')}})


@app.route('/', methods=['GET'])
def players_dataframe():
    df = player_util.get_player_dataframe()

    df_as_dict = df.to_dict(orient='records')

    return jsonify(df_as_dict)


@app.route('/api/player', methods=['GET'])
def player_stats():
    our_player = Player("Anthony Davis")

    players_stats = stats.get_common_stats(our_player) # DF

    return jsonify(players_stats.to_dict(orient='records'))


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('FLASK_PORT'))
