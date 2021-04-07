import { useTranslation } from 'react-i18next';
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs'
import { FooterContainer, FooterDiv, FooterSubscription , FooterSubHeading, FooterLinkLine, FormInput, FormButton, FooterForm,
        FooterLinksContainer, FooterLinkWrapper, FooterLinksItems,FooterLinkTitle, FooterContents, FooterContentsLink,
        SocialIcons, SocialIconLink } from './Footer.element'


const Footer = () => {

    const { t, i18n } = useTranslation();
  
    function handleClick(lang){
      i18n.changeLanguage(lang);
    }

    return (
        <FooterContainer>
            <FooterDiv>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>{t('Footer.Solution')}</FooterLinkTitle>
                            <FooterLinkLine></FooterLinkLine>
                            <FooterContentsLink href='https://www.ibm.com/analytics/machine-learning' target='_blank' aria-label='Machine_Learning'>
                                {t('Footer.Solutions1')}
                            </FooterContentsLink>
                            <FooterContentsLink href='https://www.ibm.com/cloud/satellite' target='_blank' aria-label='IBM_Satellite'>
                                {t('Footer.Solutions2')}
                            </FooterContentsLink>
                            <FooterContentsLink href='https://www.ibm.com/cloud/paks' target='_blank' aria-label='Cloud_Paks'>
                                {t('Footer.Solutions3')}
                            </FooterContentsLink>
                            <FooterContentsLink href='https://www.ibm.com/weather' target='_blank' aria-label='IBM_Weather'>
                                {t('Footer.Solutions4')}
                            </FooterContentsLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>{t('Footer.ContactUs')}</FooterLinkTitle>
                            <FooterLinkLine></FooterLinkLine>
                            <FooterContents>{t('Footer.ContactUs1')}</FooterContents>
                            <FooterContents>{t('Footer.ContactUs2')}</FooterContents>
                            <FooterContents>{t('Footer.ContactUs3')}</FooterContents>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>{t('Footer.VisitUs')}</FooterLinkTitle>
                            <FooterLinkLine></FooterLinkLine>
                            <SocialIcons>
                                <SocialIconLink href='https://www.facebook.com/IBM/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.instagram.com/ibm' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.youtube.com/user/IBM' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='https://twitter.com/ibm' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.linkedin.com/company/ibm/' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinksItems>
                        <FooterForm>
                            <FooterContents><BsNewspaper />{t('Footer.NewsLetter')}</FooterContents>
                            <FormInput name='email' type='email' placeholder={t('Footer.NewsLetter1')}></FormInput>
                            <FormButton>{t('Footer.NewsLetter2')}</FormButton>
                        </FooterForm>
                    </FooterLinkWrapper>
                </FooterLinksContainer>

                <FooterSubscription>
                    
                    <FooterSubHeading>
                    <p onClick={()=>handleClick('en')}>English</p>
                    </FooterSubHeading>
                    
                    <FooterSubHeading>
                    <p onClick={()=>handleClick('ko')}>한국어</p> 
                    </FooterSubHeading>
                </FooterSubscription>
            </FooterDiv>
        </FooterContainer>
    )
}

export default Footer
