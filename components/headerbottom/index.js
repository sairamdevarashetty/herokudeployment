import React from 'react';

export default function() {
    return (
        <React.Fragment>
            <div className="header-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 offset-1">
                            <div className="search-filter">
                            <div className="item-filter">
                                <button className="filter-btn">Esperienze</button>
                                <div className="filter-poupop active" style={{display: 'block'}}>
                                <div className="filter-poupop-wrapper">
                                    <div className="filter-poupop-content">
                                    <div className="row">
                                        <div className="col-6">
                                        <div className="checkbox">
                                            <input type="checkbox" className="filter-checkbox" name="esperienze1" defaultValue="valuable" id="esperienze1" />
                                            <label htmlFor="esperienze1" />
                                            <label htmlFor="esperienze1" className="checkbox-text">Musei</label>
                                        </div>
                                        </div>
                                        <div className="col-6">
                                        <div className="checkbox">
                                            <input type="checkbox" className="filter-checkbox" name="esperienze2" defaultValue="valuable" id="esperienze2" />
                                            <label htmlFor="esperienze2" />
                                            <label htmlFor="esperienze2" className="checkbox-text">Avventure</label>
                                        </div>
                                        </div>
                                        <div className="col-6">
                                        <div className="checkbox">
                                            <input type="checkbox" className="filter-checkbox" name="esperienze3" defaultValue="valuable" id="esperienze3" />
                                            <label htmlFor="esperienze3" />
                                            <label htmlFor="esperienze3" className="checkbox-text">Disco e bar</label>
                                        </div>
                                        </div>
                                        <div className="col-6">
                                        <div className="checkbox">
                                            <input type="checkbox" className="filter-checkbox" name="esperienze4" defaultValue="valuable" id="esperienze4" />
                                            <label htmlFor="esperienze4" />
                                            <label htmlFor="esperienze4" className="checkbox-text">Per coppie</label>
                                        </div>
                                        </div>
                                        <div className="col-6">
                                        <div className="checkbox">
                                            <input type="checkbox" className="filter-checkbox" name="esperienze5" defaultValue="valuable" id="esperienze5" />
                                            <label htmlFor="esperienze5" />
                                            <label htmlFor="esperienze5" className="checkbox-text">Relax</label>
                                        </div>
                                        </div>
                                        <div className="col-6">
                                        <div className="checkbox">
                                            <input type="checkbox" className="filter-checkbox" name="esperienze6" defaultValue="valuable" id="esperienze6" />
                                            <label htmlFor="esperienze6" />
                                            <label htmlFor="esperienze6" className="checkbox-text">Sport</label>
                                        </div>
                                        </div>
                                        <div className="col-6">
                                        <div className="checkbox">
                                            <input type="checkbox" className="filter-checkbox" name="esperienze7" defaultValue="valuable" id="esperienze7" />
                                            <label htmlFor="esperienze7" />
                                            <label htmlFor="esperienze7" className="checkbox-text">Shopping</label>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="filter-footer">
                                    <div className="d-flex">
                                        <button className="remove-filter">Cancella</button>
                                        <button className="save-filter">Salva</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item-filter">
                                <button className="filter-btn option-filter">Tour in barca</button>
                            </div>
                            <div className="item-filter">
                                <button className="filter-btn option-filter">Tour in città</button>
                            </div>
                            <div className="item-filter">
                                <button className="filter-btn option-filter">Biglietti</button>
                            </div>
                            <div className="item-filter">
                                <button className="filter-btn">
                                <input id="date-search" className="datedropper-init picker-trigger" type="text" placeholder="Data" data-datedropper-id="datedropper-0" />
                                </button>
                            </div>
                            <div className="item-filter">
                                <button className="filter-btn">Prezzo</button>
                                <div className="filter-poupop" style={{display: 'none'}}>
                                <div className="filter-poupop-wrapper">
                                    <div className="filter-poupop-content">
                                    <div className="row price-filter">
                                        <div className="col-12">
                                        <div className="price-slider">
                                            <div className="price-range">
                                            <input defaultValue={0} min={0} max={400} step={1} type="range" />
                                            <input defaultValue={400} min={0} max={400} step={1} type="range" />
                                            </div>
                                            <div className="value-slider">
                                            <div className="row">
                                                <div className="col-6">
                                                <span>
                                                    <span className="label-range-price">Prezzo minimo</span>
                                                    <input type="number" defaultValue={0} min={0} max={400} />
                                                </span>
                                                </div>
                                                <div className="col-6">
                                                <span>
                                                    <span className="label-range-price">Prezzo massimo</span>
                                                    <input type="number" defaultValue={400} min={0} max={400} />
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="filter-footer">
                                    <div className="d-flex">
                                        <button className="remove-filter">Cancella</button>
                                        <button className="save-filter">Salva</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom-mobile">
                <div className="filters-mobile-btn">
                    <div className="mobile-btn-filter">
                    <button className="filter-btn-mobile btn-expe">Esperienze</button>
                    </div>
                    <div className="mobile-btn-filter">
                    <button className="filter-btn-mobile option-filter">Tour in barca</button>
                    </div>
                    <div className="mobile-btn-filter">
                    <button className="filter-btn-mobile option-filter">Tour in città</button>
                    </div>
                    <div className="mobile-btn-filter">
                    <button className="filter-btn-mobile option-filter">Biglietti</button>
                    </div>
                    <div className="mobile-btn-filter">
                    <button className="filter-btn-mobile"><input id="date-search2" className="datedropper-init picker-trigger" type="text" placeholder="Data" data-datedropper-id="datedropper-1" /></button>
                    </div>
                    <div className="mobile-btn-filter">
                    <button className="filter-btn-mobile btn-price">Prezzo</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}