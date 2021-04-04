import React from 'react'
import { homeObjOne, homeObjTwo } from './Data'
import { InfoSection, InfoSection2 } from '../../components'


const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection2 {...homeObjTwo} />
        </>
    )
}

export default Home
