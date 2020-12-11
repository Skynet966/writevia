import React from 'react';

import { generateUUID } from '../../utils/utils.functions';

import { FormInputContainer, Input, Label } from './form-input.styles';

const FormInput = ({
	type,
	handleChange,
	handleClick,
	label,
	uid = generateUUID(),
	children,
	...otherProps
}) => (
	<FormInputContainer>
		{label ? <Label htmlFor={uid}>{label}</Label> : ''}
		<Input
			as={type === 'textarea' ? type : type === 'select' ? type : ''}
			type={type}
			id={uid}
			onClick={handleClick}
			onChange={handleChange}
			{...otherProps}
		>
			{children}
		</Input>
	</FormInputContainer>
);

export default FormInput;
