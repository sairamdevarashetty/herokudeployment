import React from 'react';

const SearchIcon = () => (
  <div class="icon">
    <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height: 18px; width: 18px; display: block; fill: currentcolor;"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
  </div>
)

class Select extends React.Component {
    constructor() {
      super();
      this.state = {
        styleObject: {
          position: 'absolute',
          maxHeight: '300px',
          zIndex: 9999,
          display: 'none'
        },
        suggestionsList: [{}],
        selectedValue: '',
        enableSuggestions:false,
        hoverIndex: null,
        textvalue: ''
      }
    }
    
    buildOptions = () => {
      let Options = [
        {
          text1: "Peschiera",
          text2: "d",
          text3: "el gar"
        },
        {
          text1: "Peschiera",
          text2: "d",
          text3: "el gar",
          text4: "d",
          text5: "a"
        },
        {
          text1: "D",
          text2: "esenzano"
        },
      ]
      return (
        <React.Fragment>
          {
            Options.map((data, index) => {
              return (
                <div
                  className = {
                    this.state.hoverIndex === index ? "autocomplete-suggestion autocomplete-selected" : "autocomplete-suggestion" 
                  }
                  data-index={index}
                  onClick = {() => {
                    this.setState({
                      textvalue: Object.values(data).join(" "),
                      enableSuggestions: false
                    })
                  }}
                  onMouseEnter={() => { this.setState({ hoverIndex: index }) }}
                  onMouseLeave={() => {this.setState({ hoverIndex: null})}} 
                >
                  {Object.keys(data).map((optionData) => (
                    <strong>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>
                          {data[optionData]}
                        </font>
                      </font>
                    </strong>
                  ))}
                </div>
              )
            })
          }
        </React.Fragment>
      )
    }

    _handleSearch = (e) => {

      const styleObject = {...this.state.styleObject};
      if (e.currentTarget.value) {
        if (styleObject.display) {
          delete styleObject.display;
        }
        this.setState({ enableSuggestions : true, styleObject, textvalue: e.currentTarget.value });
      } else {
        styleObject.display = "none";
        this.setState({enableSuggestions : false , styleObject, textvalue: e.currentTarget.value});
      }
    }
   
    render () {
      let self = this;
      return (
        <React.Fragment>
          <div className="site-search" 
            onClick = {() => {
              console.log("self", self.state.enableSuggestions);
              self.setState({ enableSuggestions: false })
            }}
          >
            <div className="row itemsOfSearch">
              <div className="col-12">
                <div className="search-div">
                  <searchicon>
                    <input
                      value = {this.state.textvalue} 
                      placeholder="Choose a destination" 
                      type="text" 
                      name="paese1" 
                      id="autocomplete" 
                      autoComplete="off"
                      
                      onChange={this._handleSearch.bind(this) }
                    />
                    <div className="suggestions-1 suggest">
                      <div
                        className="autocomplete-suggestions"
                        style={this.state.styleObject}
                      >
                        { this.state.enableSuggestions && this.buildOptions() }
                      </div>
                    </div>
                  </searchicon>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default Select;

