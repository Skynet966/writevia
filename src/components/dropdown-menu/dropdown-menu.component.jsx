import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { generateUUID } from '../../utils/utils.functions';

export const DropdownMenuCard = styled.div`
	background: ${({ theme }) => theme.Body};
	display: flex;
	transition: opacity 1s ease-in-out;
	visibility: ${({ visibility }) =>
		visibility === 'true' ? 'visible' : 'hidden'};
	opacity: ${({ visibility }) => (visibility === 'true' ? 1 : 0)};
	position: absolute;
	flex-flow: column;
	top: 50px;
	border-radius: 5px;
	box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
		0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
	padding: 15px 20px;
`;
export const Title = styled.h5`
	text-align: left;
	margin: 0;
	font-size: 0.8em;
	font-weight: 500;
`;

export const CardBody = styled.div`
	padding: 5px 0;
`;
export const MenuOptions = styled.ul`
	display: flex;
	flex-flow: column;
	text-align: left;
`;
export const Option = styled.li`
	transition: background 0.4s ease-in;
	&:hover {
		background: #cdade626;
	}
`;
export const Link = styled(NavLink)`
	font-family: 'Mulish';
	padding: 10px 20px;
	width: 100%;
	&::before {
		font-family: 'FontAwesome';
		padding-right: 20px;
	}
`;

export const CardFooter = styled.div`
	padding: 5px 0;
	border-top: 1px solid ${({ theme }) => theme.LineFX};
`;
export const FooterOption = styled.a`
	text-align: left;
	font-family: 'Mulish';
	width: 100%;
	cursor: pointer;
	padding: 10px 20px;
	transition: background, color 0.3s ease-in;
	&::before {
		font-family: 'FontAwesome';
		padding-right: 20px;
	}
	&:hover {
		background: #cdade626;
	}
`;

const DropdownMenu = ({
	title,
	options,
	fOption,
	fIcon,
	handleClick,
	visibility
}) => {
	return (
		<DropdownMenuCard visibility={visibility}>
			<CardHeader>
				<Title>{title}</Title>
			</CardHeader>
			<CardBody>
				<MenuOptions>
					{options.map(({ name, link, icon }) => (
						<Option key={generateUUID()}>
							<Link to={link} className={`fa ${icon}`}>
								{name}
							</Link>
						</Option>
					))}
				</MenuOptions>
			</CardBody>
			{fOption ? (
				<CardFooter>
					<FooterOption className={`fa ${fIcon}`} onClick={handleClick}>
						{fOption}
					</FooterOption>
				</CardFooter>
			) : (
				''
			)}
		</DropdownMenuCard>
	);
};

export default DropdownMenu;
