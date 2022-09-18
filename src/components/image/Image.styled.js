import styled from 'styled-components'

export const ImageWrapper = styled.div`
	background-image: url(${props => props.url});
	min-height: ${props => props.height || '100%'};
	width: ${props => props.width || '100%'};
	background-size: ${props => (props.cover ? 'cover' : 'contain')};
	margin: 0;
	background-position: center;
	background-repeat: no-repeat;
	padding: 0;
`
