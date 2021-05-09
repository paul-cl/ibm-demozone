import React, { useState } from 'react'
import { CardSection, CardsWrapper, CardsHeading, CardsContainer, Card, CardInfo, CardImg, 
         CardTitle, CardSubHeading, CardHidden} from './CardsSection.element'
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next'
import ReactCardFlip from 'react-card-flip'

const CardsSection = () => {
    const { t } = useTranslation();   

    const [isFlipped, setIsFlipped] = useState(false)
    const [isFlipped2, setIsFlipped2] = useState(false)
    const [isFlipped3, setIsFlipped3] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    const handleClick2 = () => {
        setIsFlipped2(!isFlipped2)
    }

    const handleClick3 = () => {
        setIsFlipped3(!isFlipped3)
    }

    return (
        <>
            <CardSection>
                <CardsWrapper>
                    <Fade>
                    <CardsHeading>{t('Cards.CardsHeading')}</CardsHeading>
                    </Fade>
    
                    <CardsContainer>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div>
                            <Card to='/' img = {"https://380342-1192392-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/08/briefing-no-desenvolvimento-de-projetos-696x464.jpg"}>
                                <Fade>
                                <CardInfo>
                                    <CardTitle>TECHNOLOGY<br></br> BRIEFING</CardTitle>
                                    <CardHidden>
                                        <CardImg src={require('../../images/usa.svg').default} alt='usa'/>
                                        <CardSubHeading>{t('Cards.CardSubHeading1')}</CardSubHeading>
                                        <p onClick={handleClick}>asdfadsf</p>
                                    </CardHidden>
                                    
                                </CardInfo>
                                </Fade>
                            </Card>
                            </div>

                            <div>
                             <Card img = {"https://cdn.techinasia.com/wp-content/uploads/2016/03/mox-demo-day-2016-a-crowd.jpg"}>
                            <Fade>
                            <CardInfo>
                                <CardTitle>여기다가 설명</CardTitle>
                                <CardHidden>
                                <CardImg src={require('../../images/japan.svg').default} alt='japan'/>
                                <CardSubHeading>{t('Cards.CardSubHeading2')}</CardSubHeading>
                                <p onClick={handleClick}>asdfadsf</p>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Card>
                            </div>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                            <div onClick={handleClick2}>
                            <Card to='/' img = {"https://cdn.techinasia.com/wp-content/uploads/2016/03/mox-demo-day-2016-a-crowd.jpg"}>
                            <Fade>
                            <CardInfo>
                                <CardTitle>EXPERIENCE<br></br>DAY</CardTitle>
                                <CardHidden>
                                    <CardImg src={require('../../images/japan.svg').default} alt='japan'/>
                                    <CardSubHeading>{t('Cards.CardSubHeading2')}</CardSubHeading>
                                </CardHidden>
                                
                            </CardInfo>
                            </Fade>
                        </Card>
                            </div>

                            <div onClick={handleClick2}>
                             <Card img = {"https://cdn.techinasia.com/wp-content/uploads/2016/03/mox-demo-day-2016-a-crowd.jpg"}>
                            <Fade>
                            <CardInfo>
                                <CardTitle>EXPERIENCE<br></br>DAY</CardTitle>
                                <CardHidden>
                                <CardImg src={require('../../images/japan.svg').default} alt='japan'/>
                                <CardSubHeading>{t('Cards.CardSubHeading2')}</CardSubHeading>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Card>
                            </div>
                        </ReactCardFlip>
                        
                        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
                            <div onClick={handleClick3}>
                                <Card img = {"https://i.pinimg.com/originals/5a/0b/d7/5a0bd7df42e79dc2ce5024a9d6d67da7.jpg"}>
                                    <Fade>
                                    <CardInfo>
                                        <CardTitle>DISCOVERY<br></br>WORKSHOP</CardTitle>
                                        <CardHidden>
                                        <CardImg src={require('../../images/blog.svg').default} alt='ibm'/>
                                        <CardSubHeading>{t('Cards.CardSubHeading3')}</CardSubHeading>
                                        </CardHidden>
                                    </CardInfo>
                                    </Fade>
                                </Card>
                            </div>

                            <div onClick={handleClick3}>
                             <Card img = {"https://cdn.techinasia.com/wp-content/uploads/2016/03/mox-demo-day-2016-a-crowd.jpg"}>
                            <Fade>
                            <CardInfo>
                                <CardTitle>EXPERIENCE<br></br>DAY</CardTitle>
                                <CardHidden>
                                <CardImg src={require('../../images/japan.svg').default} alt='japan'/>
                                <CardSubHeading>{t('Cards.CardSubHeading2')}</CardSubHeading>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Card>
                            </div>
                        </ReactCardFlip>

                        {/* <Card img = {"https://cdn.techinasia.com/wp-content/uploads/2016/03/mox-demo-day-2016-a-crowd.jpg"}>
                            <Fade>
                            <CardInfo>
                                <CardTitle>EXPERIENCE<br></br>DAY</CardTitle>
                                <CardHidden>
                                <CardImg src={require('../../images/japan.svg').default} alt='japan'/>
                                <CardSubHeading>{t('Cards.CardSubHeading2')}</CardSubHeading>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Card> */}
                        {/* <Card img = {"https://i.pinimg.com/originals/5a/0b/d7/5a0bd7df42e79dc2ce5024a9d6d67da7.jpg"}>
                            <Fade>
                            <CardInfo>
                                <CardTitle>DISCOVERY<br></br>WORKSHOP</CardTitle>
                                <CardHidden>
                                <CardImg src={require('../../images/blog.svg').default} alt='ibm'/>
                                <CardSubHeading>{t('Cards.CardSubHeading3')}</CardSubHeading>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Card> */}
                    </CardsContainer>
                </CardsWrapper>
            </CardSection>
        </>
    )
}

export default CardsSection
