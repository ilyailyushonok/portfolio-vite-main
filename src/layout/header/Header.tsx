import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const headerItems=['Home','Skills','Works','Testimony','Contact']


export const Header = () => {
    return (
        <StyledHeader>
           <Logo/>
            <Menu menuItems={headerItems}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #5a97f4;
    display: flex;
    justify-content: space-between;
`