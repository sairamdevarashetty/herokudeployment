import React from 'react';
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
const ExperienceContainer = dynamic(import('../containers/experience'),{ssr:false});

class ExperiencePage extends React.Component {
    render() {
        return (
            <div>
                <ExperienceContainer />
            </div>
        )
    }
}

export default connect()(ExperiencePage);