import "../styles/BreweryList.css";
import { useState, useEffect } from "react";
import BreweryListItem from './BreweryListItem'
import mockBreweryData from './mockBreweryData';
import fetchData from "../AsyncFetch"

export default function BreweryList({url}) {
  const [ currentList, setCurrentList ] = useState([]);

  useEffect(() => {
     fetchData(url)
     .then(data => setCurrentList(data))
  },[]);

  return (
  <div className='brewery-list'>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    {currentList.map((b, i) =>{
    return <BreweryListItem brewery={b} index={i} key={i} />;
    })}
  </div>
  );
}