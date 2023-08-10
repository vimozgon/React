import * as React from "react";

//Подписи таблицы.
function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Время</th>
                <th>Темпертура, С</th>
                <th>Погодное явление</th>
                <th>Скорость ветра, км.ч</th>
                <th>Давление, mm Hg</th>
            </tr>
        </thead>
    );
}

export default TableHeader;