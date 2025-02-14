import myPhoto from '../../../assets/images/ava.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi There</SmallText><br/>
                        <Name>I am <span>Ilya Ilyushonok</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>

                    <PhotoWrapper><Photo src={myPhoto} alt="My photo"/></PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>

    )
}

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #021f25;
    display: flex;
    color: ${theme.colors.font};

`



const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`
const Name = styled.h2`
    ${font({family: "Josefin Sans, sans-serif", weight: 700, Fmax: 50, Fmin: 36})};
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            position: absolute;
            bottom: 0;
            z-index: -1;
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;

    }
`
const MainTitle = styled.h1`
    ${font({weight:400,Fmax:27,Fmin:20})};
 
`
const Photo = styled.img`
    width: 350px;
    object-fit: cover;
    margin-right: 20px;
    @media ${theme.media.mobile}{
        width: 310px;
        height: 380px;
     
    }
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
margin-top: 65px;
    &::before {
        position: absolute;
        z-index: -1;
        top: -24px;
        left: 24px;
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
`
