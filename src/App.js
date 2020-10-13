import React from 'react';
import Profil from './profil/Profil'
import './App.css';


function App() {
  var name ="Mohamed Wael Gharbi"
  const handleClick = e => {
    e.preventDefault()
    alert("Welcome "+name)
  }
  return (
    <div className="App">
      <div className="container">
        <Profil 
                handleClick={handleClick} 
                fullName={name}
                bio="A wise man can be found alone ; a weak man can be found in a crowd."
                profession="FullStack JavaScript"
        >
          <img src="/images/circle-cropped.png" alt="profil"/>
        </Profil>
      </div>
    </div>
  );
}

export default App;
