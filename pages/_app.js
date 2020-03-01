import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../vendor/owlcarousel/owl.theme.default.min.css';
import '../css/creative.css';
import '../css/creative.min.css';

import dynamic from 'next/dynamic'
dynamic(import('../vendor/owlcarousel/owl.carousel.min.js'),{ssr:false});


import { Provider } from 'react-redux'
import store from '../redux/store';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}