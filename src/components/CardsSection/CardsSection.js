import React from 'react'
import { CardSection, CardsWrapper, CardsHeading, CardsContainer, Card, CardInfo, CardImg, 
        CardSubHeading, CardHeading, CardFooter, CardFooterText, CardRightArrow} from './CardsSection.element'
import { FaArrowRight } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next'

const CardsSection = () => {
    const { t } = useTranslation();   

    return (
        <>
            <CardSection>
                <CardsWrapper>
                    <Fade>
                    <CardsHeading>{t('Cards.CardsHeading')}</CardsHeading>
                    </Fade>
                    <CardsContainer>
                        <Card to='/'>
                            <Fade>
                            <CardInfo>
                                <CardImg src={require('../../images/usa.svg').default} alt='usa'/>
                                <CardSubHeading>{t('Cards.CardSubHeading1')}</CardSubHeading>
                                <CardHeading>{t('Cards.CardHeading1')}</CardHeading>
                            </CardInfo>
                            <CardFooter>
                                <CardFooterText>{t('Cards.CardFooter')}</CardFooterText>
                                <CardRightArrow><FaArrowRight /></CardRightArrow>
                            </CardFooter>
                            </Fade>
                        </Card>
                        <Card to='/'>
                            <Fade>
                            <CardInfo>
                                <CardImg src={require('../../images/japan.svg').default} alt='japan'/>
                                <CardSubHeading>{t('Cards.CardSubHeading2')}</CardSubHeading>
                                <CardHeading>{t('Cards.CardHeading2')}</CardHeading>
                            </CardInfo>
                            <CardFooter>
                                <CardFooterText>{t('Cards.CardFooter')}</CardFooterText>
                                <CardRightArrow><FaArrowRight /></CardRightArrow>
                            </CardFooter>
                            </Fade>
                        </Card>
                        <Card to='/'>
                            <Fade>
                            <CardInfo>
                                <CardImg src={require('../../images/blog.svg').default} alt='ibm'/>
                                <CardSubHeading>{t('Cards.CardSubHeading3')}</CardSubHeading>
                                <CardHeading>{t('Cards.CardHeading3')}</CardHeading>
                            </CardInfo>
                            <CardFooter>
                                <CardFooterText>{t('Cards.CardFooter')}</CardFooterText>
                                <CardRightArrow><FaArrowRight /></CardRightArrow>
                            </CardFooter>
                            </Fade>
                        </Card>
                    </CardsContainer>
                </CardsWrapper>
            </CardSection>
        </>
    )
}

export default CardsSection
