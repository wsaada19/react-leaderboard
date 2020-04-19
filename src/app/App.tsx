import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Leaderboard from './components/Leaderboard';
import './scss/index.scss';

ReactDOM.render(<Leaderboard 
                    title= {"Some Leaderboard Display"}
                    headings = {["Name", "Score"]}
                    rows = {["Will", 1]}
                     />,
        document.getElementById('root'));