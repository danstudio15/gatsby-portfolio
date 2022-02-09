import React from 'react'
import * as styles from '../../styles/mylifeinweeks.module.css';
import Week from './Week';

const WeekBlock = ({position, daysLived}) => {

  return (
    <div className={styles.weekBlock}>
        <Week position={[...position, 0]} daysLived={daysLived}/>
        <Week position={[...position, 1]} daysLived={daysLived}/>
        <Week position={[...position, 2]} daysLived={daysLived}/>
        <Week position={[...position, 3]} daysLived={daysLived}/>
    </div>
  )
}

export default WeekBlock