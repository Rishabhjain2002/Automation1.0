import React from 'react'
import { useState } from 'react';
const Dropdown = ({ label, options, selectedValue, onChange }) => {
    return (
        <div>
            <div>
                <label style={{ margin: '8px' }}>{label} : </label>
            </div>
            <select value={selectedValue} style={{ width: '250px' }} onChange={(e) => onChange(e.target.value)}>
                <option value="">Select</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {/* {selectedValue && <p>You selected: {selectedValue}</p>} */}
        </div>
    );
};
const HeroSec2 = () => {
    const [showValues, setShowValues] = useState(false);

    const handleLogFileClick = () => {
        setShowValues(!showValues);
    };

    const [selectedHost, setSelectedHost] = useState('');
    const [selectedDatabase, setSelectedDatabase] = useState('');
    const [selectedSchema, setSelectedSchema] = useState('');

    const hostOptions = ['XUVCW', 'Host2'];
    const databaseOptions = ['Db19C', 'Database2'];
    const schemaOptions = ['Schemas', 'Schema2'];

    const handleHostChange = (value) => {
        setSelectedHost(value);
    };

    const handleDatabaseChange = (value) => {
        setSelectedDatabase(value);
    };

    const handleSchemaChange = (value) => {
        setSelectedSchema(value);
    };

    const handleSubmit = () => {
        // Handle the submit logic with the selected values
        console.log('Selected Host:', selectedHost);
        console.log('Selected Database:', selectedDatabase);
        console.log('Selected Schema:', selectedSchema);
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
        <>
            <div className="container" style={{ margin: '10px' }}>
                <div className="row">
                    <div className="col">
                        <Dropdown
                            label="Host"
                            options={hostOptions}
                            selectedValue={selectedHost}
                            onChange={handleHostChange}
                        />
                    </div>
                    <div className="col">
                        <Dropdown
                            label="Database"
                            options={databaseOptions}
                            selectedValue={selectedDatabase}
                            onChange={handleDatabaseChange}
                        />
                    </div>
                    <div className="col">
                        <Dropdown
                            label="Schema"
                            options={schemaOptions}
                            selectedValue={selectedSchema}
                            onChange={handleSchemaChange}
                        />
                    </div>
                    <div className="col">
                        <button style={{ marginTop: '30px' }} onClick={handleSubmit}>Submit </button>
                    </div>
                </div>

            </div>

            <div className="container" style={{ margin: '10px', marginTop: '30px' }}>
                <h5 style={{ display: 'inline-block' }}>Execution O/P</h5>
                <button style={{ marginLeft: '20px' }} onClick={handleLogFileClick}>Log File</button>
                {showValues && (
                    <div
                        style={{
                            width: '1200px',
                            height: '300px',
                            backgroundColor: '#e0e0e0',
                            marginTop: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {/* Display values inside the square box */}
                      <h5>Log values</h5>
                        {/* Add more values as needed */}
                    </div>
                )}
            </div>

        </>
    )
}

export default HeroSec2