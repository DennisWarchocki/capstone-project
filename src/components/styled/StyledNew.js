import styled from 'styled-components';

export const StyledHeadbanner = styled.div`
	padding: 22px 20px;
	background-color: #009150;
	font-size: x-large;
	text-align: center;
`;

export const StyledNavUl = styled.div`
	display: flex;
	position: relative;
	z-index: 1;
	justify-content: space-evenly;
	width: 100%;
	margin: 0;
`;

//<div class="container">
//<div class="black-box">Black box (z-index: 1)</div>
//<div class="gray-box">Gray box (z-index: 3)</div>
//<div class="green-box">Green box (z-index: 2)</div>
//</div>

export const StyledNavbar = styled.div`
	position: relative;
	flex-grow: 1;
	padding: 22px 20px;
	transition: 0.6s;
	background-color: #009150;
	color: white;
	font-size: x-large;
	list-style: none;
	text-align: center;
	text-decoration: none;
	&:hover {
		background: lightslategray radial-gradient(circle, transparent 99%, lightslategray 1%)
			center/15000%;
		text-decoration: underline;
	}
	&:active {
		background: lightslategray radial-gradient(circle, transparent 99%, lightslategray 1%)
			center/15000%;
	}
`;

export const StyledTransparent = styled.div`
	display: flex;
	justify-content: center;
	padding: 40px;
	border-radius: 16px;
	background: rgba(0, 0, 0, 0.5);
	color: white;
`;

export const StyledFetch = styled.div`
	border-radius: 16px;
	background: rgba(200, 200, 200, 0);
`;

export const StyledCalories = styled.div`
	display: flex;
	justify-content: center;
	margin: 16px;
	padding: 6%;
	border-radius: 16px;
	background: rgba(0, 0, 0, 0.5);
	color: white;
`;
