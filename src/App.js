import Pagination from './components/pagination/Pagination'
import {
	PokemonList,
	PokemonListHeader,
	PokemonListRow,
	PokemonListRowItem,
} from './components/pokemonTable/PokemonTable'
import { GlobalStyle } from './globalstyles'

function App() {
	return (
		<>
			<GlobalStyle />
			<PokemonList justifyContent='center' alignItems='center' gap='10px' color={'#30768d'} rowsColor={'#f4f4f4'} headerColor={'#FFFF00'}>
				<PokemonListHeader gridTemplateColumns={'0.1fr 120px 0.25fr 0.15fr 0.15fr 0.15fr'}>
					<PokemonListRowItem>ID</PokemonListRowItem>
					<PokemonListRowItem>POKEMON</PokemonListRowItem>
					<PokemonListRowItem>NAME</PokemonListRowItem>
					<PokemonListRowItem>MIN.LVL</PokemonListRowItem>
					<PokemonListRowItem>TYPE</PokemonListRowItem>
					<PokemonListRowItem>EVOLUTION</PokemonListRowItem>
				</PokemonListHeader>
				<PokemonListRow gridTemplateColumns={'0.1fr 120px 0.25fr 0.15fr 0.15fr 0.15fr'}>
					<PokemonListRowItem>1</PokemonListRowItem>
					<PokemonListRowItem>2</PokemonListRowItem>
					<PokemonListRowItem>3</PokemonListRowItem>
					<PokemonListRowItem>4</PokemonListRowItem>
					<PokemonListRowItem>5</PokemonListRowItem>
					<PokemonListRowItem>6</PokemonListRowItem>
				</PokemonListRow>
				<PokemonListRow gridTemplateColumns={'0.1fr 120px 0.25fr 0.15fr 0.15fr 0.15fr'}>
					<PokemonListRowItem>1</PokemonListRowItem>
					<PokemonListRowItem>2</PokemonListRowItem>
					<PokemonListRowItem>3</PokemonListRowItem>
					<PokemonListRowItem>4</PokemonListRowItem>
					<PokemonListRowItem>5</PokemonListRowItem>
					<PokemonListRowItem>6</PokemonListRowItem>
				</PokemonListRow>
			</PokemonList>
			<Pagination count={10} />
		</>
	)
}

export default App
