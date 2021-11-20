import * as React from 'react';
import Cell from './Cell';
import LeaderboardNav from './LeaderboardNav';

type LeaderboardProps = {
  title: string;
  className?: string;
  subtitle?: string;
  headings?: string[];
  rows: (string | number)[][];
  limit?: number;
};

const Leaderboard = ({
  title,
  className,
  subtitle,
  headings,
  rows,
  limit,
}: LeaderboardProps): JSX.Element => {
  const [page, setPage] = React.useState(0);

  const getHeadingRow = (): JSX.Element => {
    return (
      <tr>
        <th>#</th>
        {headings.map((header, index) => {
          return <th key={index}>{header}</th>;
        })}
      </tr>
    );
  };

  const getPlacement = (index: number): number => {
    return limit ? index + limit * page : index;
  };

  const getDataRow = (): JSX.Element[] => {
    const rowsToShow = limit ? rows.slice(page * limit, page * limit + limit) : rows;
    return rowsToShow.map((row, index) => {
      return <Cell row={row} placement={getPlacement(index)} key={index} />;
    });
  };

  const updateRow = (value: number): void => {
    setPage(value);
  };

  return (
    <div className={`leaderboard ${className}`}>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      <table>
        {headings && <thead>{getHeadingRow()}</thead>}
        <tbody>{getDataRow()}</tbody>
      </table>
      <LeaderboardNav total={Math.ceil(rows.length / limit)} onChange={updateRow} />
    </div>
  );
};

export default Leaderboard;
