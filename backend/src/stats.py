from nba_api.stats.endpoints import playercareerstats, commonplayerinfo
from backend.src.player import Player


def get_player_stats(player: Player):
    career = playercareerstats.PlayerCareerStats(player_id=player.id)

    print(career.get_data_frames()[0])

    return career.get_data_frames()[0]


def get_common_stats(player: Player):
    common_stats = commonplayerinfo.CommonPlayerInfo(player_id=player.id)

    print(common_stats.get_data_frames()[0])

    return common_stats.get_data_frames()[0]