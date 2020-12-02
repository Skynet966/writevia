import styled from 'styled-components';
import { size } from '../../../assets/base-config/base-config.styles';

export const TopNavbarContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: ${props => props.theme.Headers};
	justify-content: space-around;
	border-bottom: 1px solid ${props => props.theme.Grey1};
	@media (max-width: ${size.sm}) {
		justify-content: space-between;
		padding: 0 10px;
	}
`;

export const LogoContainer = styled.div`
	padding: 7px 0px;
	width: fit-content;
	@media (max-width: ${size.sm}) {
		padding: 15px 0px;
	}
`;

export const Logo = styled.img`
	width: 160px;
	@media (max-width: ${size.sm}) {
		width: 120px;
	}
`;

export const MenuItemsContainer = styled.div`
	display: flex;
	padding: 0 10px;
	width: 100px;
	align-items: center;
	justify-content: space-between;
	@media (max-width: ${size.sm}) {
		width: 150px;
	}
`;

export const MenuItem = styled.span`
	font-size: 1.1em;
	color: ${props => props.theme.Black};
	border: 0;
	border-radius: 50%;
	&:last-of-type {
		@media (min-width: ${size.md}) {
			display: none;
		}
	}
`;
