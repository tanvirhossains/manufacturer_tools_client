import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { toolId } = useParams()

    const [tool, setTool] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])


    const {name } = tool
    return (
        <div>
            <h1>Purchass page</h1>
            <h1>name {name}</h1>
        </div>
    );
};

export default Purchase;