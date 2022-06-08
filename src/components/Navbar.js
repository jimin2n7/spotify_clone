import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import { useSelector } from 'react-redux'


const Navbar = ({navBackground}) => {
  const userInfo = useSelector(state => state.play.userInfo)

  return (
    <Container navBackground ={navBackground}>
      <div className="search__bar">
          <FaSearch/>
          <input type="text" placeholder='Artists, Songs or Podcasts' />
      </div>
      <div className="user__avatar">
          {
            userInfo && (
              <a href={userInfo.external_urls.spotify && userInfo.external_urls.spotify}>
                <BiUserCircle/>
                <span>{userInfo.email && userInfo.email}</span>
              </a>
            )
          }
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 110px;
  position: sticky;
  top: 0;
  left: 18vw;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in;
  background-color: ${({navBackground}) => navBackground?'rgba(0,0,0,0.7)':'none'};
  padding: 2rem;
  .search__bar{
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    border-radius: 2rem;
    gap: 0.5rem;
    input{
      border: none;
      outline: none;
    }
  }
  .user__avatar{
      overflow: hidden;
      background-color: #000;
      padding: 0.25rem 0.5rem;
      border-radius: 1rem;
      a{
        display: flex;
        align-items: center;
        gap: 0.25rem;
        text-decoration: none;
        svg{
          color: #fff;
          width: 20px;
          height: 20px;
        }
        span{
          color: #ccc;
          font-size: 0.9rem;
          width:100px;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: all 1.5s ease-in;
        }
      }
      &:hover{
        span{
          width: 100%;
        }
      }
    }
`

export default Navbar