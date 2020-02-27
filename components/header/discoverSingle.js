import React from 'react';

export default function ({data={}}) {
    return (
        <section className="header-image header-place" style={{backgroundImage: data.url}}>
            <div className="container h-100">
                <div className="title-header">
                <h1><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.nome}</font></font></h1>
                </div>
                <div className="tabs-featured">
                <section className="tabs">
                    <ul className="tab-control"> 
                    <li className="tab active-tab"><h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tour</font></font></h3></li>
                    <li className="tab"><h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Experiences</font></font></h3></li>
                    </ul>
                    <div className="tab-content">
                    <div className="content active">
                        <div className="owl-carousel owl-theme carosello-tab items-tab owl-loaded">
                        <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '801px'}}><div className="owl-item active" style={{width: '266.667px'}}><div className="item-tab item">
                                <div className="item-tabs-wrapper">
                                    <img src="../img/tabs/tabs-2.jpg" />
                                    <div className="top-info">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Boat tour</font></font></p>
                                    </div>
                                    <div className="top-bottom">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Garda Island</font></font></p>
                                    </div>
                                </div>
                                </div></div><div className="owl-item active" style={{width: '266.667px'}}><div className="item-tab item">
                                <div className="item-tabs-wrapper">
                                    <img src="../img/tabs/tabs-3.jpg" />
                                    <div className="top-info">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Boat tour</font></font></p>
                                    </div>
                                    <div className="top-bottom">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Lemon and Malcesine from Riva</font></font></p>
                                    </div>
                                </div>
                                </div></div><div className="owl-item active" style={{width: '266.667px'}}><div className="item-tab item">
                                <div className="item-tabs-wrapper">
                                    <img src="../img/tabs/tabs-1.jpg" />
                                    <div className="top-info">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bus tour</font></font></p>
                                    </div>
                                    <div className="top-bottom">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Lake Tour</font></font></p>
                                    </div>
                                </div>
                                </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="previous"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>&lt;</font></font></span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>&gt;</font></font></span></button></div><div className="owl-dots disabled"><button role="button" className="owl-dot active"><span /></button></div></div>
                    </div>
                    <div className="content">
                        <div className="owl-carousel owl-theme carosello-tab items-tab owl-loaded">
                        <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '801px'}}><div className="owl-item active" style={{width: '266.667px'}}><div className="item-tab item">
                                <div className="item-tabs-wrapper">
                                    <img src="../img/tabs/tabs-6.jpg" />
                                    <div className="top-info">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Trike</font></font></p>
                                    </div>
                                    <div className="top-bottom">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Trike Tour</font></font></p>
                                    </div>
                                </div>
                                </div></div><div className="owl-item active" style={{width: '266.667px'}}><div className="item-tab item">
                                <div className="item-tabs-wrapper">
                                    <img src="../img/tabs/tabs-4.jpg" />
                                    <div className="top-info">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bike</font></font></p>
                                    </div>
                                    <div className="top-bottom">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bike Tour</font></font></p>
                                    </div>
                                </div>
                                </div></div><div className="owl-item active" style={{width: '266.667px'}}><div className="item-tab item">
                                <div className="item-tabs-wrapper">
                                    <img src="../img/tabs/tabs-5.jpg" />
                                    <div className="top-info">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tracking</font></font></p>
                                    </div>
                                    <div className="top-bottom">
                                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Lake Tour</font></font></p>
                                    </div>
                                </div>
                                </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="previous"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>&lt;</font></font></span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>&gt;</font></font></span></button></div><div className="owl-dots disabled"><button role="button" className="owl-dot active"><span /></button></div></div>
                    </div>
                    </div>
                </section>
                </div>
            </div>
            </section>
    )
}