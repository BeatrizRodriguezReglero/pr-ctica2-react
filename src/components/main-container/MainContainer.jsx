import BigContainer from "../big-container/BigContainer"
import Header from "../header/Header"
import { StyledMainContainer } from "./main-container.styles"

const MainContainer =()=>{
    return (
    <StyledMainContainer>
        <Header/>
        <BigContainer></BigContainer>
    </StyledMainContainer>
    )
}
export default MainContainer