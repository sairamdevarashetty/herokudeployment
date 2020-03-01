import React from 'react';
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'),{ssr:false});


export default function ExperienceInfo () {
  const data = ["../../img/offerta1.png","../../img/offerta2.png", "../../img/places/torbole-4564211_1920.jpg"];
  return (
        <div className="experience-info">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="experience-information">
                  <div className="title-left">
                    <div className="title-section">
                      <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Your experience.</font></font></h3>
                      <p>
                        <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>The tour begins along the western coast of Lake Garda, seeing characteristic and historical locations such as Gargnano (Villa Feltrinelli, Mussolini's stay), Isola del Garda up to Sirmione, with free time (2 h). </font><font style={{verticalAlign: 'inherit'}}>Departure from Sirmione to get to Bardolino, with a stop (1.5 h). </font><font style={{verticalAlign: 'inherit'}}>Departure from Bardolino with passage on Garda, Punta S. Vigilio, Torri, Malcesine and return to Limone.</font></font>
                    </p>
                    </div>
                  </div>
                  <div className="item-experience-info">
                    <div className="row">
                      <div className="col-4">
                        <div className="title-small">
                          <div className="icon">
                            <img src="../../img/places/utility/utility-6.svg" />
                          </div>
                          <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Program</font></font></h3>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="experience-info-text">
                          <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Departure every day (Saturdays excluded) from Malcesine and Limone, tour of the entire Lake Garda with a stop in Sirmione (2 hours) and a stop in Bardolino (1.5 hours). </font><font style={{verticalAlign: 'inherit'}}>Return around 5:00 pm.</font></font></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-experience-info">
                    <div className="row">
                      <div className="col-4">
                        <div className="title-small">
                          <div className="icon">
                            <img src="../../img/places/utility/utility-2.svg" />
                          </div>
                          <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>From where</font></font></h3>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="experience-info-text">
                          <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Malcesine and Limone</font></font></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-experience-info">
                    <div className="row">
                      <div className="col-4">
                        <div className="title-small">
                          <div className="icon">
                            <img src="../../img/places/utility/utility-1.svg" />
                          </div>
                          <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>When?</font></font></h3>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="experience-info-text">
                          <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Every day except Saturday</font></font></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-experience-info">
                    <div className="row">
                      <div className="col-4">
                        <div className="title-small">
                          <div className="icon">
                            <img src="../../img/places/utility/utility-5.svg" />
                          </div>
                          <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>What does it include?</font></font></h3>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="experience-info-text">
                          <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Boat tour, Free time in Sirmione and Bardolino</font></font></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="experience-order">
                    <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Choose options and add to cart.</font></font></h3>
                    <p className="subtitle-variants-order"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Choose the tour options</font></font></p>
                    <div className="items-variant-row">
                      <div className="item-variant">
                        <div className="text-variant">
                          <p className="label-variant"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>When do you want to leave?</font></font></p>
                          <p className="required-variant"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Obligatory</font></font></p>
                        </div>
                        <div className="item-wrapper-variation">
                          <input id="date-experience" className="datedropper-init picker-trigger" type="text" placeholder="Date" data-datedropper-id="datedropper-2" />
                        </div>
                      </div>
                      <div className="item-variant">
                        <div className="text-variant">
                          <p className="label-variant"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Where do you want to start from?</font></font></p>
                          <p className="required-variant"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Obligatory</font></font></p>
                        </div>
                        <div className="item-wrapper-variation">
                          <div className="cs-select cs-skin-elastic" tabIndex={0}><span className="cs-placeholder"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Select an option</font></font></span><div className="cs-options"><ul><li className="flag-france" data-option data-value="france"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Option 1</font></font></span></li><li className="flag-brazil" data-option data-value="brazil"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Option 2</font></font></span></li><li className="flag-argentina" data-option data-value="argentina"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Option 3</font></font></span></li><li className="flag-safrica" data-option data-value="south-africa"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Option 4</font></font></span></li></ul></div><select className="cs-select cs-skin-elastic">
                              <option value disabled selected>Select an option</option>
                              <option value="france" data-class="flag-france">Option 1</option>
                              <option value="brazil" data-class="flag-brazil">Option 2</option>
                              <option value="argentina" data-class="flag-argentina">Option 3</option>
                              <option value="south-africa" data-class="flag-safrica">Option 4</option>
                            </select></div></div>
                      </div>
                      <div className="item-variant">
                        <div className="text-variant">
                          <p className="label-variant"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Choose the language for the tour</font></font></p>
                          <p className="required-variant"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Obligatory</font></font></p>
                        </div>
                        <div className="item-wrapper-variation">
                          <div className="cs-select cs-skin-elastic" tabIndex={0}><span className="cs-placeholder"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Select an option</font></font></span><div className="cs-options"><ul><li className="flag-france" data-option data-value="france"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Option 1</font></font></span></li><li className="flag-brazil" data-option data-value="brazil"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Option 2</font></font></span></li><li className="flag-argentina" data-option data-value="argentina"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Option 3</font></font></span></li><li className="flag-safrica" data-option data-value="south-africa"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Option 4</font></font></span></li></ul></div><select className="cs-select cs-skin-elastic">
                              <option value disabled selected>Select an option</option>
                              <option value="france" data-class="flag-france">Option 1</option>
                              <option value="brazil" data-class="flag-brazil">Option 2</option>
                              <option value="argentina" data-class="flag-argentina">Option 3</option>
                              <option value="south-africa" data-class="flag-safrica">Option 4</option>
                            </select></div></div>
                      </div>
                      {/* <p class="subtitle-variants-order">Chi verrà?</p> */}
                      <div className="item-variant">
                        <div className="text-variant">
                          <p className="label-variant"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Number of guests</font></font></p>
                          <p className="required-variant"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Obligatory</font></font></p>
                        </div>
                        <div className="item-wrapper-variation">
                          <div className="variation-number-person">
                            <input type="text" className="person-type" placeholder="How many people?" />
                            <button className="input-toggle" />
                            <div className="person-select">
                              <div className="item-person-variation">
                                <div className="person-type-label">
                                  <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>full</font></font></p>
                                  <p className="subtitle"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>For 12 years</font></font></p>
                                </div>
                                <div className="input-group">
                                  <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" defaultValue="-" className="button-minus" data-field="quantity" /></font></font>
                                  <input type="number" step={1} max defaultValue={1} name="quantity" className="quantity-field" />
                                  <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" defaultValue="+" className="button-plus" data-field="quantity" /></font></font>
                                </div>                        
                              </div>
                              <div className="item-person-variation">
                                <div className="person-type-label">
                                  <p className="name-person-varian"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Reduced</font></font></p>
                                  <p className="subtitle"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>From 5 to 11 years</font></font></p>
                                </div>
                                <div className="input-group">
                                  <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" defaultValue="-" className="button-minus" data-field="quantity" /></font></font>
                                  <input type="number" step={1} max defaultValue={1} name="quantity" className="quantity-field" />
                                  <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" defaultValue="+" className="button-plus" data-field="quantity" /></font></font>
                                </div>                        
                              </div>
                              <div className="item-person-variation">
                                <div className="person-type-label">
                                  <p className="name-person-varian"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Free</font></font></p>
                                  <p className="subtitle"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>From 0 to 4 years</font></font></p>
                                </div>
                                <div className="input-group">
                                  <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" defaultValue="-" className="button-minus" data-field="quantity" /></font></font>
                                  <input type="number" step={1} max defaultValue={1} name="quantity" className="quantity-field" />
                                  <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" defaultValue="+" className="button-plus" data-field="quantity" /></font></font>
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
              <div className="col-12 col-lg-4">
                <div className="experience-widget" style={{}}>
                  <div className="experience-widget-inner" style={{position: 'relative'}}>

                  <OwlCarousel
                    className="owl-theme"
                    items={1}
                    loop={true}
                  >
                    {
                      data.map((imgurl) => (
                        <div className="item image-featured-experience">
                          <img src={imgurl} />
                          <div className="product-name">
                              <h5>
                                <font style={{verticalAlign: 'inherit'}}>
                                  <font style={{verticalAlign: 'inherit'}}>
                                    Lake tour from Malcesine to Limone
                                  </font>
                                </font>
                              </h5>
                          </div>
                        </div>
                      ))
                    }
                    </OwlCarousel>
                    <div className="price-info">
                      <span className="price-label"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>starting from </font></font></span><span className="price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>45 €</font></font></span>
                    </div>
                    <div className="person-price-info"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>per person</font></font></span></div>
                    <div className="info-acquisto">
                      <div className="modalita-pag">
                        <div className="label-pag">
                          <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>You can pay with</font></font></p>
                        </div>
                        <div className="img-pag">
                          <div>
                            <img src="../../img/pag/paypal.png" />
                          </div>
                          <div>
                            <img src="../../img/pag/mastercard.png" />
                          </div>
                          <div>
                            <img src="../../img/pag/visa.svg" />
                          </div>
                          <div>
                            <img src="../../img/pag/bonifico.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="aiuto-ordine">
                      <div className="icon-phone">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 67.9 74.9" style={{enableBackground: 'new 0 0 67.9 74.9'}} xmlSpace="preserve">
                          <path d="M41.9,71.4c-7.8,0-14.8-3.9-18.9-10.5L9.4,39.2c-6.1-9.8-3.8-22.6,5.4-29.6c-0.5-1.5,0.1-3.2,1.5-4.1l3.5-2.2
                          c0.6-0.4,1.2-0.5,1.9-0.5c1.2,0,2.4,0.6,3,1.7l8.1,13c0.5,0.8,0.7,1.8,0.5,2.7c-0.2,0.9-0.8,1.7-1.6,2.2l-3.5,2.2
                          c-0.6,0.4-1.2,0.5-1.9,0.5l0,0c-0.9,0-1.7-0.3-2.4-0.9c-1.2,1.7-1.4,4.1-0.2,6l13.6,21.7c1,1.6,2.7,2.5,4.6,2.5c0.3,0,0.6,0,0.9-0.1
                          c-0.2-0.6-0.2-1.2-0.1-1.9c0.2-0.9,0.8-1.7,1.6-2.2l3.5-2.2c0.6-0.4,1.2-0.5,1.9-0.5c1.2,0,2.4,0.6,3,1.7l8.1,13
                          c1,1.7,0.5,3.9-1.1,4.9l-3.5,2.2C54.9,70.1,53.1,70,52,69C48.9,70.6,45.4,71.4,41.9,71.4z M21.7,4.8c-0.3,0-0.6,0.1-0.8,0.2
                          l-3.5,2.2c-0.7,0.5-1,1.4-0.5,2.2l0.5,0.8l-0.8,0.6C7.8,17,5.4,29.1,11.1,38.2l13.6,21.7c3.7,6,10.2,9.5,17.3,9.5
                          c3.4,0,6.8-0.9,9.8-2.5l0.8-0.4l0.5,0.7c0.5,0.7,1.4,0.9,2.1,0.4l3.5-2.2c0.7-0.5,1-1.4,0.5-2.2l-8.1-13c-0.4-0.7-1.4-0.9-2.2-0.5
                          l-3.5,2.2c-0.4,0.2-0.6,0.6-0.7,1c-0.1,0.4,0,0.8,0.2,1.2l0.9,1.4l-1.1,0.4c-0.9,0.3-1.8,0.5-2.7,0.5c-2.6,0-4.9-1.3-6.3-3.5
                          L22.1,31.3c-1.9-3-1.4-6.9,1.2-9.3l0.9-0.9l0.8,1.3c0.3,0.5,0.8,0.7,1.3,0.7l0,0c0.3,0,0.6-0.1,0.8-0.2l3.5-2.2
                          c0.4-0.2,0.6-0.6,0.7-1c0.1-0.4,0-0.8-0.2-1.2L23,5.5C22.7,5.1,22.2,4.8,21.7,4.8z" />
                          <path d="M51.1,36.9c-0.1,0-0.2,0-0.3-0.1c-0.5-0.2-0.8-0.7-0.6-1.3c2.5-7.6-1.6-15.9-9.2-18.4c-0.5-0.2-0.8-0.7-0.6-1.3
                          c0.2-0.5,0.7-0.8,1.3-0.6c4.2,1.4,7.6,4.3,9.6,8.3c2,4,2.3,8.4,0.9,12.6C51.9,36.6,51.5,36.9,51.1,36.9z" />
                          <path d="M60.1,39.9c-0.1,0-0.2,0-0.3-0.1c-0.5-0.2-0.8-0.7-0.6-1.3c2-6.1,1.6-12.6-1.3-18.4S50.1,10.1,44,8
                          c-0.5-0.2-0.8-0.7-0.6-1.3c0.2-0.5,0.7-0.8,1.3-0.6c13.6,4.5,21,19.3,16.5,32.9C60.9,39.6,60.5,39.9,60.1,39.9z" />
                        </svg>
                      </div>
                      <div className="info-phone">
                        <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Need help?</font></font></p>
                        <p className="number-phone"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>+39 389 5099115</font></font></p>
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