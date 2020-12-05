import styled, { keyframes } from 'styled-components';

export const CallAnimation = keyframes`
	0%
        {transform: rotate(10deg)}
    10%
        {transform: rotate(-10deg)}
    20%
        {transform: rotate(10deg)}
    30%
        {transform: rotate(-10deg)}
    40%
        {transform: rotate(10deg)}
    50%
        {transform: rotate(10deg)}
    60%
        {transform: rotate(10deg)}
    70%
        {transform: rotate(-10deg)}
    80%
        {transform: rotate(10deg)}
    90%
        {transform: rotate(-10deg)}
    100%
        {transform: rotate(10deg)}
`;

export const IconatedInfoLinkContainer = styled.div`
	text-align: left;
`;
export const InfoHeader = styled.div``;
export const Heading = styled.h4`
	margin-top: 0;
	color: ${({ theme }) => theme.MutedText};
	font-weight: 500;
`;
export const InfoItemList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-flow: column;
	gap: 20px;
`;
export const InfoListItem = styled.li``;
export const Link = styled.a`
	font-size: 1em;
	font-weight: 500;
	align-self: center;
	transition: color 0.3s linear;
	${InfoListItem}:hover & {
		color: ${({ theme }) => theme.ActiveLink};
	}
`;
export const Icon = styled.i`
	left: 0;
	top: 0;
	width: 40px;
	text-align: center;
	height: 40px;
	background: ${({ theme }) => theme.Header};
	color: #ee4266;
	border: 1px solid #e8eaed;
	line-height: 40px;
	border-radius: 50%;
	transition: box-shadow 0.3s linear;
	margin-right: 10px;
	box-shadow: inset 0 0 5px White;
	${InfoListItem}:hover & {
		box-shadow: 0 0 6px ${({ theme }) => theme.ActiveLink};
		animation: ${CallAnimation} 1s linear infinite;
	}
`;
