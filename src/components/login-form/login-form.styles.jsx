import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginFormContainer = styled.div`
	text-align-last: left;
	padding: 20px 30px;
	border: 1px solid ${({ theme }) => theme.LineFX};
	border-radius: 5px;
	background: ${({ theme }) => theme.Header};
`;
export const ForgotPasswordContainer = styled.div`
	padding-left: 5px;
	margin: -15px 0 15px;
`;

export const SocialLineBreak = styled.hr`
	height: 2px !important;
	color: ${({ theme }) => theme.Shadow};
`;
