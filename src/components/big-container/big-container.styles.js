import styled from 'styled-components';

const StyledBigContainer = styled.div`
	text-align: center;
	position: relative;
	top: -80px;
	left: 50%;
	transform: translateX(-50%);

	@media screen and (width>= 768px) {
		display: flex;
		flex-direction: row;
		gap: 24px;
	}
`;
export { StyledBigContainer };
