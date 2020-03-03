import React,{useState} from 'react';

const initState = {
    experiences:{
        filterName: 'experiences',
        label: 'Experiences',
        isSelected: false,
        type: 'checkbox',
        options: [
            {
                label: 'Museums',
                value: 'museums'
            },
            {
                label: 'Adventures',
                value: 'adventures'
            },
            {
                label: 'For Couples',
                value: 'forCouples'
            },
            {
                label: 'Sport',
                value: 'sport'
            },
            {
                label: 'Relax',
                value: 'relax'
            },
            {
                label: 'Shopping',
                value: 'shopping'
            },
        ],
        value: ['museums']
    },
    boattour:{
       filterName: 'boattour',
       label: 'Boat Tour',
       type: 'button',
       isSelected: false
    },
    citytour:{
        filterName: 'citytour',
        label: 'City Tour',
        type: 'button',
        isSelected: false
    },
    tickets:{
        filterName: 'tickets',
        label: 'Tickets',
        type: 'date',
        value: ''
    },
    price: {
        filterName: 'price',
        label: 'Price Range',
        type: 'range',
        minVal: 0,
        maxVal: 400
    },
}
export default function HeaderFunctionComponents () {
    const [filterObj,setFilterObj] = useState(initState);

    handleButtonClick = (fieldName, value) => {
        let newFilterObj = {
            ...filterObj
        }
        if(filterObj.fieldName.isSelected) {
            newFilterObj.fieldName.isSelected = false;
        } else {
            newFilterObj.fieldName.isSelected = true;
        }
        setFilterObj(newFilterObj)
    }

    return (
        <div className="header-bottom">
            <div className="container-fluid">
                <div className="row">
                <div className="col-11 offset-1">
                    <div className="search-filter">
                    {
                        filterList.map(({type, label, name, ...rest}) => {
                            switch(type) {
                                case 'button':
                                    return (
                                        <div className="item-filter">
                                            <button className={`filter-btn option-filter ${rest.isSelected && 'active'}`} onClick={() => handleButtonClick(name, rest.isSelected)}>
                                                <font style={{verticalAlign: 'inherit'}}>
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        {label}
                                                    </font>
                                                </font>
                                            </button>
                                        </div>
                                    )
                                    
                            }
                        })
                    } 
                    <div className="item-filter">
                        <button className="filter-btn">
                            <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Experiences</font>
                            </font>
                        </button>
                        <div className="filter-poupop active" style={{ display: 'block'}}>
                        <div className="filter-poupop-wrapper">
                            <div className="filter-poupop-content">
                            <div className="row">
                                <div className="col-6">
                                <div className="checkbox">
                                    <input type="checkbox" className="filter-checkbox" name="esperienze1" defaultValue="valuable" id="esperienze1" />
                                    <label htmlFor="esperienze1" />
                                    <label htmlFor="esperienze1" className="checkbox-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Museums</font></font></label>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="checkbox">
                                    <input type="checkbox" className="filter-checkbox" name="esperienze2" defaultValue="valuable" id="esperienze2" />
                                    <label htmlFor="esperienze2" />
                                    <label htmlFor="esperienze2" className="checkbox-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Adventures</font></font></label>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="checkbox">
                                    <input type="checkbox" className="filter-checkbox" name="esperienze3" defaultValue="valuable" id="esperienze3" />
                                    <label htmlFor="esperienze3" />
                                    <label htmlFor="esperienze3" className="checkbox-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Disco and bar</font></font></label>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="checkbox">
                                    <input type="checkbox" className="filter-checkbox" name="esperienze4" defaultValue="valuable" id="esperienze4" />
                                    <label htmlFor="esperienze4" />
                                    <label htmlFor="esperienze4" className="checkbox-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>For couples</font></font></label>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="checkbox">
                                    <input type="checkbox" className="filter-checkbox" name="esperienze5" defaultValue="valuable" id="esperienze5" />
                                    <label htmlFor="esperienze5" />
                                    <label htmlFor="esperienze5" className="checkbox-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Relax</font></font></label>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="checkbox">
                                    <input type="checkbox" className="filter-checkbox" name="esperienze6" defaultValue="valuable" id="esperienze6" />
                                    <label htmlFor="esperienze6" />
                                    <label htmlFor="esperienze6" className="checkbox-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sport</font></font></label>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="checkbox">
                                    <input type="checkbox" className="filter-checkbox" name="esperienze7" defaultValue="valuable" id="esperienze7" />
                                    <label htmlFor="esperienze7" />
                                    <label htmlFor="esperienze7" className="checkbox-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Shopping</font></font></label>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="filter-footer">
                            <div className="d-flex">
                                <button className="remove-filter"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Clear</font></font></button>
                                <button className="save-filter"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Save</font></font></button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    
                    
                    
                    <div className="item-filter">
                        <button className="filter-btn">
                        <input id="date-search" className="datedropper-init picker-trigger" type="text" placeholder="Date" data-datedropper-id="datedropper-0" />
                        </button>
                    </div>

                    <div className="item-filter">
                        <button className="filter-btn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Price</font></font></button>
                        <div className="filter-poupop active" style={{display: 'block'}}>
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
                                            <span className="label-range-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Lowest price</font></font></span>
                                            <input type="number" defaultValue={0} min={0} max={400} />
                                        </span>
                                        </div>
                                        <div className="col-6">
                                        <span>
                                            <span className="label-range-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Maximum price</font></font></span>
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
                                <button className="remove-filter"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Clear</font></font></button>
                                <button className="save-filter"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Save</font></font></button>
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

    )
}
