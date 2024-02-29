import Title from "../title/Title"
import {  StyledHeader, StyledText } from "./header.styles"

const Header=()=>{
    return (
        <>
            <StyledHeader>
                <Title>Social Media Dashboard</Title>
                <StyledText>Total Followers: 23,004</StyledText>
            </StyledHeader>
        </>
    )
}
export default Header