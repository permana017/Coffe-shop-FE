import React from "react";
import "src/style/Global.css"

function CardPromo() {
    return(
        <div>
            <div className="box-info-wreapper">
                <div className="info-wrapper bottom-[-200px]">
                    <div className="inner">
                        <div className="box-content">
                            <div className="text-box-promo">
                                <div className="text-promo">
                                    <h2 className="tittle tw-250 m-0 text-2xl font-semibold">Check our promo today!</h2>
                                    <p className="desc text-left mb-0 text-base mt-5">Let's see the deals and pick yours!</p>
                                </div>
                                <div className="button-promo">
                                    <button className="btn btn-primary rounded">
                                        See Promo
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