import { FlexTemplate } from './components/FlexTemplate/FlexTemplate'
import Pagination from './components/Pagination/Pagination'
import {
	PokemonList,
	PokemonListHeader,
	PokemonListRow,
	PokemonListRowItem,
} from './components/PokemonTable/PokemonTable'
import { GlobalStyle } from './globalstyles'
import Image from './components/Image/Image'
import background from './images/592678.jpg'

function App() {
	return (
		<>
			<GlobalStyle />
			<FlexTemplate gap='5px' width='100vw' height='100vh' alignItems='center'>
				<Image url={background} width='50%' height='100%' cover></Image>
				<FlexTemplate flexDirection='column' width='50%' alignItems='center'>
					<PokemonList
						width='100%'
						justifyContent='center'
						alignItems='center'
						gap='3px'
						color={'#30768d'}
						rowsColor={'#f4f4f4'}
						headerColor={'#FFFF00'}
						rowsHoverBackgroundColor={'#1a5cb0'}>
						<PokemonListHeader gridTemplateColumns={'0.1fr 0.2fr 0.25fr 0.15fr 0.10fr 0.20fr'}>
							<PokemonListRowItem>ID</PokemonListRowItem>
							<PokemonListRowItem>POKEMON</PokemonListRowItem>
							<PokemonListRowItem>NAME</PokemonListRowItem>
							<PokemonListRowItem>MIN.LVL</PokemonListRowItem>
							<PokemonListRowItem>TYPE</PokemonListRowItem>
							<PokemonListRowItem>EVOLUTION</PokemonListRowItem>
						</PokemonListHeader>
						<PokemonListRow gridTemplateColumns={'0.1fr 0.2fr 0.25fr 0.15fr 0.10fr 0.20fr'}>
							<PokemonListRowItem>1</PokemonListRowItem>
							<PokemonListRowItem>2</PokemonListRowItem>
							<PokemonListRowItem>3</PokemonListRowItem>
							<PokemonListRowItem>4</PokemonListRowItem>
							<PokemonListRowItem>5</PokemonListRowItem>
							<PokemonListRowItem>6</PokemonListRowItem>
						</PokemonListRow>
						<PokemonListRow gridTemplateColumns={'0.1fr 0.2fr 0.25fr 0.15fr 0.10fr 0.20fr'}>
							<PokemonListRowItem>1</PokemonListRowItem>
							<PokemonListRowItem>2</PokemonListRowItem>
							<PokemonListRowItem>3</PokemonListRowItem>
							<PokemonListRowItem>4</PokemonListRowItem>
							<PokemonListRowItem>5</PokemonListRowItem>
							<PokemonListRowItem>6</PokemonListRowItem>
						</PokemonListRow>
					</PokemonList>
					<Pagination count={10} />
				</FlexTemplate>
			</FlexTemplate>
		</>
	)
}

export default App
