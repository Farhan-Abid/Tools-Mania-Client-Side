import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';
import './Tools.css';

const Tools = ({setProduct}) => {
    const [tools,setTools] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/purchase')
        .then(res => res.json())
        .then(data => setTools(data));
    }, [])

    return (
        <div>
            <div className='container'>
            <h1 className='text-4xl mb-5 text-center text-primary uppercase font-bold'>Tools</h1>
            <div className='tools-container'>
            {
                tools.map(tool => <Tool
                    setProduct={setProduct}
                key={tool.id}
                tool={tool}></Tool>).slice(0,6)
            }
            </div>
        </div>
        </div>
    );
};

export default Tools;