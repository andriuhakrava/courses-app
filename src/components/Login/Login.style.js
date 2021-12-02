import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 100px;

	.user-form {
		max-width: 320px;
		width: 100%;
		padding: 24px;
		box-sizing: content-box;
		margin: 0;

		&__title {
			font-size: 32px;
			font-weight: 500;
			text-align: center;
			margin-bottom: 24px;
		}

		&__row {
			margin-bottom: 16px;

			input {
				width: 100%;
			}

			label {
				font-size: 18px;
				font-weight: 500;
			}

			button {
				margin: auto;
			}
		}

		&__account-info {
			text-align: center;

			a {
				color: blue;
			}
		}
	}
`;
