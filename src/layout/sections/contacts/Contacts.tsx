import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={'Name'}/>
                <Field placeholder={'Subject'}/>
                <Field placeholder={'Message'} as={'textarea'}/>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #71983a;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`

`
