import styled from 'styled-components';
import { size } from '../../assets/base-config/base-config.styles';

export const SocialIconsContainer = styled.div`
	display: block;
	width: ${props => props.width || 'auto'};
	@media (max-width: ${size.sm}) {
		display: ${props => props.sm_display || 'block'};
	}
`;
export const IconsList = styled.ul`
	display: flex;
	padding: 0 10px;
	align-items: center;
	justify-content: ${props => (props.width ? 'space-between' : 'flex-start')};
	@media (max-width: ${size.sm}) {
		justify-content: center;
	}
	gap: 15px;
`;
export const ListIcon = styled.li``;
export const IconLink = styled.a`
	font-size: 1.1em;
	color: ${props => props.theme.Black};
`;
