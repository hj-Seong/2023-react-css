import React from 'react'
import { styled } from 'styled-components'

// 스타일드 컨포넌트를 통해서 버튼 
const Button = styled.a`
    color: ${props => props.color};
    background-color: ${props=>props.bgcolor};
    /* font-size 크기를 받아와서 그 크기대로 출력 */
`
    // ...rest는 나머지 연산자로 남은 매개변수의 값들을 배열/객체로 들고온다
export default function StyleButton({children, ...rest}) {
  /** 아래 ...은 스프레드 연산자로 안의 값을 풀어서 씀 */
  console.log(rest)
  return (
    <Button {...rest}>{children}</Button>
  )
}
