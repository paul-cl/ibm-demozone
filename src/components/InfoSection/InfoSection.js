import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle } from './InfoSection.element'
import { useTranslation } from 'react-i18next';

const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, headline, lightText, topLine }) => {
    const { t } = useTranslation();    
    
    return (
        <div>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{t('Topline.1')}</TopLine>
                                <Heading lightText={lightText}>{t('Headline.1')}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{t('SubDescription.1')}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </div>
    )
}

export default InfoSection
