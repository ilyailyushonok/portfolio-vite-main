import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
     <FlexWrapper align={"center"}  direction={"column"}>
<IconWrapper>
    <Icon iconId={props.iconId}/>
</IconWrapper>
         <SkillTitle>{props.title}</SkillTitle>
         <SkillText>{props.description}</SkillText>
     </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 60px 0 40px;
    flex-grow:1;

`
export const IconWrapper=styled.div`
position: relative;
    &::before{
        content: '';
        display: inline-block;
        position: absolute;
        height: 80px;
        width: 80px;
        left: 50%;
        top: 50%;
        transform-origin: top left;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(-45deg) translate(-50%,-50%);
    
    }
`
const SkillTitle = styled.h3`
    margin: 60px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
    margin: 0 30px;
  
`

