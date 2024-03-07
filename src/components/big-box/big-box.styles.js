import styled from 'styled-components';

const StyledBigBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-shrink: 0;
	width: 326px;
	height: 216px;
	background-color: #262b42;
	border-radius: 0 0 0.3125rem 0.3125rem;
	padding: 2rem 0 1.5rem 0;
	margin-bottom: 1.5rem;

	&::after {
		content: '';
		position: absolute;
		top: -0.25rem;
		z-index: -1;
		display: block;
		width: 326px;
		height: 216px;
		border-radius: 0.3125rem;
		${({ $bordercolor }) =>
			$bordercolor.includes('gradient')
				? `background-image: ${$bordercolor}`
				: `background-color:${$bordercolor}`}
	}
`;

const StyledImageContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.625rem;
	justify-content: center;

	border-radius: 0.625rem;
`;
const StyledSpan = styled.span`
	color: #8c98c6;
	font-size: 0.75rem;
`;

const StyledFollowersNumber = styled.p`
	text-align: center;
	font-family: 'Inter', sans-serif;
	font-weight: bold;
	background-color: inherit;
	color: white;
	font-size: 3.5rem;
	margin-top: 1.125rem;
	letter-spacing: -0.125rem;
`;

const StyledType = styled.p`
	color: #8c98c6;
	background-color: inherit;
	text-align: center;
	font-weight: normal;
	font-size: 0.75rem;
	letter-spacing: 0.2rem;
`;

const StyledContainerUporDown = styled.div`
	display: flex;
	gap: 0.25rem;
	justify-content: center;
	font-size: 0.9rem;
	border-radius: 0.625rem;
	align-items: center;
	padding-top: 1.5625rem;
`;
export {
	StyledBigBox,
	StyledImageContainer,
	StyledSpan,
	StyledFollowersNumber,
	StyledType,
	StyledContainerUporDown
};
