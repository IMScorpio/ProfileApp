import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState({}); 

  const fetchData = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/"); 
    console.log("RESPONSE:", data);
    const details = data.results[0];
    setUserData(details);
  };
  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Card details={userData} />
    </div>
  );
}

export default App;

