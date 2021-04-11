import React from 'react'
import Video from '../../images/test.mp4'
import { useTranslation } from 'react-i18next';
import { Wrapper, BackgroundVid, Videosrc, TitleTextWrapper, MainTitle, MainParagraph, TitleLine } from './MainInfoSection.element'

const MainInfoSection = () => {
    const { t } = useTranslation(); 

    return (
        <>  
            <BackgroundVid>
                <Videosrc autoPlay loop muted src={ Video } type = 'video/mp4' />
            </BackgroundVid>
            <Wrapper>
                
                
                <TitleTextWrapper>
                    <MainTitle>{t('MainHome.Title1')}</MainTitle>
                    <MainTitle>{t('MainHome.Title2')}</MainTitle>
                    <TitleLine></TitleLine>
                    <MainParagraph>{t('MainHome.Description')}</MainParagraph>
                </TitleTextWrapper> 

            </Wrapper>
        </>
    )
}

export default MainInfoSection
