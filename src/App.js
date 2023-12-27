import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/NavBar';
import ConfigManage from './components/host/ConfigManage';

import CPU from './components/host/utilization/CPU';
import DbResource from './components/DbResource';
import Home from './components/Home';
import Memory from './components/host/utilization/Memory';
import ServerLoad from './components/host/utilization/ServerLoad';
import Swap from './components/host/utilization/Swap';
import QueueLength from './components/host/utilization/QueueLength';
import Network from './components/host/utilization/Network';
import { FileSystem } from './components/host/utilization/FileSystem';
import HouseKeeping from './components/host/operation/HouseKeeping';
import SwapMonitor from './components/host/operation/SwapMonitor';
import SGA from './components/Database/information/SGA';
import FreeSpace from './components/Database/monitoring/FreeSpace';
import InitParam from './components/Database/information/InitParam';
import ControlFiles from './components/Database/information/ControlFiles';
import RedoLog from './components/Database/information/RedoLog';
import TableSpace from './components/Database/information/TableSpace';
import DataFiles from './components/Database/information/DataFiles';
import TempFiles from './components/Database/information/TempFiles';
import TopSession from './components/Database/monitoring/TopSession';
import DbSync from './components/Database/monitoring/DbSync';
import TopSql from './components/Database/monitoring/TopSql';
import Backup from './components/Database/monitoring/Backup';
import SessionAnalysis from './components/Database/monitoring/SessionAnalysis';
import Operation from './components/Database/operation/Operation';
import Unlock from './components/Database/operation/Unlock';
import Reset from './components/Database/operation/Reset';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/navbar" element={<NavBar />} />
          <Route path='/home' element={<Home/>}/>
          {/* HOST */}

          <Route path='/configmanage' element={<ConfigManage/>}/>
          <Route path='/serverload' element={<ServerLoad/>}/>
          <Route path='/memory' element={<Memory/>}/>
          <Route path='/cpu' element={<CPU/>}/>
          <Route path='/swap' element={<Swap/>}/>
          <Route path='queuelength' element={<QueueLength/>}/>
          <Route path='/network' element={<Network/>}/>
          <Route path='/filesystem' element={<FileSystem/>}/>

          <Route path='/housekeeping' element={<HouseKeeping/>}/>
          <Route path='/swapmonitoring' element={<SwapMonitor/>}/>

          {/* DataBase */}
          <Route path='/sgainfo' element={<SGA/>}/>
          <Route path='/initparam' element={<InitParam/>}/>
          <Route path='/controlfile' element={<ControlFiles/>}/>
          <Route path='/redo' element={<RedoLog/>}/>
          <Route path='/tablespace' element={<TableSpace/>}/> 
          <Route path='/datafiles' element={<DataFiles/>}/>
          <Route path='/temporaryfiles' element={<TempFiles/>}/>


          <Route path='/freespace' element={<FreeSpace/>}/>
          <Route path='/topsession' element={<TopSession/>}/>
          <Route path='/dbsync' element={<DbSync/>}/>
          <Route path='/topsql' element={<TopSql/>}/>
          <Route path='/backup' element={<Backup/>}/>

          <Route path='/session' element={<SessionAnalysis/>}/>




        {/* Operation Routes  */}
        <Route path='/operation' element={<Operation/>}/>
        <Route path='/unlock' element={<Unlock/>}/>
        <Route path='/reset' element={<Reset/>}/>


          <Route path='/dbresource' element={<DbResource/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
