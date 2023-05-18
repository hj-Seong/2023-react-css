import React from 'react'
import CommonButton from './CommonButton'

import { styled } from 'styled-components'
const ButtonTest = styled(CommonButton)`
    background-color: #ca0000;
`

export default function SpecialButton() {
  return (
    <ButtonTest>SpecialButton</ButtonTest>
  )
}
