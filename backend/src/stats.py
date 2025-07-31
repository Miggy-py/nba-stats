from nba_api.stats.endpoints import playercareerstats
from backend.src.player import Player


def get_player_stats(player: Player):
    career = playercareerstats.PlayerCareerStats(player_id=player.id)

    print(career.get_data_frames()[0])

    return career.get_data_frames()[0]
