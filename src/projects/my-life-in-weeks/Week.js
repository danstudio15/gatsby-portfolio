import React from 'react'
import * as styles from '../../styles/mylifeinweeks.module.css';

const Week = ({position, daysLived}) => {

    const weekStartDay = (
        (position[0] * 3652.5) +
        (position[1] * 365) +
        (position[2] * 28) +
        (position[3] * 7)
    )

    let weekStyle = styles.weekEmpty;

    if (daysLived > weekStartDay) {
        weekStyle = styles.weekFilled;
    }

    return (
        <div className={weekStyle}/>
    )
}

export default Week