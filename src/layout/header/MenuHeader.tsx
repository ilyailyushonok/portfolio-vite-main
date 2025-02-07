import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";


export const MenuHeader = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenuHeader>
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
        </StyledMenuHeader>
    )
}
const StyledMenuHeader = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
        justify-content: center;

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
    color: ${Theme.colors.accent};

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
        background-color:${Theme.colors.accent};
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
            color: ${Theme.colors.font};
        
        & + ${Mask}{
            transform:skewX(10deg) translateX(-4px) ;
        }}
    }

`