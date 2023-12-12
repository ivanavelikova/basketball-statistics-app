import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import DataTable from './components/DataTable';
import MostPointsForAllTimeDataTable from './components/MostPointsForAllTimeDataTable';
import MostPointsForAllTimePerTeamDataTable from './components/MostPointsForAllTimePerTeamDataTable';
import MostPointsInSingleGameDataTable from './components/MostPointsInSingleGameDataTable';
import BestPlayerInTeamPerPointsDataTable from './components/BestPlayerInTeamPerPointsDataTable';
import PointsPerGameTimeDataTable from './components/PointsPerGameTimeDataTable';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/stats" element={<DataTable />}/>
        <Route path="/most-points-all-time" element={<MostPointsForAllTimeDataTable />}/>
        <Route path="/most-points-all-time-teams" element={<MostPointsForAllTimePerTeamDataTable />}/>
        <Route path="/most-points-single-game" element={<MostPointsInSingleGameDataTable />}/>
        <Route path="/best-player-teams" element={<BestPlayerInTeamPerPointsDataTable />}/>
        <Route path="/points-game" element={<PointsPerGameTimeDataTable />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);