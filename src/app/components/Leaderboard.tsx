import * as React from 'react';

type LeaderboardProps = {
    title: string;
    headings: string[];
    rows: (string | number)[];
}

 const Leaderboard: React.FunctionComponent<LeaderboardProps> = ({title, headings, rows}) => {
    return(
        <div className = "leaderboard">
            <table>
            <section>{title}</section>
            </table>
        </div>
    );
 }

 export default Leaderboard;