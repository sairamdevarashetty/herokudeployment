import React from 'react';
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'),{ssr:false});

function TitleHeader () {
    return (
        <div className="title-header">
            <p className="subtitle"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Boat tour</font></font></p>
            <h1><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Lake tour from </font></font><br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Malcesine to Limone.</font></font></h1>
        </div>
    )
}

export default function ExperienceSingleHeader () {
    const data = {
        imagesList :['../../img/single-places/sirmione.jpg', '../../img/single-places/sirmione.jpg']
    };
    return (
        <section className="header-carousel-experience">
            <OwlCarousel
                loop
                dots={true}
                responsive={{
                    0 : {
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:1
                    }
                }}
            >
                {
                    data.imagesList.map((imgData) => (
                        <div className="item item-header-experience">
                            <section className="header-image header-experience" style={{backgroundImage: `url(${imgData})`}}>
                            </section>
                        </div>
                    ))
                }
            </OwlCarousel>

            {/* <div className="carousel-experience__init owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{ transform: 'translate3d(-3357px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '10073px' }}><div className="owl-item cloned" style={{ width: '1678.75px' }}>
                        
                    </div>
                        <div className="owl-item cloned" style={{ width: '1678.75px' }}>
                            <div className="item item-header-experience">
                                <section className="header-image header-experience" style={{ backgroundImage: 'url(/img/single-places/sirmione.jpg)' }}>
                                </section>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '1678.75px' }}>
                            <div className="item item-header-experience">
                                <section className="header-image header-experience" style={{ backgroundImage: 'url(/img/single-places/sirmione.jpg)' }}>
                                </section>
                            </div>
                        </div><div className="owl-item" style={{ width: '1678.75px' }}>
                            <div className="item item-header-experience">
                                <section className="header-image header-experience" style={{ backgroundImage: 'url(/img/single-places/sirmione.jpg)' }}>
                                </section>
                            </div>
                        </div><div className="owl-item cloned" style={{ width: '1678.75px' }}>
                            <div className="item item-header-experience">
                                <section className="header-image header-experience" style={{ backgroundImage: 'url(/img/single-places/sirmione.jpg)' }}>
                                </section>
                            </div>
                        </div><div className="owl-item cloned" style={{ width: '1678.75px' }}>
                            <div className="item item-header-experience">
                                <section className="header-image header-experience" style={{ backgroundImage: 'url(/img/single-places/sirmione.jpg)' }}>
                                </section>
                            </div>
                        </div></div></div>
                <div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="previous"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>&lt;</font></font></span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>&gt;</font></font></span></button></div>
                <div className="owl-dots"><button role="button" className="owl-dot active"><span /></button><button role="button" className="owl-dot"><span /></button></div>
            </div>
             */}
            <TitleHeader />
        </section>
    )
}