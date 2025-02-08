import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
            <Name>ILYA</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedinSvg'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vkSvg'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegramSvg'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagramSvg'}/>
                    </SocialLink>
                </SocialItem>

            </SocialList>
            <Copyright>© 2023 Ilya Ilyushonok, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBG};
    padding-bottom: 5px;
`
const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
`
const SocialList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 30px;
   
    
`
const SocialItem = styled.li`
    padding: 10px 0;
`
const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius:50%;
    width: 32px;
    height: 32px;
    color:${Theme.colors.accent};
    &:hover{
        color:${Theme.colors.primaryBG};
        transform: translateY(-3px);
        background-color: ${Theme.colors.accent};
    }
 `
const Copyright = styled.small`
    text-align: center;
    opacity: 0.5;
`