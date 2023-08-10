import * as React from "react";
import Badge from "react-bootstrap/Badge";

//От рассета до заката. Не перепутай.
function TableInfo(props) {
    return (
        <>
            <h6>Город: <Badge bg="info">{props.name}</Badge></h6>
            <h6>Дата: <Badge bg="info">{props.date}</Badge></h6>
            <h6>Рассвет: <Badge bg="info">{props.sunrise}</Badge></h6>
            <h6>Закат: <Badge bg="info">{props.sunset}</Badge></h6>
        </>
    );
}

export default TableInfo;