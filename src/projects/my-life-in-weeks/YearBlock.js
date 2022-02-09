import React from 'react'
import * as styles from '../../styles/mylifeinweeks.module.css';
import Year from './Year';

const YearBlock = ({position, daysLived}) => {

  return (
    <div className={styles.yearBlock}>
        <Year position={[...position, 0]} daysLived={daysLived}/>
        <Year position={[...position, 1]} daysLived={daysLived}/>
        <Year position={[...position, 2]} daysLived={daysLived}/>
        <Year position={[...position, 3]} daysLived={daysLived}/>
        <Year position={[...position, 4]} daysLived={daysLived}/>

        <Year position={[...position, 5]} daysLived={daysLived}/>
        <Year position={[...position, 6]} daysLived={daysLived}/>
        <Year position={[...position, 7]} daysLived={daysLived}/>
        <Year position={[...position, 8]} daysLived={daysLived}/>
        <Year position={[...position, 9]} daysLived={daysLived}/>
    </div>
  )
}

export default YearBlock