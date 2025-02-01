import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills >
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill
                    iconId={'codeSvg'}
                    title={'HTML5'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill
                    iconId={'cssSvg'}
                    title={'CSS3'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill
                    iconId={'WEB design'}
                    title={'Figma'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill
                    iconId={'styledComponentsSvg'}
                    title={'styledComponents'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill
                    iconId={'tsSvg'}
                    title={'TypeScript'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill
                    iconId={'reactSvg'}
                    title={'React'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: purple;
    min-height: 100vh;
     
`