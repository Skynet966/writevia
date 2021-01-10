import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const SignUpFormContainer = styled.form`
	padding: 30px;
	border: 1px solid ${({ theme }) => theme.LineFX};
	border-radius: 5px;
	background: ${({ theme }) => theme.Header};
`;
export const CheckBoxContainer = styled.div`
	display: flex;
	gap: 2px;
	margin-bottom: 10px;
`;
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
	width: 30px;
	height: 18px;
	margin: 3px;
	color: ${({ status }) => (status ? '' : 'red')};
`;
export const CheckBoxLabel = styled.label`
	text-align: left;
	color: ${({ theme }) => theme.BodyText};
`;

export const TextAndLink = styled.p`
	margin: 20px 0 0;
	text-align: center;
	text-align-last: center;
`;

export const TextLink = styled(Link)``;
