import Header from "./components/Header";
import axios from "axios";
import React , {useState, useEffect} from "react";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/Search";


function App() {
  const[items, setItems] = useState([])
  const[query,setQuery] = useState('')


    useEffect(() => {
      const Fetchitems = async () => {
        const respons  = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        console.log(respons.data)
       setItems(respons.data)
       
      }

      Fetchitems();
    } , [query]);



  return (
    <div className="container">
      <Header />
      <Search query={(q) => setQuery(q)}  />
    <CharacterGrid items={items} />
    </div>
  );
}

export default App;
