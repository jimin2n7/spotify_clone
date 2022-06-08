import React from 'react'
import styled from 'styled-components'

const Login = () => {
    const handleConnect = () =>{
        const client_id = "4da8fa044a914a818bc7a9337d13c6fa"
        const redirect_uri = "http://localhost:3000/"
        const api_uri = "https://accounts.spotify.com/authorize"
        
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    }
  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="Spotify" />
        <button onClick={handleConnect}>Connect Spotify</button>
    </Container>
  )
}

const Container = styled.div`
    background-color: #1db954;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    gap: 5rem;
    img{
        height: 20vh;
    }
    button{
        border: none;
        outline: none;
        padding: 1rem 5rem;
        border-radius: 5rem;
        cursor: pointer;
        color: #49f585;
        background-color: black;
        font-size: 0.5;
    }
`
export default Login