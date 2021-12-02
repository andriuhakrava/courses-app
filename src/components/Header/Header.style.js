import styled from 'styled-components';

export const HeaderStyled = styled.header`
	padding: 20px;
	background: #d3e4cd;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.header__content {
		display: flex;

		button {
			margin-left: 20px;
		}
	}
`;
