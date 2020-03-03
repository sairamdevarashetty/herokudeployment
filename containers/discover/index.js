
import React from 'react';
import { connect } from 'react-redux'
import { getDiscoverModule } from './dynamicStore';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import Head from 'next/head'
import Header from '../../components/header';
import StaticImage from '../../components/header/StaticImage';
import FeaturedPlaces from '../../components/FeaturedPlaces';
import AdditionalPlaces from '../../components/AdditionalPlaces';
import Footer from '../../components/Footer';
import actions from './actions';
import MobileHeader from '../../components/header/mobileHeader';
import MobileFooter from '../../components/Footer/mobileFooter';
import HeaderBottom from '../../components/headerbottom';
import HeaderFunctionComponents from '../../components/header/headerFunctionComponents';

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

class DiscoverContainer extends React.Component {

  componentDidMount() {
    this.props.fetchDiscoverPhotos();
    this.props.fetchAdditionalPhotosApi();
  }

  render() {
    const { discoverState:{ discoverPhotos, additionalPhotos} = {} } = this.props;
    console.log("this.props", this.props);
    return (
      <DynamicModuleLoader modules={[getDiscoverModule()]}>
        <div id="page-top">
          <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
          <MobileHeader />
          <Header />
          <HeaderFunctionComponents />
          <StaticImage 
          title={[`Magnificent places,`,
            `unforgettable experiences.`]}
          />
          <FeaturedPlaces imagesList={discoverPhotos} />
          <AdditionalPlaces imagesList={additionalPhotos} />
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