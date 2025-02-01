import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/Rectangle-14.webp";
import timerImg from "../../../assets/images/Rectangle-16.webp";

const worksItems=['All','Landing Page','React','SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
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
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #83cce6;
`