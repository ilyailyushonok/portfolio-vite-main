import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./TabMenu/TabMenu.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/Rectangle-14.webp";
import timerImg from "../../../assets/images/Rectangle-16.webp";
import {Container} from "../../../components/Container.tsx";

const worksItems=['All','Landing Page','React','SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={worksItems}/>
            <FlexWrapper justify={'space-between'} align={'flex-start'}>
                <Work
                    title={'Social Network'}
                    src={socialImg}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                />
                <Work
                    title={'Timer'}
                    src={timerImg}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                />
            </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
`