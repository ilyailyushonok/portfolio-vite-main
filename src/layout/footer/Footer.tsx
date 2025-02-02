import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

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
    background-color: #f4d0f4;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`