import styled from 'styled-components';

const StyledLittleBox = styled.div`
	width: 326px;
	height: 125px;
	background-color: #262b42;
	border-radius: 0.3125rem;
	padding: 0px 0 1.5rem 0;
	margin: 0 auto;
	margin-bottom: 1.5rem;
`;

const StyledMiniBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1.5625rem 1.9375rem 0px 1.5rem;
`;
const StyledType = styled.span`
	font-size: 0.875rem;
	font-weight: bold;
	color: #8c98c6;
`;

const StyledNumber = styled.span`
	font-size: 2rem;
	font-weight: bold;
	color: white;
`;

const StyledBoxPercentage = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.1875rem;
	align-items: center;
	height: 15px;
`;

const StyledNumberArrow = styled.span`
	color: ${({ $color }) => $color};
	font-size: 0.75rem;
`;

export {
	StyledLittleBox,
	StyledMiniBox,
	StyledType,
	StyledNumber,
	StyledBoxPercentage,
	StyledNumberArrow
};
