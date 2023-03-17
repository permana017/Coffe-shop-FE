import React from "react";
import "src/sections/Partner/style.css"
import "src/style/Global.css"
import logoNetflix from "src/assets/Netflix-Logo.wine.png"
import logoReddit from "src/assets/Reddit-Logo.wine.png"
import logoAmazon from "src/assets/Amazon_(company)-Logo.wine.png"
import logoDiscord from "src/assets/Discord_(software)-Logo.wine.png"
import logoSpotify from "src/assets/Spotify-Black-Logo.wine.png"
import Fade from 'react-reveal/Fade';


function Partner() {
    return (
        <div>
            <section className="partner">
                <div className="container">
                    <div className="inner">
                        <Fade bottom >
                            <h2 className="font-bold md:text-5xl text-3xl mt-10 text-center">Our Partner</h2>
                        </Fade>
                        <div className="list-partner">
                            <Fade bottom>
                                <img src={logoNetflix} alt="Neflix"/>
                            </Fade>
                            <Fade bottom delay={200}>
                                <img src={logoReddit} alt="Reddit-Logo"/>
                            </Fade>
                            <Fade bottom delay={400}>
                                <img src={logoAmazon} alt="Amazon_"/>
                            </Fade>
                            <Fade bottom delay={600}>
                                <img src={logoDiscord} alt="Discord_"/>
                            </Fade>
                            <Fade bottom delay={800}>
                                <img src={logoSpotify} alt="Spotify-Black-Logo"/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Partner