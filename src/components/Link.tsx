import styled from "styled-components";
import {Theme} from "../styles/Theme.tsx";

export const Link = styled.a`
    position: relative;
    z-index: 0;
    
    font-weight: 400;
    font-size: 14px;
    Letter-spacing: 1px;
    text-transform: uppercase;
    margin:10px;
    &:hover{
        &::before{
            height: 10px;
            
        }
    }
    
    &::before{
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        z-index: -1;
        
        content: '';
        display: inline-block;
        background-color: ${Theme.colors.accent};
    }
`
