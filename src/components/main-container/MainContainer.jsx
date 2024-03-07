import BigContainer from "../big-container/BigContainer"
import Header from "../header/Header"
import LittleContainer from "../little-container/LittleContainer"

import { StyledMainContainer } from "./main-container.styles"

const MainContainer =()=>{
    return (
    <StyledMainContainer>
        <Header/>
        <BigContainer></BigContainer>
       
        <LittleContainer></LittleContainer>
    </StyledMainContainer>
    )
}
export default MainContainer