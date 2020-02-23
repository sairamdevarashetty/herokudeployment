import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
const DiscoverSingleContainer = dynamic(import('../containers/discoverSingle'),{ssr:false});

class DiscoverSinglePage extends React.Component {
    render() {
        return (
            <div>
                <DiscoverSingleContainer />
            </div>
        )
    }
}

export default connect()(DiscoverSinglePage);