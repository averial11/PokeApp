import Button from '../button/Button'
import { PaginationWrapper } from './Pagination.styled'

const Pagination = ({ count }) => {
	const getElementsOfPagination = () => {
		let elements = []

		for (let i = 0; i < count; i++) {
			elements.push(<Button>test</Button>)
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
