import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span>  </span>
                <span className={'active'}>  </span>
                <span>  </span>
            </Pagination>
        </StyledSlider>
    );


};

const StyledSlider = styled.div`
border: 4px solid ${Theme.colors.borderColor };
    max-width: 540px;
    
`
const Slide = styled.div`
    text-align: center;
`
const Text = styled.p`

`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 22px 0 42px;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color:${Theme.colors.font};
        border-radius:20px;
        &+span{
            margin-left: 5px;
        }
        &.active{
            width: 30px;
            background-color: ${Theme.colors.accent};
        }
    }
`
