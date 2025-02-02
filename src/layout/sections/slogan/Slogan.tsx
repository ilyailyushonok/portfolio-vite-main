import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import styled from "styled-components";

export const Slogan=()=>{
    return (
      <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>HIRE ME</Button>
      </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #9a8484;
    align-items: center;
`