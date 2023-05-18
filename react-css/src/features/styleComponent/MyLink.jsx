import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const StyleLink = styled(Link)`
    font-size: 1.2rem;
    font-weight: bold;
    color : #ff7c0a;
    text-decoration: none;

    // &기호는 자기자신을 가져온다
    &:hover {
      color: #ff430a;
    }
    &+div{
      background-color: #b8deff;
    }
`

export default function MyLink({children, ...rest}) {
  return (
    <StyleLink {...rest}>{children}</StyleLink>
  )
}
