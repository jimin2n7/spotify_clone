import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import GlobalStyles from "./globalStyles";
import { setTokenStr } from "./redux/playSlice";

function App() {

  const dispatch = useDispatch();
  const [ token, setToken] = useState(null)

  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      setToken(hash.substring(1).split("&")[0].split('=')[1]) 
      if(token){
        dispatch(setTokenStr(token))
      }
    }
  },[token, dispatch])
  return (
    <div>
      <GlobalStyles/>
      {
        token?<Spotify/>:<Login/>
      }
    </div>
  );
}

export default App;
