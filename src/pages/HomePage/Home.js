import React from 'react'
import { InfoOne, InfoTwo, InfoThree } from './Data'
import { InfoSection, InfoSection2, InfoSection3, MainInfoSection, CardsSection } from '../../components'


const Home = () => {
    return (
        <>
            <MainInfoSection />
            <InfoSection {...InfoOne} />
            <InfoSection2 {...InfoTwo} />
            <InfoSection3 {...InfoThree} />
            <CardsSection />
        </>
    )
}

export default Home
