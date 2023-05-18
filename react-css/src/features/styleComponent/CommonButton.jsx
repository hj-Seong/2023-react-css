import React from 'react'
//npm 으로 설치시 @를 이용하여 버전을 선택할수 있다
//npm i styled-components@latest
import { styled } from 'styled-components'

const Button = styled.a`
    display: inline-block;
    padding: 5px 12px;
    border-radius: 5px;
    /** props color 값으로 받아와서 다른 색으로 출력하기  */
    background-color: #0056b8;
    color: white;
`

export default function CommonButton() {
  return (
    <Button>CommonButton</Button>
  )
}
