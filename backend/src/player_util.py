import pandas
import os
from nba_api.stats.static import players
from nba_api.stats.endpoints import commonallplayers


PLAYERS_CSV = "players.csv"
COMMON_PLAYERS_CSV = "common_players.csv"


def start_player_csv() -> None:
    # Stores players into players.csv once
    if os.path.exists(PLAYERS_CSV):
        # print("CSV already exists")
        return

    player_list = players.get_players()

    data_frame = pandas.DataFrame(player_list)

    data_frame.to_csv(PLAYERS_CSV, index=False)


def start_common_stats_csv() -> None:
    if os.path.exists(COMMON_PLAYERS_CSV):
        return

    common_stats = commonallplayers.CommonAllPlayers()

    data_frame = common_stats.get_data_frames()[0]

    data_frame = data_frame.dropna()

    data_frame.to_csv(COMMON_PLAYERS_CSV, index=False)


def get_player_dataframe():
    data_frame = pandas.read_csv(PLAYERS_CSV)

    return data_frame


def get_common_stats_dataframe():
    data_frame = pandas.read_csv(COMMON_PLAYERS_CSV)

    return data_frame