import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 20px;
`;

export const Content = styled.div`
	h3 {
		text-align: center;
		margin-bottom: 14px;
	}

	input {
		width: 100%;
	}

	.pr-25 {
		padding-right: 20px;
	}

	.pl-25 {
		padding-left: 20px;
	}

	.course-info__row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
		margin-bottom: 16px;
		align-items: start;
		justify-content: start;

		&--full {
			grid-template-columns: 1fr;
		}

		&::first-of-type {
			align-items: end;
		}
	}

	.course-info__col {
		display: grid;

		input {
			margin-bottom: 14px;
		}

		button {
			margin: 0 auto;
		}

		&--halfsize input {
			width: 50%;
		}

		&--endcontent {
			align-self: end;
			justify-items: end;
		}

		&--startcontent {
			justify-content: start;
		}

		&--centercontent {
			justify-content: center;
		}

		&--halfsize input,
		&--endcontent input {
			margin-bottom: 0;
		}
	}

	.course-info__duration {
		font-size: 24px;

		span {
			font-weight: 500;
			font-size: 32px;
		}
	}
`;
