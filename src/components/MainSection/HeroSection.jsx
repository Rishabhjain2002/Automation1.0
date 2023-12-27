import React from 'react'
import { useState } from 'react';
const Dropdown = ({ label, options, selectedValue, onChange }) => {
    return (
        <div style={{ margin: '0 10px', flex: 1 }}>
        <label>{label}</label>
        <select
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: '70%' }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
const HeroSection = () => {
    const [selectedDatabase, setSelectedDatabase] = useState('Database1');
    const [selectedInstance, setSelectedInstance] = useState('Instance1');
    const [selectedHost, setSelectedHost] = useState('Host1');
  
    const databaseOptions = ['Database1', 'Database2'];
    const instanceOptions = ['Instance1', 'Instance2'];
    const hostOptions = ['Host1', 'Host2'];
  return (
    <>
    
    <div style={{ display: 'flex' }}>
      <Dropdown
        label="Database"
        options={databaseOptions}
        selectedValue={selectedDatabase} 
        onChange={setSelectedDatabase}
      />
      <Dropdown
        label="Instance"
        options={instanceOptions}
        selectedValue={selectedInstance}
        onChange={setSelectedInstance}
      />
      <Dropdown
        label="Host"
        options={hostOptions}
        selectedValue={selectedHost}
        onChange={setSelectedHost}
      />
    </div>

    <div className="container">
        <div className="row">
            <div className="col">
                <p>Execution o/p</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection