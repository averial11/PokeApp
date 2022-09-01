import styled from 'styled-components'

export const ButtonWrapper = styled.div`
	background-color: ${({ isActive }) => (isActive ? 'blue' : 'yellow')};
	color: ${({ isActive }) => (isActive ? 'yellow' : 'blue')};
	padding: 3px;

	:hover {
		background-color: ${({ isActive }) => (isActive ? 'yellow' : 'blue')};
		color: ${({ isActive }) => (isActive ? 'blue' : 'yellow')};
        cursor: pointer;
	}
`
/* hover {
        przyciski na hover zrobic
        kolorki pobrac 
        obrazki jako kompontent
    } */
