import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as spotifyAPI from '../api/spotifyAPI'
import { setPlaylist, setPlaylistId } from '../redux/playSlice'
import styled from 'styled-components'

const Playlist = () => {
    const [playlists, setPlaylists] = useState()
    const dispatch = useDispatch()
    const token = useSelector(state => state.play.token)

    useEffect(()=>{
        if(token){
            spotifyAPI.getMyPlaylist(token)
            .then(data => {
                setPlaylists(data)
                dispatch(setPlaylist(data))
            })
        }  
    },[token, dispatch])

    const changeCurrentPlaylistId = (id) =>{
        dispatch(setPlaylistId(id))
    }
    
  return (
    <Container>
        <div className="line"></div>
        <ul className="playlist">
            {
                playlists && playlists.map(item =>(
                    <li key={item.id} className="playlist__item" onClick={() => changeCurrentPlaylistId(item.id)}>
                        <img src={item.images[0].url} alt="" className="icon" />
                        <span>{item.name}</span>
                    </li>
                ))
            }
        </ul>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 1rem;
    .line{
        background-color: #ccc;
        height: 1px;
        width: 100%;
    }
    .playlist{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .playlist__item{
            cursor: pointer;
            list-style-type: none;
            display: flex;
            align-items: center;
            img{
                width: 24px;
                height: 24px;
            }
            span{
                margin-left: 0.5rem;
            }
        }
    }
`

export default Playlist