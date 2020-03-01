import React from 'react';

export default function BottomExperience() {
    return (
        <div className="bottom-info-experience open" style={{display: 'block'}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-12 col-md-4">
                    <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Lake tour from Malcesine to Limone.</font></font></h2>
                </div>
                <div className="col-12 col-md-8">
                    <div className="row align-items-center">
                    <div className="col-6 col-lg-7 d-flex justify-content-end flex-column flex-lg-row align-items-center">
                        <div className="total-price">
                        <h6><span className="total-label"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>starting from: </font></font></span> <span className="total-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>45 €</font></font></span></h6>
                        </div>
                        <div className="info-acquisto">
                        <div className="modalita-pag">
                            <div className="img-pag">
                            <div>
                                <img src="img/pag/paypal.png" />
                            </div>
                            <div>
                                <img src="img/pag/mastercard.png" />
                            </div>
                            <div>
                                <img src="img/pag/visa.svg" />
                            </div>
                            <div>
                                <img src="img/pag/bonifico.png" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 d-flex justify-content-end">
                        <div className="container-btn-acquista">
                        <button className="btn-acquista"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add to Cart</font></font></button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

    )
}
