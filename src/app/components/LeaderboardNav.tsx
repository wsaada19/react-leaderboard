import * as React from 'react';

type LeaderboardNavProps = {
  total: number;
  onChange: (value: number) => void;
};

const LeaderboardNav = (props: LeaderboardNavProps) => {
  const { total, onChange } = props;

  const getPages = () => {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < total; i++) {
      elements.push(
        <li value={i} onClick={() => onChange(i)} key={i}>
          {i + 1}
        </li>
      );
    }
    return elements;
  };

  return <ul>{getPages()}</ul>;
};

export default LeaderboardNav;
