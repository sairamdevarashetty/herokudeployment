import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';

const DefaultPage = dynamic(import('../containers/defaultPage'),{ssr:false});

export default connect()(DefaultPage);
