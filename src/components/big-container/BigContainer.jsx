import { BIG_BOX_DATA } from "../../constants/big-box-data"
import BigBox from "../big-box/BigBox"
import { StyledBigContainer } from "./big-container.styles"

const BigContainer =()=>{
return(
    <StyledBigContainer>
        {BIG_BOX_DATA.map(card =>(
                <BigBox key={card.id}{...card}/>
        ))}
        
    </StyledBigContainer>)
}
export default BigContainer