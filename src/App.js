import './App.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

function App() {
  const [searchword, setSearchword] = useState('')

  return (
    <div className="App">
      <div className="InputBox">
        <input type="text" placeholder="🔍 Search. . ." onChange={event => { setSearchword(event.target.value) }} />

      </div>
      {JSONDATA.filter((val) => {
        if (searchword == '') return val;
        else if (val.first_name.toLowerCase().includes(searchword.toLowerCase())) {
          return val;
        }
      }).map((data, key) => {
        return (
          <div key={key}>
            <p className="name">{data.first_name}</p></div>
        )
      })}
    </div>
  );
}

export default App;
