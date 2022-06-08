import axios from "axios";
const baseURL = "https://api.spotify.com/v1"

export const getMyPlaylist = async (token) =>{
    try {
        const result = await axios.get(`${baseURL}/me/playlists`,{
            headers: {
                'Authorization': `Bearer ${token}` ,
                'Content-Type': 'application/json'
            }
        })
        return result.data.items
    } catch (error) {
        return error.response
    }
    
}

export const getUserInfo = async(token) =>{
    try {
        const result = await axios.get(`${baseURL}/me/`,{
         headers: {
            'Authorization': `Bearer ${token}` ,
            'Content-Type': 'application/json'
         }   
        })
        return result.data
    } catch (error) {
        return error.response
    }
}

export const getInitPlaylist = async (token, playlistId) =>{
    try {
        const result = await axios.get(`${baseURL}/playlists/${playlistId}`, {
            headers: {
                'Authorization': `Bearer ${token}` ,
                'Content-Type': 'application/json'
            }
        })
        return result.data
    } catch (error) {
        return error.response
    }
}

export const startResumePlayback = async (token, uri, trackNumber) =>{
    try {
        const result = await axios.put(`${baseURL}/me/player/play`,{
            context_uri: uri,
            offset: {
              position: trackNumber - 1,
            },
            position_ms: 0,
          },
           {
            headers: {
                'Authorization': `Bearer ${token}` ,
                'Content-Type': 'application/json'
            }
        })
        return result.data
    } catch (error) {
        return error.response
    }
}