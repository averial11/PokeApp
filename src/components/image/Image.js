import React from 'react'
import { ImageWrapper } from './Image.styled'

const Image = props => {
	return <ImageWrapper url={props.url} width={props.width} height={props.height} cover={props.cover}></ImageWrapper>
}

export default Image
