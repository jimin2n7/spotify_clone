import React from 'react'
import styled from 'styled-components'

const Volumn = () => {
  return (
    <Container>
      <input type="range" name="" id="" min={0} max={100} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  input{
    height: 5px;
    width: 10rem;
  }
`

export default Volumn