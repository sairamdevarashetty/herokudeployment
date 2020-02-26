import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

const DiscoverSingleContainer = dynamic(import('../containers/discoverSingle'),{ssr:false});

function DiscoverSinglePage () {
    // const router = useRouter();
    // console.log(router.query.id);

    return (
        <div>
            <DiscoverSingleContainer />
        </div>
    )
}

export default connect()(DiscoverSinglePage);