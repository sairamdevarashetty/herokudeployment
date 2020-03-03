import React from 'react';

function TitleSection() {
    return (
        <div className="title-section">
            <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Organized activities to discover the wonders of Lake Garda.</font></font></h3>
            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Discover all the activities of Lake Garda, the history and the places to visit during your holiday in the numerous campsites and villages.</font></font></p>
        </div>
    )
}
const defaultData = [
    {
        url : '../img/experience/immagini-1.jpg',
        text: 'Mountaing Climbing With guide',
        subtext: 'Mountain'
    },
    {
        url : '../img/experience/immagini-2.jpg',
        text: 'Mountaing Climbing With guide',
        subtext: 'Mountain'
    },
    {
        url : '../img/experience/immagini-3.jpg',
        text: 'Mountaing Climbing With guide',
        subtext:'Mountain'
    },
    {
        url : '../img/experience/immagini-4.jpg',
        text: 'Mountaing Climbing With guide',
        subtext:'Mountain'
    },
    {
        url : '../img/experience/immagini-5.jpg',
        text: 'Mountaing Climbing With guide',
        subtext:'Mountain'
    }
]

export default function ExperienceFeaturedPlaces({ imageData = defaultData, showTitle=true }) {
   
    return (
        <div className="container">
                {
                    showTitle &&
                    <div className="title-left">
                        <TitleSection />
                    </div>
                }
                <div className="card-container">
                {
                    imageData.map((data) => (
                        <div className="item card-dummy card-dummy-big">
                            <a href="/experience-single">
                            <div className="card-photo">
                                <img src={data.url} />
                            </div>
                            <div className="card-content">
                                <div className="card-info">
                                <div className="card-title">
                                    <h5><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                            {data.text}
                                        </font></font></h5>
                                </div>
                                <div className="card-category"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.subtext}</font></font></div>
                                </div>
                            </div>
                            </a>
                        </div>
                    ))
                }
                </div>
            </div>
    )
}