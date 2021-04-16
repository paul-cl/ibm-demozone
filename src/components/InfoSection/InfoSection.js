import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImageWrapper, Img } from './InfoSection.element'
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade'

const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, lightText, img, alt }) => {
    const { t } = useTranslation();    
    
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <Fade top>
                                <TextWrapper>
                                    <TopLine lightTopLine={lightTopLine}>{t('Home.FirstTopLine')}</TopLine>
                                    
                                    <Heading lightText={lightText}>{t('Home.FirstHeadLine')}</Heading>
                                    <Subtitle lightTextDesc={lightTextDesc}>{t('Home.FirstSummary')}</Subtitle>
                                    <Link to=''>
                                        <Button big fontBig primary={primary}>
                                            {t('Home.FirstButton')}
                                        </Button>
                                    </Link> 
                                </TextWrapper>
                            </Fade>
                        </InfoColumn>
                        <InfoColumn>
                            <Fade top>
                                <ImageWrapper>
                                    <Img src={img} alt={alt} />
                                </ImageWrapper>
                            </Fade>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
