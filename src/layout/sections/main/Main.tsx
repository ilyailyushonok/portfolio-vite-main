import myPhoto from '../../../assets/images/ava.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Main=()=>{
    return (
<StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span><br/>
                    <span>I am Ilya Ilyushonok</span>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo src={myPhoto} alt="My photo"/>
            </FlexWrapper>
</StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #021f25;

`

const Photo = styled.img`
    width: 350px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    color: #b535b5;
`