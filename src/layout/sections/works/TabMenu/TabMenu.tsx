import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";


export const TabMenu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item,index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="#">{item}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    )
}
const StyledTabMenu = styled.nav`
ul{
    margin: 0 auto 40px;
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;

}
     a {
         text-decoration: none;
     }

`
const ListItem = styled.li`

`

