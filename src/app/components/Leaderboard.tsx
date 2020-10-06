import * as React from "react";
import Cell from "./Cell";
import LeaderboardNav from "./LeaderboardNav";

type LeaderboardProps = {
  title: string;
  className?: string;
  subtitle?: string;
  headings?: string[];
  rows: (string | number)[][];
  limit?: number;
};

const Leaderboard = (props: LeaderboardProps) => {
  const { title, className, subtitle, headings, rows, limit } = props;

  const [page, setPage] = React.useState(0);

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
    return rows
      .filter(
        (row, index) => index >= (page * limit) && index < (page * limit) + limit
      )
      .map((row, index) => {
        return <Cell row={row} placement={index + (page * limit)} key={index} />;
      });
  };

  const updateRow = (value: number): void => {
    setPage(value);
  };

  return (
    <div className={`leaderboard ${className}`}>
      <h2>{title}</h2>
      {subtitle ? <h3>{subtitle}</h3> : null}
      <table>
        {headings ? <thead>{getHeadingRow()}</thead> : null}
        <tbody>{getDataRow()}</tbody>
      </table>
      <LeaderboardNav
        current={page}
        total={Math.ceil(rows.length / limit)}
        onChange={updateRow}
      />
    </div>
  );
};

export default Leaderboard;
