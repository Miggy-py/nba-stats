from flask import Flask, jsonify, request
from flask_cors import CORS
from player import Player
from typing import List, Dict
import pandas as pd
from player_util import PLAYERS_CSV

app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000"],  # Replace with your frontend URL
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})


PLAYERS_PER_PAGE = 20  # You can adjust this number


@app.route('/api/players')
def get_players():
    try:
        # Get query parameters
        page = int(request.args.get('page', 1))
        search = request.args.get('search', '').lower()

        # Read players from CSV
        df = pd.read_csv(PLAYERS_CSV)

        # Apply search filter if provided
        if search:
            df = df[df['full_name'].str.lower().str.contains(search)]

        # Calculate pagination
        total_players = len(df)
        total_pages = (total_players + PLAYERS_PER_PAGE - 1) // PLAYERS_PER_PAGE

        # Get players for current page
        start_idx = (page - 1) * PLAYERS_PER_PAGE
        end_idx = start_idx + PLAYERS_PER_PAGE
        page_df = df.iloc[start_idx:end_idx]

        # Convert to list of players
        players = []
        for _, row in page_df.iterrows():
            try:
                player = Player(row['full_name'])
                players.append(player.to_dict())
            except ValueError as e:
                print(f"Error processing player {row['full_name']}: {e}")
                continue

        return jsonify({
            'success': True,
            'players': players,
            'pagination': {
                'currentPage': page,
                'totalPages': total_pages,
                'totalPlayers': total_players
            }
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/players/stats')
def get_player_stats():
    try:
        player_name = request.args.get('name')
        if not player_name:
            return jsonify({
                'success': False,
                'error': 'Player name is required'
            }), 400

        player = Player(player_name)
        player_data = player.to_dict()

        return jsonify({
            'success': True,
            'stats': {
                'team': player_data['team'],
                'position': player_data['position'],
                'points': player_data['stats']['points'],
                'assists': player_data['stats']['assists'],
                'rebounds': player_data['stats']['rebounds']
            }
        })

    except ValueError as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 404
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')
