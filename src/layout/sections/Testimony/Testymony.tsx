import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {IconWrapper} from "../skills/skill/Skill.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper align={'center'} direction={'column'}>
          <IconWrapper>
              <Icon iconId={'codeSvg'}/>
          </IconWrapper>
            <Slider/>
        </FlexWrapper>
        </StyledTestimony>
    );
};
const StyledTestimony=styled.section`
    min-height: 50vh;
    background-color: #c553e4;
    ${IconWrapper}{
        margin: 32px 0 72px;
    }
`