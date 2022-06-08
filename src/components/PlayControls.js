import React from 'react'
import {IoShuffleOutline, IoPlay, IoPlaySkipBack, IoPlaySkipForward} from 'react-icons/io5'
import {BiRepeat} from 'react-icons/bi'
import styled from 'styled-components'


const PlayControls = () => {
  return (
    <Container>
        <div className="controls__btns">
            <div className="controls__btns-left">
                <div className="shuffe">
                    <IoShuffleOutline/>
                </div>
                <div className="skipBack">
                    <IoPlaySkipBack/>
                </div>
            </div>
            <div className="controls__btns-playpause">
                <IoPlay/>
            </div>
            <div className="controls__btns-right">
                <div className="skipForward">
                    <IoPlaySkipForward/>
                </div>
                <div className="repeat">
                    <BiRepeat/>
                </div>
            </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .controls__btns{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        &-left{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            div{
                cursor: pointer;
                width: 2rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                svg{
                    width: 70%;
                    height: 70%;
                    color: #b3b3b3;
                    &:hover{
                    color: #fff;
                }
                }
            }
        }
        &-right{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.5rem;
            div{
                cursor: pointer;
                width: 2rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                svg{
                    width: 70%;
                    height: 70%;
                    color: #b3b3b3;
                    &:hover{
                    color: #fff;
                    }
                }
            }
        }
        &-playpause{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            background-color: #fff;
            border-radius: 50%;
            &:hover{
                transform: scale(1.05);
            }
            svg{
                width: 70%;
                height: 70%;
            }
        }
    }
`
export default PlayControls