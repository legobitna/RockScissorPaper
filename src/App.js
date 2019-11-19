import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'


function App() {
  return (
    <div className="body-style">
     
      <Card color="red" img="http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"winner={true} title="you"></Card>
      <Card color="green" img="https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"winner={false} title="computer"></Card>
   
    </div>
  );
}

export default App;
