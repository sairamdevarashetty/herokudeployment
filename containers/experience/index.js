
import React from 'react';
import { connect } from 'react-redux'
import { getDiscoverSingleModule } from './dynamicStore';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import Head from 'next/head'
import ExperienceHeader from '../../components/ExperienceHeader';
import ExperienceFeaturedPlaces from '../../components/ExperienceFeaturedPlaces';
import ExperienceBottom from '../../components/ExperienceBottom';
import AllCategories from '../../components/AllCategories';
import Header from '../../components/header'
import Footer from '../../components/Footer';
import MobileHeader from '../../components/header/mobileHeader';
import MobileFooter from '../../components/Footer/mobileFooter';
import { useRouter, withRouter } from 'next/router'
import FeaturedCategories from '../../components/FeaturedCategories';
import actions from './actions';
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

const staticData={
  nome: 'What to do? Get inspiration.',
  
}
class ExperienceContainer extends React.Component {
  render() {
    return (
      // <DynamicModuleLoader modules={[getDiscoverSingleModule()]}>
        <div>
          <Header />
          <MobileHeader />
          <ExperienceHeader />
          <HeaderFunctionComponents />
          <div className="featured-places featured-experience space-carousel-before">
            <ExperienceFeaturedPlaces />
          </div>
          <ExperienceBottom />
          <AllCategories />
          <FeaturedCategories data={{
            header: 'What to do? Get inspiration.',
          }}
            length ={3}
          />
          <Footer />
          <MobileFooter />
        </div>
      // </DynamicModuleLoader>
    )
  }
}


export default ExperienceContainer;