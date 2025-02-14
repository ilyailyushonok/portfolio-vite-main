import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Contacts = () => {
    return (
        <StyledContacts>
           <Container>
               <SectionTitle>Contact</SectionTitle>
               <StyledForm>
                   <Field placeholder={'Name'}/>
                   <Field placeholder={'Subject'}/>
                   <Field placeholder={'Message'} as={'textarea'} />
                   <Button type={'submit'}>Send message</Button>
               </StyledForm>
           </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea{
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBG};;
    border: 1px solid ${theme.colors.borderColor};;
    color: ${theme.colors.font};
    font-family: 'Poppins', sans-serif;
    padding: 7px 15px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    &::placeholder {
        color: ${theme.colors.placeholderColor};
    }
    &:focus-visible{
        outline: 1px solid ${theme.colors.borderColor};
        
    }
    
`
