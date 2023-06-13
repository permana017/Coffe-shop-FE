import React from 'react';
import { Navbar, Banner, Favorites, TeamWork, Store, Partner, ReviewCard, Footer } from 'src/sections';

function Home() {
    return (
        <div >
            <Navbar/>
            <div className='md:mt-[129px]'>
                <Banner/>
            </div>
            <TeamWork/>
            <Favorites/>
            <Store/>
            <Partner/>
            <ReviewCard/>
            <Footer/>
        </div>
    )
}

export default Home