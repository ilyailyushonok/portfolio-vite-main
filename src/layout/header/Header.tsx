import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MenuHeader} from "./MenuHeader.tsx";
import {MenuMobile} from "./MenuMobile.tsx";

const headerItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <MenuHeader menuItems={headerItems}/>
                    <MenuMobile menuItems={headerItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #353434;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    opacity: 80%;
`