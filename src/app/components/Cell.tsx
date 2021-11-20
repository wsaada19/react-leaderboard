import * as React from 'react';

type CellProps = {
  row: (string | number)[];
  placement: number;
};

const Cell = ({ row, placement }: CellProps): JSX.Element => {
  return (
    <tr>
      <td>{placement + 1}</td>
      {row.map((element, index) => {
        return <td key={index}>{element}</td>;
      })}
    </tr>
  );
};

export default Cell;
