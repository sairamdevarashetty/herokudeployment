
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
import MobileFooter from '../../components/Footer/mobileFooter';
import MobileHeader from '../../components/header/mobileHeader';
import Header from '../../components/header';

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

class DiscoverSingleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDestinationDetails(this.props.router.query.id);
    this.props.fetchActivityAdviceDetails(this.props.router.query.id);
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
          <DiscoverSingleHeader data={data}/>
          <MobileHeader data={data} />
          <DescriptionPlace data={data}/>
          <FeaturedCategories data={data} length={4}/>
          <UtilityPlace data={data}/>
          <DiscoverSingleFeature adviceData={adviceActivityDetails} data={data}/>
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
    fetchDestinationDetails: (destinationId) => { dispatch(actions.fetchDestinationDetails(destinationId)) },
    fetchActivityAdviceDetails: (destinationId) => { dispatch(actions.fetchActivityAdviceDetails(destinationId)) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DiscoverSingleContainer))