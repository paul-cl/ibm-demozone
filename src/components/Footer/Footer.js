import { useTranslation } from 'react-i18next';
import React from 'react'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription , FooterSubHeading, FooterSubText, Form, FormInput, 
        FooterLinksContainer, FooterLinkWrapper, FooterLinksItems,FooterLinkTitle, FooterLink } from './Footer.element'


const Footer = () => {

    const { t, i18n } = useTranslation();
  
    function handleClick(lang){
      i18n.changeLanguage(lang);
    }

    return (
        <FooterContainer>
            
            <FooterSubscription>
                <FooterSubHeading>
                <p onClick={()=>handleClick('en')}>English</p>
                <p onClick={()=>handleClick('ko')}>한국어</p>    
                </FooterSubHeading>
                <FooterSubHeading>
                    Join our exclusive membership to receieve the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time
                </FooterSubText>
            </FooterSubscription>

            <Form>
                <FormInput name = 'email' type = 'email' placeholder='Your Email' />
                <Button fontBig>Subscribe</Button>
            </Form>

            <FooterLinksContainer>
                <FooterLinkWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <hr size="0.5" width="96%" color="#808080" />
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investor</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investor</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investor</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investor</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinkWrapper>
            </FooterLinksContainer>

        </FooterContainer>
    )
}

export default Footer
