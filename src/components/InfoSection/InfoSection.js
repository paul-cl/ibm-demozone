import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImageWrapper, Img } from './InfoSection.element'
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade'
import ReactCardFlip from 'react-card-flip'

const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, lightText, img, alt }) => {
    const { t } = useTranslation();    
    
    const [isFlipped, setIsFlipped] = useState(false)
    const [isFlipped2, setIsFlipped2] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    const handleClick2 = () => {
        setIsFlipped2(!isFlipped2)
    }

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <div onClick={handleClick}>
                        This is the front of the card.
                        </div>

                        <div onClick={handleClick}>
                        This is the back of the card.
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
                        <div onClick={handleClick2}>
                        This is the front of the card.
                        </div>

                        <div onClick={handleClick2}>
                        This is the back of the card.
                        </div>
                    </ReactCardFlip>
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
