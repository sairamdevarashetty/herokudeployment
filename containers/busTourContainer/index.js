
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
  if (typeof(window) === "undefined") {
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
    const { discoverState = {} } = this.props;
    const additionalPhotos = discoverState.additionalPhotos || [];
    const discoverPhotos = discoverState.discoverPhotos || [];
    const busData=additionalPhotos.find((data) => (data.id===12)) || {};

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
          <StaticImage
            title={[busData.nome, busData.sottotitolo]}
            backgroundImg = {busData.url}
          />
          <div className="intro-experience">
            <DescriptionPlace 
              leftText={[busData.titolo]}
              rightText={busData.descrizione_breve}
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
              adviceData={discoverPhotos}
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