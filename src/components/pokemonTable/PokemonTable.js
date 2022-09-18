import styled from 'styled-components'

export const PokemonListRow = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: ${({ columnsNumber, gridTemplateColumns }) => {
		if (columnsNumber) {
			return `repeat(${columnsNumber}, minmax(0, 1fr))`
		} else if (gridTemplateColumns) {
			return gridTemplateColumns
		}

		return `minmax(0, 1fr)`
	}};
	grid-auto-flow: column;
	background-color: ${({ backgroundColor }) => backgroundColor};
`

export const PokemonListRowItem = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 10px;
	align-items: ${({ alignItems }) => alignItems};
	justify-content: ${({ justifyContent }) => justifyContent};
`

export const PokemonListHeader = styled(PokemonListRow)`
	font-weight: bold;
`

export const PokemonList = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Poppins', sans-serif;
	font-size: 0.8em;
	color: ${({ color }) => color};
	width: ${({ width }) => width};
	gap: ${({ gap }) => gap};
	background-color: ${({ backgroundColor }) => backgroundColor};

	${PokemonListRowItem} {
		align-items: ${({ alignItems }) => alignItems};
		justify-content: ${({ justifyContent }) => justifyContent};
	}

	${PokemonListRow} {
		background-color: ${({ rowsColor }) => rowsColor};
		transition: background-color 0.3s;

		:hover {
			background-color: #1a5cb0;
			color: yellow;
			cursor: pointer;
		}
	}

	${PokemonListHeader} {
		background-color: ${({ headerColor }) => headerColor};
	}
`
