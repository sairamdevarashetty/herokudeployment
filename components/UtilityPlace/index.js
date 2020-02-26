import React from 'react';

export default function ({data={}}) {
    return (
        <div className="utility-place">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-12 col-lg-4">
                    <div className="title-left">
                    <div className="title-section">
                        <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Useful information.</font></font></h3>
                        <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Useful information for the tourist to insert</font></font></p>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="utility-items-wrapper">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-3">
                        <div className="utility-place__wrapper">
                            <div className="icon">
                            <img src="../../img/places/utility/utility-1.svg" />
                            </div>
                            <div className="info">
                            <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Market day</font></font></h5>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.Mercato}</font></font></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                        <div className="utility-place__wrapper">
                            <div className="icon">
                            <img src="../../img/places/utility/utility-2.svg" />
                            </div>
                            <div className="info">
                            <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Festivity</font></font></h5>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.Patrono}</font></font></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                        <div className="utility-place__wrapper">
                            <div className="icon">
                            <img src="../../img/places/utility/utility-3.svg" />
                            </div>
                            <div className="info">
                            <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Hospital</font></font></h5>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.ospedale}</font></font></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                        <div className="utility-place__wrapper">
                            <div className="icon">
                            <img src="../../img/places/utility/utility-4.svg" />
                            </div>
                            <div className="info">
                            <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Pharmacy</font></font></h5>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                    {data.farmacie}
                                </font></font></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                        <div className="utility-place__wrapper">
                            <div className="icon">
                            <img src="../../img/places/utility/utility-5.svg" />
                            </div>
                            <div className="info">
                            <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Beaches</font></font></h5>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                {` ${data.Spiaggia1} ${data.Spiaggia2} ${data.Spiaggia3} ${data.Spiaggia4} ${data.Spiaggia5}`} 
                                </font></font></p></div>
                        </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                        <div className="utility-place__wrapper">
                            <div className="icon">
                            <img src="../../img/places/utility/utility-6.svg" />
                            </div>
                            <div className="info">
                            <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Port / Station</font></font></h5>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.stazionePorto} </font></font></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                        <div className="utility-place__wrapper">
                            <div className="icon">
                            <img src="../../img/places/utility/utility-7.svg" />
                            </div>
                            <div className="info">
                            <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Where is it?</font></font></h5>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Look at the map.</font></font></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                        <div className="utility-place__wrapper">
                            <div className="icon">
                            <img src="../../img/places/utility/utility-1.svg" />
                            </div>
                            <div className="info">
                            <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Market day</font></font></h5>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Monday in Colombare and Friday in Lugana</font></font></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

    )
}