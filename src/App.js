import { useState } from 'react';
import './App.css';
import STUDENTS from "./MOCK_DATA.json"

function App() {
  const [searchWord, setSearchWord] = useState("")

  return (
    <div className="App">
      <input type="text" 
      placeholder="search..." 
      onChange={(e) => setSearchWord(e.target.value)}
      />

      {STUDENTS.filter((val) => {
        if (searchWord === "") {
          return ""
        } else if (val.first_name.toLowerCase().includes(searchWord.toLowerCase())) {
          return val
        }
      }
      ).map((val, key) => {
        return (
        <div key={key}>
          <p>{val.first_name}</p>
        </div>)
      })}
    </div>
  );
}

export default App;
