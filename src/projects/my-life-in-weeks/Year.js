import React from 'react'
import * as styles from '../../styles/mylifeinweeks.module.css';
import WeekBlock from './WeekBlock';

const Year = ({position, daysLived}) => {

  return (
    <div className={styles.year}>
        <WeekBlock position={[...position, 0]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 1]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 2]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 3]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 4]} daysLived={daysLived}/>

        <WeekBlock position={[...position, 5]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 6]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 7]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 8]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 9]} daysLived={daysLived}/>

        <WeekBlock position={[...position, 10]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 11]} daysLived={daysLived}/>
        <WeekBlock position={[...position, 12]} daysLived={daysLived}/>
    </div>
  )
}

export default Year