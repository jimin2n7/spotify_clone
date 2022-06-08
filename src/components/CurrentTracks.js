import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CurrentTracks = () => {
  const trackInfo = useSelector(state => state.play.currentPlaying)
  return (
    <Container>
      {trackInfo&&(
        <>
          <div className="image">
            <img src={trackInfo.image} alt="asdsa" />
          </div>
          <div className="track__info">
            <span className="name">{trackInfo.name}</span>
            <span className="artists">{trackInfo.artists}</span>
          </div>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  .image{
    width: 56px;
    height: 56px;
    img{
      width: 100%;
      height: 100%;
    }
  }

  .track__info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name{
      font-size: 13px;
      color: #fff;
    }
    .artists{
      font-size: 11px;
      color: #b3b3b3;
    }
  }
`

export default CurrentTracks