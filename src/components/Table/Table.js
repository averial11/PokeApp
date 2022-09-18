import styled from 'styled-components'

export const Table = styled.table`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-collapse: collapse;

	tr {
		margin-top: 10px;
	}
`

export const THead = styled.thead`
	background-color: ${({ backgroundColor }) => backgroundColor};
`

export const TBody = styled.tbody`
	background-color: ${({ backgroundColor }) => backgroundColor};
`

export const TRow = styled.tr`
	background-color: ${({ backgroundColor }) => backgroundColor};

	:hover {
		background-color: ${({ backgroundColorHover }) => backgroundColorHover};
	}
`
