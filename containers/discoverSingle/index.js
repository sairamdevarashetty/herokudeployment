
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
          <HeaderFunctionComponents />

          <DiscoverSingleHeader data={data}/>
          <MobileHeader data={data} />
          <div className="description-place">
            <DescriptionPlace data={data}
              leftText={[`Between history and present`, `a place full of emotions.`]}
              rightText={`Sirmione has ancient origins, its popularity is due to the poet Catullo, who lived here, who declaimed it in some verses of his works. Like all the towns of Lake Garda, Sirmione also could not escape the dominion of the Lombards, subsequently driven out in 1197 by the Veronese, in 1220 the emperor Frederick II allowed the Sirmione to be able to fish freely in the lake's waters. After the dominion of the Scaligeri, Sirmione surrendered to the Republic of Venice in 1405, in 1452 the Cooperation of the Ancient Originals of Sirmione was established, which together with those of Torri del Benaco and Garda managed the rich fish market of San Vigilio`}
            />
          </div>

          <FeaturedCategories data={data} length={4}/>

          <UtilityPlace data={data}/>

          <div className="featured-experience featured-exprience-of-place">
            <DiscoverSingleFeature
              adviceData={adviceActivityDetails}
              headerText={`All the activities to do in Sirmione.`}
              subHeaderText= {`All the activities to do in ${data && data.nome}.`}
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
    fetchDestinationDetails: (destinationId) => { dispatch(actions.fetchDestinationDetails(destinationId)) },
    fetchActivityAdviceDetails: (destinationId) => { dispatch(actions.fetchActivityAdviceDetails(destinationId)) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DiscoverSingleContainer))