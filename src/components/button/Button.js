import { useState } from 'react'
import { ButtonWrapper } from './Button.styled'

const Button = ({ action, isActive, children }) => {
	return (
		<ButtonWrapper onClick={action} isActive={isActive}>
			{children}
		</ButtonWrapper>
	)
}

export default Button
