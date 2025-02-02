import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper align={'center'} direction={'column'}>
            <Icon iconId={'codeSvg'}/>
            <Slider/>
        </FlexWrapper>
        </StyledTestimony>
    );
};
const StyledTestimony=styled.section`
    min-height: 50vh;
    background-color: #c553e4;
`