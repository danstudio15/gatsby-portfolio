import React from 'react';
import Layout from '../../components/Layout';
import YearBlock from '../../projects/my-life-in-weeks/YearBlock';

const TimestampToDays = (time) => {
    return Math.floor(time /86400000);
}

const MyLifeInWeeks = () => {

    // let inputValue = (location.state !== null) ? location.state.data[0] : new Date();
    let inputValue = "1994/10/08";
    const dob = Date.parse(inputValue);
    const date = Date.parse(new Date());
    const daysLived = TimestampToDays(date - dob);

    console.log(location.state.data[0]);

    return (
        <Layout title='MyLifeInWeeks'>
            <div>
                <YearBlock position={[0]} daysLived={daysLived}/>
                <YearBlock position={[1]} daysLived={daysLived}/>
                <YearBlock position={[2]} daysLived={daysLived}/>
                <YearBlock position={[3]} daysLived={daysLived}/>
                <YearBlock position={[4]} daysLived={daysLived}/>
                <YearBlock position={[5]} daysLived={daysLived}/>
                <YearBlock position={[6]} daysLived={daysLived}/>
                <YearBlock position={[7]} daysLived={daysLived}/>
                <YearBlock position={[8]} daysLived={daysLived}/>
            </div>
        </Layout>
    );
}
 
export default MyLifeInWeeks
