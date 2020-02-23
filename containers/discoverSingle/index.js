
import React from 'react';
import { connect } from 'react-redux'
import { getDiscoverSingleModule } from './dynamicStore';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import Head from 'next/head'
import DiscoverSingleHeader from '../../components/header/discoverSingle';
import DescriptionPlace from '../../components/DescriptionPlace';
import FeaturedCategories  from '../../components/FeaturedCategories';
import UtilityPlace from '../../components/UtilityPlace';
import Footer from '../../components/Footer';
import DiscoverSingleFeature from '../../components/DiscoverSingleFeature'
// import actions from './actions';

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

class DiscoverSingleContainer extends React.Component {

  componentDidMount() {
    // this.props.fetchDiscoverPhotos();
    // this.props.fetchAdditionalPhotosApi();
  }

  render() {
    const { discoverState:{ discoverPhotos, additionalPhotos} = {} } = this.props;
    console.log("this.props", this.props);
    return (
      <DynamicModuleLoader modules={[getDiscoverSingleModule()]}>
        <div id="page-top">
          <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
          <DiscoverSingleHeader />
          <DescriptionPlace />
          <FeaturedCategories />
          <UtilityPlace />
          <DiscoverSingleFeature />
          <Footer />
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
    // fetchDiscoverPhotos: () => { dispatch(actions.fetchDiscoverPhotosApi()) },
    // fetchAdditionalPhotosApi: () => {dispatch(actions.fetchAdditionalPhotosApi())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverSingleContainer)