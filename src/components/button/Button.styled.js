import styled from 'styled-components'

export const ButtonWrapper = styled.div`
	background-color: ${({ isActive }) => (isActive ? '#1a5cb0' : 'yellow')};
	color: ${({ isActive }) => (isActive ? 'yellow' : '#1a5cb0')};
	padding: 6px 12px;
	border-radius: 5px;
	font-weight: bold;


	:hover {
		background-color: ${({ isActive }) => (isActive ? 'yellow' : '#1a5cb0')};
		color: ${({ isActive }) => (isActive ? '#1a5cb0' : 'yellow')};
        cursor: pointer;
	}
`

