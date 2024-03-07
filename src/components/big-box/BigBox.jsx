import { StyledBigBox, StyledContainerUporDown, StyledFollowersNumber, StyledImageContainer, StyledSpan, StyledType } from "./big-box.styles"

const BigBox =({img, user, followers, type,bordercolor,followerschange,up,arrow})=>{
    return (
        <>
      
            <StyledBigBox $bordercolor={bordercolor}>
                <StyledImageContainer>
                    <img src={img} alt="" />
                    <StyledSpan>{user}</StyledSpan>
                </StyledImageContainer>
                
                <StyledFollowersNumber>{followers}</StyledFollowersNumber>
                <StyledType>{type}</StyledType>
                <StyledContainerUporDown>
                    <img src={arrow} alt="" color={up}/>
                    <StyledSpan>{followerschange}</StyledSpan>
                </StyledContainerUporDown>
                
            </StyledBigBox>
        </>
    )
    
}
export default BigBox