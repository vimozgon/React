import * as React from "react";

//Перечислим параметры время\темпа\облачность\ветер(скорость)\давление.
function TableRow(props) {
    return (
        <tr>
            <td>{props.time}</td>
            <td>{props.temperature}</td>
            <td>{props.cloud}</td>
            <td>{props.wind}</td>
            <td>{props.pressure}</td>
        </tr>
    );
}

export default TableRow;