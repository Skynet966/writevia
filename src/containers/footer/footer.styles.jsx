import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background: ${({ theme }) => theme.Footer};
	color: ${({ theme }) => theme.FooterText + '!important'};
`;
