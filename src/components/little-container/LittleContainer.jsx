import { LITTLE_BOX_DATA } from "../../constants/little-box-data"
import LittleBox from "../little-box/LittleBox"

import { StyledLittleContainer, StyledTitle } from "./little-container.styles"

const LittleContainer = ()=>{
    return (<StyledLittleContainer>
            <StyledTitle>Overview - Today </StyledTitle>
            {LITTLE_BOX_DATA.map(card =>(
                <LittleBox key={card.id}{...card}/>
            ))}
        
    </StyledLittleContainer>)
}
export default LittleContainer