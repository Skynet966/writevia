import React from 'react';

import styled from 'styled-components';

export const FormInputContainer = styled.div`
	margin: 0 0 20px;
`;
export const Input = styled.input`
	font-family: 'Montserrat', sans-serif;
	font-size: 1em;
	font-weight: 400;
	width: -webkit-fill-available;
	height: ${props => (props.type === 'textarea' ? '100px;' : '20px')};
	padding: 10px 15px;
	background-color: #fff;
	border-radius: 5px;
	border: 2px solid #e8eaed;
	outline: none;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const Label = styled.label``;

const FormInput = ({
	type,
	handleChange,
	handleClick,
	label,
	...otherProps
}) => {
	const uid = `${Date.now()}`;
	return (
		<FormInputContainer>
			{label ? <Label htmlFor={uid}>{label}</Label> : ''}
			<Input
				as={type === 'textarea' ? type : ''}
				type={type}
				id={uid}
				onClick={handleClick}
				onChange={handleChange}
				{...otherProps}
			/>
		</FormInputContainer>
	);
};

export default FormInput;
