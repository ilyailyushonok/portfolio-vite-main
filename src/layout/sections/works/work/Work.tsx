import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {Button} from "../../../../components/Button.tsx";

type WorkPropsType = {
    title: string
    text: string
    src:string
}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
            <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>
            <DescriptionWork>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
            </DescriptionWork>
        </StyledWork>
    );
};

 const StyledWork = styled.div`
     width: 330px;
     flex-grow: 1;
     background-color: ${theme.colors.secondaryBG};

     ${Link} {
         padding: 10px 0;

         & + ${Link} {
             margin-left: 20px;
         }
     }

     @media ${theme.media.desktop} {
         max-width: 540px;
         
     }
 `
const ImageWrapper=styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
        
    &:hover {
        opacity: 1;
    }}

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
    }

    &:hover{
        &:before{
            opacity: 1;
        }
    
    ${Button} {
        opacity: 1
    }
    }
    @media ${theme.media.tablet} {
        &::before,${Button} {
            opacity: 1;
        }
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`
 
 `
const Text = styled.p`
 margin: 14px 0 10px 0;
 `
const DescriptionWork = styled.div`
 padding: 25px 20px 15px;
 `
