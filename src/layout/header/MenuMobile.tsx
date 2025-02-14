import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";



export const MenuMobile = (props: { menuItems: Array<string>,}) => {
    return (
        <StyledMenuMobile>
            <BurgerButton  isOpen={false}>
<span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="#">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
            </MobileMenuPopup>
        </StyledMenuMobile>
    )
}

const StyledMenuMobile = styled.nav`
    display: none;
    @media ${theme.media.mobile}{
        display:block ;
    }`

const MobileMenuPopup = styled.div<{isOpen:boolean}>`
    position: fixed;
    display: none;
    background-color: rgba(31, 31, 32, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;

    ${props=>props.isOpen && css<{isOpen:boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        
    `}
    
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
`

const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 40px;
        bottom: 45px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
            transition: 0.3s;
            
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(-45deg);
                transition: 0.3s;
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(45deg);
                width: 36px;
                transition: 0.3s;
                
            `}
        }
    }
`

const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color:transparent;
    
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
            
        }
    }

`
const ListItem = styled.li`
    position: relative;
    display: flex;
    &::before{
        content: '';
        display: inline-block;
        height: 2px;
        background-color:${theme.colors.accent};
        position: absolute;
        top:50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }
    &:hover {
        &::before{transform: scale(1) }
        ${Mask}{
            transform:skewX(10deg) translateX(4px) ;
            color: ${theme.colors.font};
        
        & + ${Mask}{
            transform:skewX(10deg) translateX(-4px) ;
        }}
    }

`