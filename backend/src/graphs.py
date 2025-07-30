import plotly.express as px
import pandas as pd
from plotly.graph_objs import Figure

from player_util import start_player_csv
from player import Player
from stats import get_player_stats
from typing import List


def main():
    start_player_csv()

    pd.set_option('display.max_rows', None)
    pd.set_option('display.max_columns', None)

    compare_players_over_time(["LeBron James", "Anthony Davis", "Stephen Curry"], "BLK")


def compare_players_over_time(player_list: List[str], y_axis: str = "PTS") -> Figure | None:
    if len(player_list) < 1:
        return None

    players: List[Player] = []

    for name in player_list:
        players.append(Player(name))

    combined_df = _get_combined_data_frames(players)

    combined_df["YEAR"] = combined_df["SEASON_ID"].str[:4].astype(int)

    fig = px.line(
        combined_df,
        x="YEAR",
        y=y_axis,
        color="PLAYER_NAME",  # differentiates lines
        markers=True,
        title=f"{y_axis} per Season: {' vs '.join(player_list)}"
    )

    # Make the figure show every year with a tick of 1, and give a title
    fig.update_layout(
        xaxis=dict(tickmode="linear", dtick=1),
        yaxis_title="Total Points",
    )

    fig.show()


# Helper function to get all data frames into one pd.DataFrame
def _get_combined_data_frames(players: List[Player]) -> pd.DataFrame:
    data_frames = []

    for player in players:
        try:
            df = get_player_stats(player)
            df["PLAYER_NAME"] = player.name
            data_frames.append(df)
        except ValueError as e:
            print(f"Skipping {player.name}: {e}")

    combined_df = pd.concat(data_frames, ignore_index=True)

    return combined_df


if __name__ == "__main__":
    main()
