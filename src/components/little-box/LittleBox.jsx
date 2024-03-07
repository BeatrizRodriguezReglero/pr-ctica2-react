import { StyledBoxPercentage, StyledLittleBox, StyledMiniBox, StyledNumber, StyledNumberArrow, StyledType } from "./little-box.styles"

const LittleBox =({type, img, number, arrow, text, up})=>{
    return (
        <>
      
            <StyledLittleBox>
                <StyledMiniBox>
                    <StyledType>{type}</StyledType>
                    <img src={img} alt="" />

                </StyledMiniBox>
                <StyledMiniBox>
                    <StyledNumber>{number}</StyledNumber>
                    <StyledBoxPercentage>
                        <img src={arrow} alt="" color={up}/>
                        <StyledNumberArrow $color = {up}>{text}</StyledNumberArrow>
                    </StyledBoxPercentage>
                </StyledMiniBox>
                    
                
                
                
                
            </StyledLittleBox>
        </>
    )
    
}
export default LittleBox