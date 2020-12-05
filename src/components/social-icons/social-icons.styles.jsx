import styled from 'styled-components';
import { screenSize, socialColor } from '../../App.styles';
import { Icon } from '../iconated-info-link/iconated-info-link.styles';

export const SocialIconsContainer = styled.div`
	display: block;
	width: ${props => props.width || 'auto'};
	@media (max-width: ${screenSize.sm}) {
		display: ${props => props.sm_display || 'block'};
	}
`;
export const IconsList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: ${props => (props.width ? 'space-between' : 'flex-start')};
	margin: 0;
	@media (max-width: ${screenSize.sm}) {
		justify-content: center;
	}
	gap: 15px;
`;
export const ListIcon = styled.li``;
export const IconLink = styled.a`
	font-size: 1.1em;
	transition: color 0.3s linear;
	&:hover,
	:focus {
		color: ${props => socialColor[props.platform]};
	}
`;
export const RoundIcon = styled(Icon)`
	background: ${props => socialColor[props.platform]};
	color: white;
	transition: all 0.2s linear;
	border: none;
	box-shadow: 0 0 3px ${({ theme }) => theme.Shadow};
	&:hover,
	:focus {
		color: white;
		transform: scale(1.1);
	}
`;
