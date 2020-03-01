import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

const ExperienceSingleContainer = dynamic(import('../../containers/experienceSingle'),{ssr:false});

function ExperienceSinglePage () {
    // const router = useRouter();
    // console.log(router.query.id);

    return (
        <div>
            <ExperienceSingleContainer />
        </div>
    )
}

export default connect()(ExperienceSinglePage);