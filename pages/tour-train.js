import React from 'react';
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
const TraintourContainer = dynamic(import('../containers/trainTourContainer'),{ssr:false});

class TraintourPage extends React.Component {
    render() {
        return (
            <div>
                <TraintourContainer />
            </div>
        )
    }
}

export default connect()(TraintourPage);
