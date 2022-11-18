import { useEffect, useState } from "react";
import "./styles.css";
import axios from 'axios';
import CharacterRow from "./Components/CharacterRow"
export default function App() {
  const [characterData,setCharacterData]=useState([]);
  const [seriesData,setSeriesData]=useState({});
const getData=()=>{
  axios.get(`https://demo.tech2edge.co/samples/data-sg`)
  .then(function (response) {
    // handle success
    setCharacterData(response.data.characters);
    setSeriesData(response.data.series)
    console.log(response.data.series);
  })
  
}

useEffect(()=>{
  getData();
  return ()=>{
    setCharacterData([]);
  }
},[])
  return (
    <div className="App">
      <h1 className="headings">Watch Movies Online</h1>
      <div className="banner">
        <img src={`https://demo.tech2edge.co/samples/${seriesData.img}`} alt="netflixbanner"/>
      </div>
      <h2 className="headings">Characters</h2>
      <div className="columns">
        <div>Name</div>
        <div>Age</div>
        <div>Profession</div>
        <div>Image</div>
      </div>
      {characterData && characterData.map((item,id)=>(
        <div>
          <CharacterRow item={item} key={id}/>
        </div>
      ))}
      
      
    </div>
  );
}
