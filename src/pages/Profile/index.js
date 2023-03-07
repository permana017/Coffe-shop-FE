import React from "react";
import ProfileSection from "src/sections/ProfileSection";
import { Navbar, Footer } from "src/sections";




function Profile() {
    return(
        <div>
            <Navbar/>
            <ProfileSection/>
            <Footer/>
        </div>
    )
}

export default Profile