import { createSlice } from "@reduxjs/toolkit";

export const playSlice = createSlice({
    name: "play",
    initialState:{
        token: null,
        userInfo: null,
        playlist: [],
        currentPlaylist: null,
        playerState: false,
        selectedPlaylist: null,
        selectedPlaylistId: "",
        currentPlaying: null
    },
    reducers: {
        setTokenStr: (state, action) => {
            state.token = action.payload
        },
        setPlaylist: (state, action) =>{
            state.playlist = [...state.playlist,action.payload]
        },
        setInfoUser: (state, action) =>{
            state.userInfo = action.payload
        },
        setPlaylistId : (state, action) =>{
            state.selectedPlaylistId = action.payload
        },
        setCurrentPlaylist: (state, action) =>{
            state.currentPlaylist = action.payload
        },
        setPlayerState: (state, action) =>{
            state.playerState = action.payload
        },
        setPlaying : (state,action) =>{
            state.currentPlaying = action.payload
        }

    }
})

export const {
    setTokenStr, 
    setPlaylist, 
    setInfoUser, 
    setPlaylistId, 
    setCurrentPlaylist, 
    setPlayerState, 
    setPlaying
} = playSlice.actions

export default playSlice.reducer