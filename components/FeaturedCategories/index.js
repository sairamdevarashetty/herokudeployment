import React from 'react';

export default function({data={} ,length}) {
    console.log("FEATURED CATEGORIES", data);
    const regex = /todo._gmap/g;
    const keys = Object.keys(data).join("");
    return (
        <div className="featured-categories best-things-in-places">
            <div className="container">
                <div className="title-section text-center">
                <h3><font style={{verticalAlign: 'inherit'}}>
                    <font style={{verticalAlign: 'inherit'}}>
                        {
                            data.header ?
                            data.header
                            :
                            `The ${keys.match(regex) && keys.match(regex).length} best things to do and see in ${data.nome}`                         
                        }
                    </font>
                    </font>
                </h3>
                </div>
                <div className="featured-categories-grid">
                <div className="row">
                    <div className="col-12 col-md-4">
                    <div className="card-categories">
                        <div className="card-categories-photo">
                        <img src={data.todo1_url} />
                        <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.todo1_name}</font></font></h3>
                        </div>
                        <div className="card-categories-details">
                        <p className="subtitle-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>From the remains of a Roman fortification</font></font></p>
                        <h3 className="title-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Scaliger Castle</font></font></h3>
                        <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                            {data.todo1_desc}
                        </font></font></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="card-categories">
                        <div className="card-categories-photo">
                        <img src={data.todo2_url} />
                        <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.todo2_name}</font></font></h3>
                        </div>
                        <div className="card-categories-details">
                        <p className="subtitle-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Built in the early 1st century AD</font></font></p>
                        <h3 className="title-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Caves of Catullus</font></font></h3>
                        <p className="content-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                            {data.todo2_desc}
                        </font></font></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="card-categories">
                        <a href="/percorsi-gusto.html">
                        <div className="card-categories-photo">
                            <img src={data.todo3_url} />
                            <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.todo3_name}</font></font></h3>
                        </div>
                        <div className="card-categories-details">
                            <p className="subtitle-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>One of the most popular beaches</font></font></p>
                            <h3 className="title-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Jamaica Beach</font></font></h3>
                            <p className="content-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                {data.todo3_desc}
                            </font></font></p>
                        </div>
                        </a>
                    </div>
                    </div>
                    {
                        length > 3 &&
                        <div className="col-12 col-md-4">
                            <div className="card-categories">
                                <a href="/percorsi-gusto.html">
                                <div className="card-categories-photo">
                                    <img src={data.todo4_url} />
                                    <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data.todo4_name}</font></font></h3>
                                </div>
                                <div className="card-categories-details">
                                    <p className="subtitle-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>One of the most popular beaches</font></font></p>
                                    <h3 className="title-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Jamaica Beach</font></font></h3>
                                    <p className="content-card"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                        {data.todo4_desc}
                                    </font></font></p>
                                </div>
                                </a>
                            </div>
                        </div>
                    }                    
                </div>
                </div>
            </div>
        </div>
    )
}