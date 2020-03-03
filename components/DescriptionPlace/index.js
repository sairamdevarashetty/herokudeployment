import React from 'react';

export default function ({data={}, leftText, rightText, }) {
    return (
        <div className="container">
                <div className="title-left-right">
                <div className="title-section">
                    <h3>
                        {
                            leftText.map((text) => (
                                <>
                                    <font style={{verticalAlign: 'inherit'}}>
                                        <font style={{verticalAlign: 'inherit'}}>
                                            {text}
                                        </font>
                                    </font>
                                    <br />
                                </>
                            ))
                        }
                    </h3>
                </div>
                <div className="paragraph-section">
                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                        {rightText}  
                        </font>
                        </font>
                    </p>
                </div>
                </div>
            </div>
    );
}