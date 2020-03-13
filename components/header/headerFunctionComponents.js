import React,{useState} from 'react';
import Head from 'next/head';
const initState = {
    experiences:{
        name: 'experiences',
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
       name: 'boattour',
       label: 'Boat Tour',
       type: 'button',
       isSelected: false
    },
    citytour:{
        name: 'citytour',
        label: 'City Tour',
        type: 'button',
        isSelected: false
    },
    tickets:{
        name: 'tickets',
        label: 'Tickets',
        type: 'button',
        value: ''
    },
    date:{
        name: 'date',
        label: 'Date',
        type: 'date',
        value: ''
    },
    price: {
        name: 'price',
        label: 'Price Range',
        isSelected: false,
        type: 'range',
        minVal: 0,
        maxVal: 400
    },
}
export default function HeaderFunctionComponents () {
    const [filterObj,setFilterObj] = useState(initState);
    const handleButtonClick = (fieldName, value) => {
        let newFilterObj = {
            ...filterObj
        }
        if(filterObj[fieldName].isSelected) {
            newFilterObj[fieldName].isSelected = false;
        } else {
            newFilterObj[fieldName].isSelected = true;
        }
        setFilterObj(newFilterObj)
    }

    const handleRangeOnInput = (fieldName, minValue=0, maxValue) => {
        let newFilterObj = {
            ...filterObj
        }
        newFilterObj[fieldName].minVal = minValue;
        newFilterObj[fieldName].maxVal = maxValue;
        
        setFilterObj(newFilterObj)
    }
    const mapUI = () => {
        let results = [];
        for (let key in filterObj) {
            const {type, label, name, ...rest} = filterObj[key];
            switch(type) {
                case 'button':
                   results.push(
                        <div className="item-filter">
                            <button className={`filter-btn option-filter ${rest.isSelected && 'active'}`} onClick={() => handleButtonClick(name, rest.isSelected)}>
                                <font style={{verticalAlign: 'inherit'}}>
                                    <font style={{verticalAlign: 'inherit'}}>
                                        {label}
                                    </font>
                                </font>
                            </button>
                        </div>
                    );
                    break;
                case 'data': 
                    results.push(
                        <div className="item-filter">
                            <button className="filter-btn">
                            <input id="date-search" className="datedropper-init picker-trigger" type="text" placeholder="Date" data-datedropper-id="datedropper-0" />
                            </button>
                        </div>
                    );
                    break;
                case 'checkbox': 
                    results.push(
                        <div className="item-filter">
                            <button className="filter-btn" 
                                onClick={
                                    () => {
                                        setFilterObj({
                                            
                                            ...filterObj,
                                            [name]: {
                                                ...filterObj[name],
                                                isSelected: !filterObj[name].isSelected
                                            }
                                        })
                                    }
                                }>
                                <font style={{verticalAlign: 'inherit'}}>
                                    <font style={{verticalAlign: 'inherit'}}>{label}</font>
                                </font>
                            </button>
                            <div className={`filter-poupop ${rest.isSelected ? 'active': ''}`}style={{ display: rest.isSelected ?  'block' : 'none'}}>
                            <div className="filter-poupop-wrapper">
                                <div className="filter-poupop-content">
                                <div className="row">
                                    {
                                        rest.options.map((optionData)=>(
                                            <div className="col-6">
                                                <div className="checkbox">
                                                    <input type="checkbox" 
                                                        className="filter-checkbox"
                                                        name="esperienze1"
                                                        defaultValue="valuable" 
                                                        id="esperienze1"
                                                        selected={rest.value.includes(optionData.value)}/>
                                                    <label htmlFor="esperienze1" />
                                                    <label htmlFor="esperienze1" className="checkbox-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{optionData.label}</font></font></label>
                                                </div>
                                            </div>    
                                        ))
                                    }
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
                    )
                    break;
                case 'range':
                    results.push(
                        <div className="item-filter">
                            <button className="filter-btn"
                              onClick = {() => {
                                  setFilterObj({
                                      ...filterObj,
                                      [name]: {
                                          ...filterObj[name],
                                          isSelected: !filterObj[name].isSelected
                                      }
                                  })
                              }}
                            >
                                <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{label}</font></font></button>
                            <div className={`filter-poupop ${rest.isSelected ? 'active': ''}`} style={{display: rest.isSelected ? 'block' : ''}}>
                            <div className="filter-poupop-wrapper">
                                <div className="filter-poupop-content">
                                <div className="row price-filter">
                                    <div className="col-12">
                                    <div className="price-slider">
                                        <div className="price-range">
                                            <input defaultValue={0} min={0} max={400} step={1} type="range" onInput={(e) => { handleRangeOnInput(name,e.currentTarget.value,filterObj[name].maxVal) }}/>
                                            <input defaultValue={400} min={0} max={400} step={1} type="range" onInput={(e) => { handleRangeOnInput(name,filterObj[name].minVal,e.currentTarget.value) }}/>
                                        </div>
                                        <div className="value-slider">
                                        <div className="row">
                                            <div className="col-6">
                                            <span>
                                                <span className="label-range-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Lowest price</font></font></span>
                                                <input type="number" value={filterObj[name].minVal} defaultValue={0} min={0} max={400} />
                                            </span>
                                            </div>
                                            <div className="col-6">
                                            <span>
                                                <span className="label-range-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Maximum price</font></font></span>
                                                <input type="number" value={filterObj[name].maxVal} defaultValue={400} min={0} max={400} />
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
                    )
                    break;
                case 'date' :
                    results.push(
                        <div className="item-filter">
                            <button className="filter-btn">
                                <input id="date-search" className="datedropper-init picker-trigger" type="text" placeholder="Date" data-datedropper-id="datedropper-0" />
                            </button>
                        </div>
                    )
            }
        }
        return results;
    }


    return (
        <>
        <Head>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script type="text/javascript" src="https://cdn.datedropper.com/get/977nh5tt70j9ghcri0ezpm491mabl555"></script>
        </Head>

        <div className="header-bottom">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 offset-1">
                        <div className="search-filter">
                            {
                                mapUI()  
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
