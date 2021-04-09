import React from 'react'
import Video from '../../images/video.mp4'
import { HeroContainer, HeroBg, VideoBg} from './MainInfoSection.element'

const MainInfoSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={ Video } type = 'video/mp4' />
                </HeroBg>
            </HeroContainer>
        </>
    )
}

export default MainInfoSection
