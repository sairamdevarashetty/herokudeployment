import React from 'react';

function Card({ cardData }) {
    return (
        <div className="card-dummy">
            <div className="card-photo">
                <img src={cardData.url} />
            </div>
            <div className="card-content">
                <div className="card-info">
                    <div className="card-category"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{cardData.categoria}</font></font>
                    </div>
                    <div className="card-title">
                        <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{cardData.titolo}</font></font></h5>
                    </div>
                    {
                        cardData.durata ?
                        <div className="card-time"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{cardData.durata}</font></font>
                        </div>
                        :
                        <div style={{marginBottom: '10px'}}></div>    
                    }
                </div>
                <div className="card-price">
                    <span className="from-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>from </font></font></span><span className="price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>€ {cardData.prezzo}</font></font></span>
                </div>
            </div>
        </div>
    )
}

export default function({adviceData=[], data={}}) {
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
                        <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>All the activities to do in {data.nome}.</font></font></h3>
                    </div>
                    <div className="card-container">
                        {
                            adviceData.map((cardData) => (
                                <Card cardData={cardData} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
