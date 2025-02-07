import myPhoto from '../../../assets/images/ava.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
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
    color: ${Theme.colors.font};
`

const Photo = styled.img`
    width: 350px;
    object-fit: cover;
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`
const Name = styled.h2`
    font-weight: 700;
    font-size: 50px;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span{
        position: relative;
        z-index: 0;
        &::before{
            position: absolute;
            bottom: 0;
            z-index:-1 ;
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};
        }
    }
`
const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
`
const PhotoWrapper=styled.div`
    position: relative;
    z-index: 0;

    &::before {
        position: absolute;
        z-index: -1;
        top:-24px;
        left:24px;
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${Theme.colors.accent};
    }
`
