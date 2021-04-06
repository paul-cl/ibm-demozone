import React from 'react'
import { InfoOne, InfoTwo, InfoThree } from './Data'
import { InfoSection, InfoSection2, InfoSection3 } from '../../components'


const Home = () => {
    return (
        <>
            <InfoSection {...InfoOne} />
            <InfoSection2 {...InfoTwo} />
            <InfoSection3 {...InfoThree} />
            <InfoSection2 {...InfoTwo} />
        </>
    )
}

export default Home
