import React, { useEffect,  useRef,  useState } from 'react'
import styled from 'styled-components'
import Body from './Body'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import * as SpotifyAPI from '../api/spotifyAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setInfoUser } from '../redux/playSlice'

const Spotify = () => {
  const [navBackground, setNavBackground] = useState(false)
  const [headerBackground, setHeaderBackground] = useState(false)
  
  const token = useSelector(state => state.play.token)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(token){
      SpotifyAPI.getUserInfo(token)
      .then(data => {
        dispatch(setInfoUser(data))
      })
    }
  },[token, dispatch])

  const bodyRef = useRef()
  const handleScroll = () =>{
    if(bodyRef){
      bodyRef.current.scrollTop >= 110
      ? setNavBackground(true)
      : setNavBackground(false);
      bodyRef.current.scrollTop >= 300
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
    }
  }

  return (
    <Container>
      <div className="spotify__body">
        <Sidebar/>
        <div className="body" ref={bodyRef} onScroll={handleScroll}>
          <Navbar navBackground = {navBackground}/>
          <div className="body__content">
            <Body headerBackground={headerBackground}/>
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer/>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body{
    
    position: relative;
    display: grid;
    grid-template-columns: 18vw 82vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgba(32,87,100);

    .body{
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.2rem;
        max-height: 0.5rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`

export default Spotify