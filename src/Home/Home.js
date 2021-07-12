import React from 'react'
import Landing1 from './Landing1';
import Landing2 from './Landing2';
import Landing3 from './Landing3';
import Landing4 from './Landing4';
import Landing5 from './Landing5';
import Landing6 from './Landing6';

export default function Home() {
    return (
        <>
            <div className="background bg-img1">
                <Landing1/>
            </div>
            <div className="background bg-img2">
                <Landing2/>
            </div>
            <div className="background bg-img3">
                <Landing3/>
            </div>
            <div>
                <Landing4/>
            </div>
            <div className="bg-light-blue px-1">
                <Landing5/>
            </div>
            <div className="bg-purple px-1">
                <Landing6/>
            </div>
        </>
    )
}
