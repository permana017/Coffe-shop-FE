import React from 'react';
import { Navbar,Banner,Favorites,TeamWork, Store, Partner, ReviewCard, Footer} from 'src/sections';
// import { useDispatch, useSelector } from "react-redux";

function Home() {
    // const {auth} = useSelector((state)=> state);
    
    // console.log("ieu data auth page home", auth);
    return (
        <div >
            <Navbar/>
            <Banner/>
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