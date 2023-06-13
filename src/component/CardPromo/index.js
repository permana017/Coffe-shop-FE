import React from "react";
import "src/style/Global.css"

function CardPromo({title, desc, btn, bottom}) {
    return(
        <div className="">
            <div className="box-info-wreapper hidden md:flex">
                <div className={`info-wrapper ${bottom}`}>
                    <div className="inner">
                        <div className="box-content">
                            <div className="text-box-promo">
                                <div className="text-promo">
                                    <h2 className="w-2/3 text-2xl font-semibold">{title}</h2>
                                    <p className="desc text-left mb-0 text-base mt-5">{desc}</p>
                                </div>
                                <div className="button-promo">
                                    <button className="btn btn-primary rounded">
                                        {btn}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="box-shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPromo