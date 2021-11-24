import styled from 'styled-components';

export const Content = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	background: #d3e4cd;
	border-radius: 20px;
	padding: 25px 20px 15px;
	box-shadow: 5px 8px 16px -3px rgba(10, 22, 8, 0.75);
	-webkit-box-shadow: 5px 8px 16px -3px rgba(10, 22, 8, 0.75);
	-moz-box-shadow: 5px 8px 16px -3px rgba(10, 22, 8, 0.75);

	.course-description {
		padding-right: 72px;
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

	h3 {
		display: inline-block;
		margin-right: 6px;
	}
`;
