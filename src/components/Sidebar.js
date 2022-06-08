import React from 'react'
import styled from 'styled-components'
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlist from './Playlist';

const Sidebar = () => {
  return (
    <Container>
      <div className="top__links">
        <div className="logo__image">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" />
        </div>
        <ul className="links">
          <li className="link">
            <MdHomeFilled/>
            <span>Home</span>
          </li>
          <li className="link">
            <MdSearch/>
            <span>Search</span>
          </li>
          <li className="link">
            <IoLibrary/>
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlist/>
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #b3b3b3;
  
  .top__links{
    display: flex;
    flex-direction: column;
    .logo__image{
      margin: 1rem 0;
      text-align: center;
      img{
        cursor: pointer;
        width: 85%;
        height: 85%;
        object-fit: contain;
      }
    }
    .links{
      display: flex;
      list-style-type: none;
      flex-direction: column;
      .link{
        cursor: pointer;
        padding:  0.5rem 1rem;
        display: flex;
        align-items: center;
        transition: all 0.2s ease-in;
        svg{
          width: 24px;
          height: 24px;
        }
        span{
          margin-left: 0.5rem;
        }
        &:hover{
          filter: brightness(2);
        }
      }
    }
  }
`
export default Sidebar