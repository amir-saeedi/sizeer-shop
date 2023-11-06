import React from 'react'

function Offer({ bagHandeler }) {
    return (
        <section className='header-offer'>
            <h2 className='heading-secondary'>New Offfer</h2>
            <div className='header-offer--cards'>
                <div className="card__offer">
                    <div className="card__offer__side card__offer__side--front">
                        <div className="card__offer__picture card__offer__picture--1">
                            &nbsp;
                        </div>
                        <h4 className="card__offer__heading">
                            <span className="card__offer__heading-span card__offer__heading-span--1">90%</span>
                        </h4>
                        <div className="card__offer__details">
                            <ul>
                                <li>5 day offer</li>
                                <li>Up to 15 people</li>
                                <li>3 offer guides</li>
                                <li>Sleep in provided tents</li>
                            </ul>
                        </div>

                    </div>
                    <div className="card__offer__side card__offer__side--back card__offer__side--back-1">
                        <div className="card__offer__cta">
                            <div className="card__offer__price-box">
                                <p className="card__offer__price-only">Only</p>
                                <p className="card__offer__price-value">$897</p>
                            </div>
                            <a onClick={bagHandeler} className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
                <div className="card__offer">
                    <div className="card__offer__side card__offer__side--front">
                        <div className="card__offer__picture card__offer__picture--2">
                            &nbsp;
                        </div>
                        <h4 className="card__offer__heading">
                            <span className="card__offer__heading-span card__offer__heading-span--2">55%</span>
                        </h4>
                        <div className="card__offer__details">
                            <ul>
                                <li>5 day offer</li>
                                <li>Up to 15 people</li>
                                <li>2 offer guides</li>
                                <li>Sleep in provided tents</li>
                            </ul>
                        </div>

                    </div>
                    <div className="card__offer__side card__offer__side--back card__offer__side--back-2">
                        <div className="card__offer__cta">
                            <div className="card__offer__price-box">
                                <p className="card__offer__price-only">Only</p>
                                <p className="card__offer__price-value">$897</p>
                            </div>
                            <a onClick={bagHandeler} className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
                <div className="card__offer">
                    <div className="card__offer__side card__offer__side--front">
                        <div className="card__offer__picture card__offer__picture--3">
                            &nbsp;
                        </div>
                        <h4 className="card__offer__heading">
                            <span className="card__offer__heading-span card__offer__heading-span--3">70%</span>
                        </h4>
                        <div className="card__offer__details">
                            <ul>
                                <li>5 day offer</li>
                                <li>Up to 15 people</li>
                                <li>3 offer guides</li>
                                <li>Sleep in provided tents</li>
                            </ul>
                        </div>

                    </div>
                    <div className="card__offer__side card__offer__side--back card__offer__side--back-3">
                        <div className="card__offer__cta">
                            <div className="card__offer__price-box">
                                <p className="card__offer__price-only">Only</p>
                                <p className="card__offer__price-value">$897</p>
                            </div>
                            <a onClick={bagHandeler} className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer
