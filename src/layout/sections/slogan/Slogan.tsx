import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Slogan=()=>{
    return (
      <StyledSlogan>
          <Container>
              <FlexWrapper align={"center"} direction={"column"}>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>HIRE ME</Button>
              </FlexWrapper>
          </Container>
      </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
  
`