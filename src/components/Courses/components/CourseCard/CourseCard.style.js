import styled from 'styled-components';

export const Content = styled.li`
	display: grid;
	grid-template-columns: 2fr 1fr;
	background: #d3e4cd;
	border-radius: 20px;
	padding: 25px 20px 15px;
	box-shadow: 5px 8px 16px -3px rgba(10, 22, 8, 0.75);
	-webkit-box-shadow: 5px 8px 16px -3px rgba(10, 22, 8, 0.75);
	-moz-box-shadow: 5px 8px 16px -3px rgba(10, 22, 8, 0.75);

	@media screen and (max-width: 1000px) {
		display: flex;
		flex-direction: column;
	}

	.course-description {
		padding-right: 72px;

		@media screen and (max-width: 1000px) {
			padding-right: 0;
			margin-bottom: 24px;
		}
	}

	.course-parameters > button {
		margin: 0 auto;
	}

	.course-parameters__item {
		margin-bottom: 5px;

		&:last-of-type {
			margin-bottom: 12px;
		}
	}

	.course-parameters__item--fixedcut {
		width: 400px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		@media screen and (max-width: 835px) {
			width: 100%;
			white-space: normal;
		}
	}

	h3 {
		display: inline-block;
		margin-right: 6px;
	}

	.course-parameters__btn-row {
		display: flex;
		justify-content: end;

		@media screen and (max-width: 475px) {
			justify-content: center;
			margin-top: 22px;

			button:first-of-type {
				margin-left: 0;
			}
		}

		button {
			margin-left: 12px;
		}
	}
`;
