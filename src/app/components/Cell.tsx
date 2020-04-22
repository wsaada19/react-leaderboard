import * as React from 'react';

type CellProps = {
    row: (string | number)[];
    placement: number;
}

const Cell = (props : CellProps) => {
    return(
      <tr>
        <td>{props.placement + 1}</td>
        {props.row.map((element, index) => {return <td key={index}>{element}</td>})}
      </tr>
    );
}

export default Cell;