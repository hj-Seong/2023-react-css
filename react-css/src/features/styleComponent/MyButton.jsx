import React from 'react'
import { styled } from 'styled-components'

// 스타일드 컴포넌트를 통해서 a태그를 디자인하고
// padding,
const Button = styled.a`
    padding: 5px 7px;
    color: orange;
    background-color: beige;
    border-radius: 5px;
`

// onClick이벤트를 이용해서 alert창을 출력하세요
// >> App.js에 MyButton 호출하신 후에 출력
export default function MyButton({children, ...rest}) {
  return (
    <Button {...rest}>{children}</Button>
  )
}
