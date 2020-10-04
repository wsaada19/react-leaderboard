import * as React from "react";
import Cell from "./Cell";

type LeaderboardProps = {
  title: string;
  className?: string;
  subtitle?: string;
  headings?: string[];
  rows: (string | number)[][];
};

const Leaderboard = (props: LeaderboardProps) => {
  const { title, className, subtitle, headings, rows } = props;

  const getHeadingRow = () => {
    return (
      <tr>
        <th>#</th>
        {headings.map((header, index) => {
          return <th key={index}>{header}</th>;
        })}
      </tr>
    );
  };

  const getDataRow = () => {
    return rows.map((row, index) => {
      return <Cell row={row} placement={index} key={index} />;
    });
  };

  return (
    <div className={`leaderboard ${className}`}>
      <h2>{title}</h2>
      {subtitle ? <h3>{subtitle}</h3> : null}
      <table>
        {headings ? <thead>{getHeadingRow()}</thead> : null}
        <tbody>{getDataRow()}</tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
