import React from 'react'
import styled from 'styled-components'
import { Router, Link } from '@reach/router'
import Home from './page/Home'
import Detail from './page/Detail'

const Wrapper = styled.section`
  padding: 5px;
  background: papayawhip;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`

function App() {
  return (
    <Wrapper>
      <Title>test</Title>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/detail">Detail</Link>
      </nav>

      <Router>
        <Home path="/" />
        <Detail path="/detail" />
      </Router>
    </Wrapper>
  )
}

export default App
