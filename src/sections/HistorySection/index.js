import React from "react";
import "src/sections/HistorySection/style.css"
import "src/style/Global.css"
import image from "src/assets/Veggie-tomato-mix.webp"

function HistoryPage() {
    return(
        <div>
            <main className="history-page">
            <section className="container">
                    <section className="desc-history">
                        <h1 className="text-label text-center mb-3">Let’s see what you have bought!</h1>
                        <p className="text-center m-0">Long press to delete item</p>
                    </section>
                    <section className="box-history">
                        <div className="card-history">
                            <img src={image} alt="Veggie-tomato-mix" width="75px" height="75px" className="rounded-full mr-10"/>
                            <div>
                                <h2 className="text-block m-0 text-2xl">Veggie tomato mix</h2>
                                <p className="text-secondary mb-0 text-xl">IDR 34.000</p>
                                <p className="text-secondary m-0 text-xl">Delivered</p>
                            </div>
                        </div>
                    </section>
            </section>
            </main>
        </div>
    )
}

export default HistoryPage