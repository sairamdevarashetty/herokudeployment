import React from 'react';
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
const BoatTourContainer = dynamic(import('../containers/trainTourContainer'),{ssr:false});

class BoattourPage extends React.Component {
    render() {
        return (
            <div>
                <BoatTourContainer />
            </div>
        )
    }
}

export default connect()(BoattourPage);
