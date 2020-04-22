import * as React from 'react';
import Cell from './Cell';

type LeaderboardProps = {
    title: string;
    headings: string[];
    rows: (string | number)[][];
}

 const Leaderboard: React.FunctionComponent<LeaderboardProps> = ({title, headings, rows}) => {
const Leaderboard = (props: LeaderboardProps) => {
  const getHeadingRow = () => {
      return(
        <tr>
        <th>#</th>
        { props.headings.map((header, index) => {return <th key={index}>{header}</th>;}) }
        </tr>
      );
  }
  
  const getDataRow = () => {
      return props.rows.map((row, index) => {return <Cell row={row} placement={index} key={index} />});
  }
  
  return(
    <div className = "leaderboard">
      <h4>{props.title}</h4>
      <table>
        <thead>{getHeadingRow()}</thead>
        <tbody>{getDataRow()}</tbody>
      </table>
    </div>
    );
}

 export default Leaderboard;