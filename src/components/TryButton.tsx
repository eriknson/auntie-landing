import * as React from 'react'
import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Button = styled.a`
  top: 16px;
  right: 16px;
  padding: 16px;
  border-radius: 16px;
  font-weight: 600;
  position: fixed;
  background: rgb(255, 255, 255, 1);
  color: black;
  tranisition: all 0.3s ease;

  &:hover {
    background: rgb(255, 255, 255, 0.75);
  }
`

const TryButton: FC = () => (
  <Link href='/try' passHref={true}>
    <Button>Try for free</Button>
  </Link>
)

export default TryButton
