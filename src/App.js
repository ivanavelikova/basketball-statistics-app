import './App.css';
import { useState } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import { splitStringToArr, formatArrToMatrix, sanitizeArr } from './utils/dataUtils';

function App() {
  const [data, setData] = useState([]);
  const [file, setSelectedFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    handleFileUpload(file);
  }

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  function getInvalidData(data) {
    return data.filter((row) => row.length !== 4);
  }

  function getValidData(data) {
    return data.filter((row) => row.length === 4);
  }

  function handleFileUpload(file) {
    const reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function() {
      const dataArr = splitStringToArr(reader.result);
      const dataMatrix = formatArrToMatrix(dataArr);
      const sanitizedArr = sanitizeArr(dataMatrix);
      const invalidData = getInvalidData(sanitizedArr);
      const validData = getValidData(sanitizedArr);

      if(invalidData) {
        const shouldContinue = window.confirm('The file contains missing fields. Do you want to continue processing the file?');
        
        if (!shouldContinue) {
          return;
        }
      }

      setData(validData);
    };
  }

  return (
    <div className="App">
      <h1>Basketball Statistics App</h1>
      <h2>Please upload a CSV file</h2>
      <form onSubmit={handleSubmit}>
       <input type={"file"} accept={".csv"} onChange={handleFileChange}/>
       <button>IMPORT</button>
     </form>
     <nav>
      <NavLink to={"/stats"} state={{ data: data }}>All Stats</NavLink>
      <NavLink to={"/most-points-all-time"} state={{ data: data }}>Most Points For All Time</NavLink>
      <NavLink to={"/most-points-all-time-teams"} state={{ data: data }}>Most Points For All Time Per Team</NavLink>
      <NavLink to={"/most-points-single-game"} state={{ data: data }}>Most Points In A Single Game</NavLink>
      <NavLink to={"/best-player-teams"} state={{ data: data }}>Best Player In Team</NavLink>
      <NavLink to={"/points-game"} state={{ data: data }}>Points Per Game Time</NavLink>
     </nav>
     
     {!!data.length && <Outlet />}
    </div>
  );
}

export default App;