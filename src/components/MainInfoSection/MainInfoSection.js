import React from 'react'
import Video from '../../images/test.mp4'
import { Wrapper, BackgroundVid, Videosrc, TitleTextWrapper, HeroH1, HeroP, TitleLine} from './MainInfoSection.element'

const MainInfoSection = () => {
    return (
        <>  
            <BackgroundVid>
                <Videosrc autoPlay loop muted src={ Video } type = 'video/mp4' />
            </BackgroundVid>
            <Wrapper>
                
                
                <TitleTextWrapper>
                    <HeroH1>WELCOME TO</HeroH1>
                    <HeroH1>DEMO DRIVE</HeroH1>
                    <TitleLine></TitleLine>
                    <HeroP>
                        Check out our PoC and demo videos powered by IBM technology
                    </HeroP>
                </TitleTextWrapper> 

            </Wrapper>
        </>
    )
}

export default MainInfoSection
