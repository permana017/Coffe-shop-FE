import React from "react";
import "src/sections/Partner/style.css"
import "src/style/Global.css"
import logoNetflix from "src/assets/Netflix-Logo.wine.png"
import logoReddit from "src/assets/Reddit-Logo.wine.png"
import logoAmazon from "src/assets/Amazon_(company)-Logo.wine.png"
import logoDiscord from "src/assets/Discord_(software)-Logo.wine.png"
import logoSpotify from "src/assets/Spotify-Black-Logo.wine.png"

function Partner() {
    return (
        <div>
            <section className="partner">
                <div className="container">
                    <div className="inner">
                        <h2 className="font-bold md:text-5xl text-3xl mt-10 text-center">Our Partner</h2>
                        <div className="list-partner">
                            <img src={logoNetflix} alt="Neflix"/>
                            <img src={logoReddit} alt="Reddit-Logo"/>
                            <img src={logoAmazon} alt="Amazon_"/>
                            <img src={logoDiscord} alt="Discord_"/>
                            <img src={logoSpotify} alt="Spotify-Black-Logo"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Partner