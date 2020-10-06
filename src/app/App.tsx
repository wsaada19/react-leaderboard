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
      ["Jim", 767],
      ["Tony", 711],
      ["Bob", 456],
      ["George", 409]
    ]}
    limit={3}
  />,
  document.getElementById("root")
);
