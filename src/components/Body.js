import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as spotifyAPI from '../api/spotifyAPI'
import { setCurrentPlaylist } from '../redux/playSlice'
import styled from 'styled-components'
import {FaPlay} from 'react-icons/fa'
import {FiClock} from 'react-icons/fi'
import { setPlayerState } from '../redux/playSlice'
import { setPlaying } from '../redux/playSlice'
import moment from 'moment'

const Body = ({headerBackground}) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState()
  const token = useSelector(state => state.play.token)
  const playlistId = useSelector(state => state.play.selectedPlaylistId)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(token){
      if(playlistId){
        spotifyAPI.getInitPlaylist(token, playlistId)
        .then(data => {
          setSelectedPlaylist(data)
          dispatch(setCurrentPlaylist(data))
        })
      }
    }
  },[token, playlistId, dispatch])

  const convertMStoMinu = (ms) =>{
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const playTrack = ( image, name, artists) =>{
    dispatch(setPlayerState(true))
    dispatch(setPlaying({image, name, artists}))
  }
  return (
    <Container headerBackground = {headerBackground}>
      {
        selectedPlaylist && (
          <>
            <div className="playlistInfo">
              <div className="playlist__img">
                <img src={selectedPlaylist.images[0].url} alt="" />
              </div>
              <div className="playlist__details">
                <span>PLAYLIST</span>
                <h1 className="title">{selectedPlaylist.name}</h1>
                <p className="description">{selectedPlaylist.owner.display_name} • {selectedPlaylist.tracks.total} songs</p>
              </div>
            </div>
            <div className="playlistOptions">
              <div className="play__btn">
                <FaPlay/>
              </div>
              <div className="option__btn">• • •</div>
            </div>
            <div className="list">
              <div className="header" >
                <div className="header__row">
                  <span>#</span>
                  <span>Title</span>
                  <span>Album</span>
                  <span>Date added</span>
                  <FiClock/>
                </div>
              </div>
              <div className="tracks">
                {
                  selectedPlaylist.tracks.items && selectedPlaylist.tracks.items.map((item,index)=>(
                      <React.Fragment key={index}>
                        <div className="track" 
                              onClick = {
                                ()=>playTrack(
                              item.track.album.images[2].url, 
                              item.track.name, 
                              item.track.artists[0].name
                              )} >
                          <span className="track__index">{index + 1}</span>
                          <div className="track_name">
                            <img src={item.track.album.images[0].url} alt="" />
                            <div className="artist">
                              <span className="name">{item.track.name}</span>
                              <span className="author">{item.track.artists[0].name}</span>
                            </div>
                          </div>
                          <span className="track_album">{item.track.album.name}</span>
                          <span className="track__dateadded">{moment(`${item.added_at}`).fromNow()}</span>
                          <span className="track__duration">{convertMStoMinu(`${item.track.duration_ms}`)}</span>
                        </div>
                      </React.Fragment>
                    ))
                }
              </div>
            </div>
          </>
        )
      }
    </Container>
  )
}

const Container = styled.div`
  .playlistInfo{
    padding: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    .playlist__img{
      width: 192px;
      height: 192px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .playlist__details{
      color: #fff;
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      span{
        font-size: 13px;
        font-weight: 500;
      }
      .title{
        font-size: 5rem;
        font-weight: 900;
      }
      .description{
        font-weight: 500;
        font-size: 13px;
      }
    }
  }

  .playlistOptions{
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    .play__btn{
      cursor: pointer;
      background-color: #1ed760;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
      text-align: center;
      transition: all 0.2s linear;
      svg{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35%;
        height: 35%;
      }
      &:hover{
        transform: scale(1.1);
      }
    }
    .option__btn{
      color: #b3b3b3;
      cursor: pointer;
      &:hover{
        color: #fff;
      }
    }
  }
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .header{
      position: sticky;
      top: 110px;
      right: 0;
      left: 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 1rem 1rem;
      background-color: ${({headerBackground}) => headerBackground?'rgba(0,0,0,0.8)':'none'};
      .header__row{
        color: ${({headerBackground}) => headerBackground?'rgba(255,255,255,0.8)':'#b3b3b3'};
        display: grid;
        grid-template-columns: 16px 6fr 4fr 4fr minmax(120px,1fr);
        align-items: center;
        gap: 1rem;
        text-transform: uppercase;
        span:not(:first-child){
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05rem;
        }
      }
    }
    .tracks{
      padding: 0 2rem;
      margin: 1rem 0;
      .track{
        padding: 0.5rem 1rem;
        color: #b3b3b3;
        display: grid;
        grid-template-columns: 16px 6fr 4fr 4fr minmax(120px,1fr);
        align-items: center;
        gap: 1rem;
        font-size: 14px;
        font-weight: 500;
        .track_name{
          display: flex;
          align-items: center;
          img{
            width: 40px;
            height: 40px;
            object-fit: cover;
            margin-right: 1rem;
          }
          .artist{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .name{
              color: #fff;
            }
          }
        }
        &:hover{
          border-radius: 0.5rem;
          cursor: pointer;
          background-color: rgba(255,255,255,0.1);
        }
        &:active{
          border-radius: 0.5rem;
          cursor: pointer;
          background-color: rgba(255,255,255,0.4);
        }
      }
    }
  }
`
export default Body