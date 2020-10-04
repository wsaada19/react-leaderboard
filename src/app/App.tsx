import * as React from "react";
import * as ReactDOM from "react-dom";
import Leaderboard from "./components/Leaderboard";
import "./scss/index.scss";

ReactDOM.render(
  <Leaderboard
    className="wrapper"
    title={"Most Kills"}
    subtitle={"Do your best to avoid these players..."}
    headings={["Name", "Score"]}
    rows={[
      ["Will", 1005],
      ["Bill", 934],
      ["Bob", 456],
    ]}
  />,
  document.getElementById("root")
);
