import type { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #ffe8e8;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom 0;
  color: #9484C3;
`

const Try: NextPage = () => {
  return (
    <Wrapper>
      <h1>Coming soon.</h1>
    </Wrapper>
  )
}

export default Try
