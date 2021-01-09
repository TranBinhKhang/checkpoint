import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import songList from './songs';
import {LoopSong} from './loop'



export default function checkpointtest() {
  return (
    <Router>
      <div >
        <div style={{backgroundColor: "lightblue"}}>
      <span> <Link to="/">Home </Link></span>

<span><Link to="/newsong">Add new song </Link></span>

<span><Link to="/song">Songs </Link></span>

<hr />

</div>

  
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/newsong">
            <NewSong />
          </Route>
          <Route exact path="/song">
            <Songs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Welcome to checkpoint test</h2>
    </div>
  );
}

function NewSong() {
  return (
    <div>
      <h2>Placeholder</h2>
    </div>
  );
}


function Songs() {
  let { path, url } = useRouteMatch();
  const [songs, setSong] = useState(songList);


  return (
    songList.map(song => <li key={song.id}><Link to={`${url}/${song.id}`}>{song.title}</Link></li>)
  );

  

}

function Song() {

  let { songId } = useParams();
 var songDetail=  songList.find(m => m.id === songId);
  return (
     <ul>
       <li>{songDetail.title}</li>
       <li>{songDetail.author}</li>
       <li>{songDetail.publishedDate}</li>
       <li>{songDetail.lyric}</li>
     </ul>
  );
}

