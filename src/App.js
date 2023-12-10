import './App.css';
import { useState } from "react";
import {splitStringToArr, formatArrToMatrix, sanitizeArr} from './utils/dataUtils';
import DataTable from "./components/DataTable";
import MostPointsInSingleGameDataTable from "./components/MostPointsInSingleGameDataTable";
import MostPointsForAllTimeDataTable from './components/MostPointsForAllTimeDataTable';
import PointsPerGameTimeDataTable from './components/PointsPerGameTimeDataTable';
import MostPointsForAllTimePerTeamDataTable from './components/MostPointsForAllTimePerTeamDataTable';
import BestPlayerInTeamPerPointsDataTable from './components/BestPlayerInTeamPerPointsDataTable';

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
     <DataTable data={data} />
     <MostPointsInSingleGameDataTable data={data} />
     <MostPointsForAllTimeDataTable data={data} />
     <PointsPerGameTimeDataTable data={data} />
     <MostPointsForAllTimePerTeamDataTable data={data} />
     <BestPlayerInTeamPerPointsDataTable data={data} />
    </div>
  );
}

export default App;