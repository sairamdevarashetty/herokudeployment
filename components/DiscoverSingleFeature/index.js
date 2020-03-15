import React from 'react';

function Card({ cardData, imageUrl }) {
    return (
        <div className="card-dummy">
            {
                imageUrl ?
                    <a href={imageUrl}>
                        <div className="card-photo">
                            <img src={cardData.url} />
                        </div>
                    </a>
                :
                    <div className="card-photo">
                        <img src={cardData.url} />
                    </div>
            }

            <div className="card-content">
                <div className="card-info">
                    <div className="card-category"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{cardData.categoria}</font></font>
                    </div>
                    <div className="card-title">
                        <h5><font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit', overflowWrap: 'break-word'}}>{cardData.titolo}</font>
                            </font>
                        </h5>
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

export default function({adviceData=[], imageUrl, headerText, subHeaderText}) {
    let images = [];
    images.length = 12;
    images.fill({})
    return (
            <div className="container">
                
                {
                    headerText &&
                    <div className="title-section text-center">
                        <h3>
                            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Let us advise you.</font></font>
                        </h3>
                    </div>
                }
                <div className="featured-grid-experience">
                    <div className="title-small">
                        {
                            subHeaderText &&
                            <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> {subHeaderText} </font></font></h3>
                        }
                    </div>
                    <div className="card-container">
                        {
                            adviceData.map((cardData) => (
                                <Card cardData={cardData} imageUrl={imageUrl} />
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}
