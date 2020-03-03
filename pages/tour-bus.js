import React from 'react';
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
const BustourContainer = dynamic(import('../containers/busTourContainer'),{ssr:false});

class BustourPage extends React.Component {
    render() {
        return (
            <div>
                <BustourContainer />
            </div>
        )
    }
}

export default connect()(BustourPage);