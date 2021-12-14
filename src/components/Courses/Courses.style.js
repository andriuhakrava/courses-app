import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;

	@media screen and (max-width: 475px) {
		flex-direction: column;

		form {
			margin: 0 auto 24px;

			button {
				margin: 0 0 0 24px;
			}
		}

		button {
			width: max-content;
			margin: auto;
		}
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	row-gap: 20px;
	padding: 20px;

	@media screen and (max-width: 600px) {
		row-gap: 36px;
	}
`;
