import Button from '../Button/Button'
import { PaginationWrapper } from './Pagination.styled'

const Pagination = ({ count }) => {
	const getElementsOfPagination = () => {
		let elements = []

		for (let i = 0; i < count; i++) {
			elements.push(<Button>{i + 1}</Button>)
		}

		return elements
	}

	return (
		<PaginationWrapper>
			<Button>{'<'}</Button>
			{getElementsOfPagination()}
			<Button>{'>'}</Button>
		</PaginationWrapper>
	)
}

export default Pagination


// buttony ostylowac i dokumentacja