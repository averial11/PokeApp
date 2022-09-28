import styled from 'styled-components'

export const FlexTemplate = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	justify-content: ${({ justifyContent }) => justifyContent};
	align-items: ${({ alignItems }) => alignItems};
	gap: ${({ gap }) => gap};
`
