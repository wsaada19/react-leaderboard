import * as React from "react";
import Leaderboard from "./Leaderboard";
import { TwoFields } from "./mockLeaderboardData";

const LeaderboardShowcase = () => {
  return (
    <div className="showcase">
      <h2>Leaderboard with limit of 3</h2>
      <Leaderboard
        className="wrapper"
        title={"Most Kills"}
        subtitle={"Do your best to avoid these players..."}
        headings={["Name", "Score"]}
        rows={TwoFields}
        limit={3}
      />
      <h2>Leaderboard with no limit</h2>
      <Leaderboard
        className="wrapper-2"
        title={"Most Kills"}
        subtitle={"Do your best to avoid these players..."}
        headings={["Name", "Score"]}
        rows={TwoFields}
        rowColor={"#616161"}
      />
    </div>
  );
};

export default LeaderboardShowcase;
