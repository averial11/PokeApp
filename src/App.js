import Button from './components/button/Button'
import Pagination from './components/pagination/Pagination'
import { GlobalStyle } from './globalstyles'

function App() {
	return (
		<>
			<GlobalStyle />
			<Pagination count={10} />
		</>
	)
}

export default App
