import React from 'react';

import { generateUUID } from '../../utils/utils.functions';

import { FormInputContainer, Input, Label } from './form-input.styles';

const FormInput = ({
	type,
	handleChange,
	handleClick,
	label,
	uid = generateUUID(),
	...otherProps
}) => (
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

export default FormInput;
