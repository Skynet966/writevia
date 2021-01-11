import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { screenSize } from '../../../App.styles';

export const TopNavbarContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: ${({ theme }) => theme.Header};
	justify-content: space-around;
	border-bottom: 1px solid ${({ theme }) => theme.LineFX};
	@media (max-width: ${screenSize.sm}) {
		justify-content: space-between;
		padding: 0 10px;
	}
`;

export const LogoContainer = styled(Link)`
	display: block;
	padding: 7px 0px;
	width: fit-content;
	@media (max-width: ${screenSize.sm}) {
		padding: 15px 0px;
	}
`;

export const Logo = styled.img`
	width: 160px;
	@media (max-width: ${screenSize.sm}) {
		width: 120px;
	}
`;

export const MenuItemsContainer = styled.div`
	display: flex;
	padding: 0;
	width: 100px;
	align-items: center;
	justify-content: space-between;
	@media (max-width: ${screenSize.sm}) {
		width: 150px;
	}
`;

export const MenuItem = styled.span`
	font-size: 20px;
	color: ${({ theme }) => theme.HeaderText};
	border: 0;
	border-radius: 50%;
	background: url('${({ image }) => image}');
	width: 20px;
	height: 20px;
	background-position: center;
	background-size: contain;
	&:last-of-type {
		@media (min-width: ${screenSize.md}) {
			display: none;
		}
	}
`;
