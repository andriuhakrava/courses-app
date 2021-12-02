import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 16px 48px 36px;
`;

export const Content = styled.div`
	a {
		text-decoration: none;
	}

	h2 {
		text-align: center;
		font-size: 36px;
		font-weight: 500;
		padding: 12px 0 46px;
	}

	.course-info {
		display: grid;
		grid-template-columns: 3fr 1fr;
		font-size: 18px;

		&__description {
			padding-right: 48px;
		}

		&__item {
			margin-bottom: 8px;
		}

		&__title {
			font-weight: 700;
			font-size: 18px;
			display: inline-block;
			padding-right: 7px;
		}

		&__authors {
			padding-top: 13px;

			p {
				margin-bottom: 8px;
			}
		}
	}
`;
