
import React from 'react';
import { connect } from 'react-redux'
import { getDiscoverModule } from './dynamicStore';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import Head from 'next/head'
import Header from '../../components/header';
import StaticImage from '../../components/header/StaticImage';
import DescriptionPlace from '../../components/DescriptionPlace';
import ExperienceFeaturedPlaces from '../../components/ExperienceFeaturedPlaces';
import DiscoverSingleFeature from '../../components/DiscoverSingleFeature'
import Footer from '../../components/Footer';
import actions from './actions';
import MobileHeader from '../../components/header/mobileHeader';
import HeaderFunctionComponents from '../../components/header/headerFunctionComponents';
import MobileFooter from '../../components/Footer/mobileFooter';
import HeaderBottom from '../../components/headerbottom';

function NoSSH(props) {
  if(typeof(window) === "undefined") {
    return <div>Loading....</div>
  }
  return (
    <div>
      {props.children}
    </div>
  )
}

const defaultData = [
  {
      url : '../img/experience/immagini-1.jpg',
      text: 'Mountaing Climbing With guide',
      subtext: 'Mountain'
  },
  {
      url : '../img/experience/immagini-2.jpg',
      text: 'Mountaing Climbing With guide',
      subtext: 'Mountain'
  },
  {
      url : '../img/experience/immagini-3.jpg',
      text: 'Mountaing Climbing With guide',
      subtext:'Mountain'
  }
]

class DiscoverContainer extends React.Component {

  componentDidMount() {
    this.props.fetchDiscoverPhotos();
    this.props.fetchAdditionalPhotosApi();
  }

  render() {
    return (
      <DynamicModuleLoader modules={[getDiscoverModule()]}>
        <div id="page-top">
          <Head>
            <title>Bus Tour</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MobileHeader />
          <Header />
          <HeaderFunctionComponents />
          <StaticImage title={[`Boat tour,`, `sun, lake and relaxation.`]}/>
          <div className="intro-experience">
            <DescriptionPlace 
              data={defaultData}
              leftText={[`Choose the one that best suits you from all the boat tours.`]}
              rightText={`Lorem Ipsum is a placeholder text used in the printing and printing sector. Lorem Ipsum has been considered the standard placeholder text since the sixteenth century, when an anonymous typographer took a font box and assembled them to prepare a sample text.`}
            />
          </div>
          <div className="featured-places featured-experience no-spacing-top">
            <ExperienceFeaturedPlaces
              showTitle = {false}
              imageData={defaultData}
            />
          </div>
          <div className="experience-grid">
            <DiscoverSingleFeature 
              adviceData={[{"id":8,"categoria":"BIGLIETTI","titolo":"GARDALAND","durata":"","prezzo":35.5,"url":"https://www.catchyourticket.com/img/pacchetti/P8/1.jpg","slug":"gardaland"},{"id":9,"categoria":"BIGLIETTI","titolo":"SEALIFE","durata":"","prezzo":9,"url":"https://www.catchyourticket.com/img/pacchetti/P9/1.jpg","slug":"sealife"},{"id":11,"categoria":"BIGLIETTI","titolo":"CANEVA","durata":"","prezzo":26,"url":"https://www.catchyourticket.com/img/pacchetti/P11/1.jpg","slug":"caneva"},{"id":12,"categoria":"BIGLIETTI","titolo":"GARDALAND+SEALIFE","durata":"","prezzo":40.5,"url":"https://www.catchyourticket.com/img/pacchetti/P12/1.jpg","slug":"gardalandsealife"},{"id":13,"categoria":"BIGLIETTI","titolo":"PARCO NATURA VIVA","durata":"","prezzo":20,"url":"https://www.catchyourticket.com/img/pacchetti/P13/1.jpg","slug":"parco-natura-viva"},{"id":14,"categoria":"BIGLIETTI","titolo":"AQUARDENS","durata":"","prezzo":26,"url":"https://www.catchyourticket.com/img/pacchetti/P14/1.jpg","slug":"aquardens"},{"id":16,"categoria":"BIGLIETTI","titolo":"CAVOUR - DIRECT ENTRY","durata":"","prezzo":16,"url":"https://www.catchyourticket.com/img/pacchetti/P16/1.jpg","slug":"cavour-direct-entry"},{"id":18,"categoria":"BIGLIETTI","titolo":"FUNIVIA MALCESINE","durata":"","prezzo":22,"url":"https://www.catchyourticket.com/img/pacchetti/P18/1.jpg","slug":"funivia-malcesine"},{"id":21,"categoria":"BIGLIETTI","titolo":"LEOLANDIA","durata":"","prezzo":29.5,"url":"https://www.catchyourticket.com/img/pacchetti/P21/1.jpg","slug":"leolandia"},{"id":22,"categoria":"BIGLIETTI","titolo":"MOVIELAND","durata":"","prezzo":26,"url":"https://www.catchyourticket.com/img/pacchetti/P22/1.jpg","slug":"movieland"},{"id":23,"categoria":"BIGLIETTI","titolo":"PARCO SIGURTÀ","durata":"","prezzo":10,"url":"https://www.catchyourticket.com/img/pacchetti/P23/1.jpg","slug":"parco-sigurta"},{"id":25,"categoria":"BIGLIETTI","titolo":"PARCO TERMALE DEL GARDA","durata":"","prezzo":26,"url":"https://www.catchyourticket.com/img/pacchetti/P25/1.jpg","slug":"parco-termale-del-garda"}]} 
              subHeaderText= {`All our boat tour`}
            />
          </div>
          <Footer />
          <MobileFooter />
        </div> 
       </DynamicModuleLoader>
    )
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  console.log("STATE", state);
  return {
    ...state
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiscoverPhotos: () => { dispatch(actions.fetchDiscoverPhotosApi()) },
    fetchAdditionalPhotosApi: () => {dispatch(actions.fetchAdditionalPhotosApi())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverContainer)