import React from 'react'
//npm 으로 설치시 @를 이용하여 버전을 선택할수 있다
//npm i styled-components@latest
import { styled } from 'styled-components'

const Button = styled.a`
    display: inline-block;
    padding: 5px 12px;
    border-radius: 5px;
    /** props color 값으로 받아와서 다른 색으로 출력하기  */
    background-color: ${props => props.color ? props.color :  "#0056b8"};
    color: white;
`
// 만든 스타일드 컴포넌트에 디자인을 추가하고싶을때
// 원본이 되는 컴포넌트에 className이 들어가있어야한다
// ...rest를 통해서 props 값을 다 전달했다면 className도 전달된 상태  
export default function CommonButton({children, ...rest}) {
  return (
    <Button {...rest}>{children}</Button>
  )
}
