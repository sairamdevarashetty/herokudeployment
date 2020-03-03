
import React from 'react';
import { connect } from 'react-redux'
import { getDiscoverSingleModule } from './dynamicStore';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import Head from 'next/head';
import ExperienceSingleHeader from '../../components/ExperienceSingleHeader';
import ExperienceSingleFeature from '../../components/ExperienceSingleFeatured';
import BottomExperience from '../../components/BottomExperienceSingle';

// import DiscoverSingleHeader from '../../components/header/discoverSingle';
// import DescriptionPlace from '../../components/DescriptionPlace';
// import FeaturedCategories  from '../../components/FeaturedCategories';
// import UtilityPlace from '../../components/UtilityPlace';
// import DiscoverSingleFeature from '../../components/DiscoverSingleFeature'
import MobileFooter from '../../components/Footer/mobileFooter';
import MobileHeader from '../../components/header/mobileHeader';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import ExperienceInfo from '../../components/ExperienceInfo'
import HeaderFunctionComponents from '../../components/header/headerFunctionComponents';

import { useRouter, withRouter } from 'next/router'
import actions from './actions';

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

class ExperienceSingleContainer extends React.Component {
  componentDidMount() {
    // this.props.fetchDestinationDetails(this.props.router.query.id);
    // this.props.fetchActivityAdviceDetails(this.props.router.query.id);
  }

  render() {
    const { destinationState:{ destionationDetails:[data] = [], adviceActivityDetails} = {} } = this.props;
    return (
      <DynamicModuleLoader modules={[getDiscoverSingleModule()]}>
        <div id="page-top">
          <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <HeaderFunctionComponents />
          <ExperienceSingleHeader />
          <ExperienceInfo />
          <ExperienceSingleFeature />
          <MobileHeader data={data} />
          <BottomExperience/>
          {/* <DiscoverSingleFeature adviceData={adviceActivityDetails} data={data}/> */}
          <Footer />
          <MobileFooter />
        </div> 
       </DynamicModuleLoader>
    )
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestinationDetails: (destinationId) => { dispatch(actions.fetchDestinationDetails(destinationId)) },
    fetchActivityAdviceDetails: (destinationId) => { dispatch(actions.fetchActivityAdviceDetails(destinationId)) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExperienceSingleContainer))