import React from 'react'
import styled from 'styled-components'
import CurrentTracks from './CurrentTracks'
import PlayControls from './PlayControls'
import Volumn from './Volumn'

const Footer = () => {
  return (
    <Container>
      <CurrentTracks/>
      <PlayControls/>
      <Volumn/>
    </Container>
  )
}

const Container = styled.div`
  background-color: #181818;
  width: 100%;
  height: 100%;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`

export default Footer