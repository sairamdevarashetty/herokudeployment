import React from 'react';

export default function AllCategories () {
    const data = ['Food', 'Sport', 'Climbing', 'Music', 'Couples', 'Disc']
    return (
        <div class="all-categories">
            <div class="container">

            <div className="title-small">
                <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>All activities.</font></font></h3>
                </div>

            <div class="white-box-category">
                <div class="row">
                {
                    data.map((type) => (
                        <div className="col-6 col-md-2">
                        <div className="white-box-wrapper">
                          <h4><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{type}</font></font></h4>
                        </div>
                      </div>
                      
                    ))
                }
                
            
                </div>
            </div>
            </div>
        </div>
    )
}

