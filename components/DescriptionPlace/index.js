import React from 'react';

export default function ({data={}}) {
    return (
        <div className="description-place">
            <div className="container">
                <div className="title-left-right">
                <div className="title-section">
                    <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Between history and present, </font></font><br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>a place full of emotions.</font></font></h3>
                </div>
                <div className="paragraph-section">
                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                        {data.descrizione}  
                        </font></font></p>
                </div>
                </div>
            </div>
        </div>
    );
}