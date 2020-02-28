import React, { useState, useEffect }  from 'react';


function Title(){
    return(
        <div className="title-section text-center">
        <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Let us advise you.</font></font></h3>
        </div>
    )
}

const TitleSmall = () => (
    <div className="title-small">
        <h3>
            <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>
                    Today it's raining?
                </font>
                <font style={{verticalAlign: 'inherit'}}>No fear.</font>
            </font>
        </h3>
    </div>
)

const imageData = [
    {
        url : '../img/experience/immagini-1.jpg',
        category: 'Mountaing Climbing With guide',
        title: 'Mountain',
        time: '6 hours',
        cardPrice: ['from', '60$']
    },
    {
        url : '../img/experience/immagini-1.jpg',
        category: 'Mountaing Climbing With guide',
        title: 'Mountain',
        time: '6 hours',
        cardPrice: ['from', '60$']
    },
    {
        url : '../img/experience/immagini-1.jpg',
        category: 'Mountaing Climbing With guide',
        title: 'Mountain',
        time: '6 hours',
        cardPrice: ['from', '60$']
    },
    {
        url : '../img/experience/immagini-1.jpg',
        category: 'Mountaing Climbing With guide',
        title: 'Mountain',
        time: '6 hours',
        cardPrice: ['from', '60$']
    },
    {
        url : '../img/experience/immagini-1.jpg',
        category: 'Mountaing Climbing With guide',
        title: 'Mountain',
        time: '6 hours',
        cardPrice: ['from', '60$']
    }
]

const ExperienceBottomGrid = () => (
    <div className="featured-grid-experience">
                    <TitleSmall />
                    
                    <div className="card-container card-dummy-carousel owl-carousel owl-theme">
                        {
                            imageData.map((data) => (
                                <div className="item card-dummy">
                                <a href="/experience-single.html">
                                    <div className="card-photo">
                                    <img src="../img/experience/immagini-5.jpg" />
                                    </div>
                                    <div className="card-content">
                                    <div className="card-info">
                                        <div className="card-category"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.category}</font></font></div>
                                        <div className="card-title">
                                        <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.title}</font></font></h5>
                                        </div>
                                        <div className="card-time"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.time}</font></font></div>
                                    </div>
                                    <div className="card-price">
                                        <span className="from-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.cardPrice[0]} </font></font></span><span className="price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                           {data.cardPrice[1]}
                                        </font></font></span>
                                    </div>
                                    </div>
                                </a>
                                </div>        
                            ))
                        }
                    <div className="item card-dummy card-dummy-sponsor">
                        <div className="card-photo">
                            <img src="img/tabs/promo.jpg" />
                        </div>
                        <div className="card-content">
                            <div className="card-info">
                            <div className="card-sponsor-subtitle"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Promotional banner</font></font></div>
                            <div className="card-title">
                                <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>wwww.noleggiare.it</font></font></h5>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                 
)
export default function ExperienceBottom() {
    return (
        <div className="featured-experience bottom-spacer-padding">
            <div className="container">
                <Title />
                   <ExperienceBottomGrid />
                    <div className="spacer" />
                    <ExperienceBottomGrid/>
            </div>
            </div>
    )    
}