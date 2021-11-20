import * as React from 'react';
import Leaderboard from './Leaderboard';
import { MockLeaderboardTable } from './mockLeaderboardData';

const LeaderboardShowcase = () => {
  return (
    <div className="showcase">
      <h2>Leaderboard with limit of 3</h2>
      <Leaderboard
        className="wrapper"
        title={'Most Wins'}
        subtitle={'The top players from this week!'}
        headings={['Name', 'Score']}
        rows={MockLeaderboardTable}
        limit={3}
      />
      <h2>Leaderboard with no limit</h2>
      <Leaderboard
        className="wrapper-2"
        title={'Most Wins'}
        subtitle={'The top players from this week!'}
        headings={['Name', 'Score']}
        rows={MockLeaderboardTable}
      />
    </div>
  );
};

export default LeaderboardShowcase;
