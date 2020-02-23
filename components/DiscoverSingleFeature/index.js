import React from 'react';

function Card() {
    return (
        <div className="card-dummy">
            <div className="card-photo">
                <img src="img/tabs/tabs-1.jpg" />
            </div>
            <div className="card-content">
                <div className="card-info">
                <div className="card-category"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Museum</font></font></div>
                <div className="card-title">
                    <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Verona museum</font></font></h5>
                </div>
                <div className="card-time"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>6 hours</font></font></div>
                </div>
                <div className="card-price">
                <span className="from-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>from </font></font></span><span className="price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>€ 45</font></font></span>
                </div>
            </div>
        </div>
    )
}

export default function() {
    let images = [];
    images.length = 12;
    images.fill({})
    return (
        <div className="featured-experience featured-exprience-of-place">
            <div className="container">
                <div className="title-section text-center">
                <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Let us advise you.</font></font></h3>
                </div>
                <div className="featured-grid-experience">
                    <div className="title-small">
                        <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>All the activities to do in Sirmione.</font></font></h3>
                    </div>
                    <div className="card-container">
                        {
                            images.map((data) => (
                                <Card />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
