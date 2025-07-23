import pandas
from player_util import PLAYERS_CSV
from typing import Dict, List, Optional
from nba_api.stats.endpoints import playercareerstats


class Player:
    def __init__(self, inputted_name: str):
        self.name, self.id = self._get_player_info(inputted_name.strip())
        self._stats_df = None
        self._current_team = None
        self._position = None
        self._age = None

    def get_player_stats(self):
        career = playercareerstats.PlayerCareerStats(player_id=self.id)
        return career.get_data_frames()[0]

    @property
    def name(self) -> str:
        return self._name

    @property
    def id(self) -> int:
        return self._id

    @name.setter
    def name(self, name: str):
        self._name = name

    @id.setter
    def id(self, id: int):
        self._id = id

    def to_dict(self) -> Dict:
        """Convert player data to dictionary matching frontend interface"""
        stats_df = self.get_player_stats()
        latest_stats = stats_df.iloc[-1] if not stats_df.empty else None

        return {
            "id": self.id,
            "full_name": self.name,
            "team": str(latest_stats["TEAM_ID"]) if latest_stats is not None else None,
            "position": self._position,
            "age": self._age,
            "stats": {
                "points": float(latest_stats["PTS"]) if latest_stats is not None else 0,
                "assists": float(latest_stats["AST"]) if latest_stats is not None else 0,
                "rebounds": float(latest_stats["REB"]) if latest_stats is not None else 0,
            },
            "history": self._get_player_history(stats_df)
        }

    def _get_player_history(self, stats_df: pandas.DataFrame) -> List[Dict]:
        """Convert player's season history to required format"""
        if stats_df.empty:
            return []

        history = []
        for _, season in stats_df.iterrows():
            history.append({
                "season": str(season["SEASON_ID"]),
                "team": str(season["TEAM_ID"]),
                "gamesPlayed": int(season["GP"]) if "GP" in season else 0
            })
        return history

    def _get_player_info(self, inputted_name) -> tuple[str, int]:
        df = pandas.read_csv(PLAYERS_CSV)
        match = df[df["full_name"].str.lower() == inputted_name.lower()]
        name = self._get_player_name(match)
        id = self._get_player_id(match)
        return (name, id)

    def _get_player_id(self, match) -> int:
        if not match.empty:
            return int(match.iloc[0]["id"])
        raise ValueError(f"Player '{self.name}' not found in cached CSV.")

    def _get_player_name(self, match) -> str:
        if not match.empty:
            return str(match.iloc[0]["full_name"])
        raise ValueError(f"Player '{self.name}' not found in cached CSV.")

    def __str__(self):
        return f"Name: {self.name}, ID: {self.id}"