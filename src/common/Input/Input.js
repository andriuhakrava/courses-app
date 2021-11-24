import styled from 'styled-components';

export const InputStyled = styled.div`
	input {
		box-sizing: border-box;
		padding: 8px 12px;
		border: 1px solid #000;
		background: #d3e4cd;

		&[type='submit'] {
			background: #99a799;

			:hover {
				background: #adc2a9;
				cursor: pointer;
			}
		}
	}

	label {
		display: block;
		margin-bottom: 8px;
	}

	textarea {
		width: 100%;
		padding: 8px 12px;
		background: #d3e4cd;
		min-height: 100px;
	}
`;
