import styled from 'styled-components'

export const BackgroundVid = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Videosrc = styled.video `
    width: 100%;
    height: 70%;
    object-fit: cover;
    z-index: -1;
    
`

export const Wrapper = styled.div `
    display: flex;
    justify-content: flex-start;
    max-width: 1300px;
    align-items: center;
    height: 70vh;
    min-height: -webkit-fill-available;
    
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
    
    
`

export const TitleTextWrapper = styled.div `
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 3;
`

export const MainTitle = styled.h1 `
    color: #fff;
    font-size: 3.2rem;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 3rem;
        max-width: 280px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 2.5rem;
        max-width: 280px;
    }
`

export const MainParagraph = styled.p `
    margin-top: 24px;
    color: #fff;
    font-size: 1.3rem;
    text-align: left;
    max-width: 600px;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        max-width: 280px;
    }
    
    @media screen and (max-width: 480px) {
        max-width: 280px;
        font-size: 0.9rem;
    }

`

export const MainParagraph2 = styled.p `
    margin-top: 5px;
    color: #fff;
    font-size: 0.9rem;
    text-align: left;
    max-width: 480px;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        max-width: 280px;
    }
    
    @media screen and (max-width: 480px) {
        max-width: 280px;
        font-size: 0.9rem;
    }

`

export const TitleLine = styled.hr `
    height: 8px;
    background-color: #fff;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 15px;
    width: 36%;

    @media screen and (max-width: 768px) {
        margin-top: 15px;
        margin-bottom: 5px;
        width: 50%;
    }

    @media screen and (max-width: 480px) {
        margin-top: 15px;
        margin-bottom: 5px;
        width: 50%;
    }
`