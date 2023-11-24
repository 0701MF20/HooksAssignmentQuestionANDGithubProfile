import React, { useEffect, useState } from "react";
const FakeStore = () => {
    const [records, setRecord] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setRecord(data))
            .catch((error) => console.error("Data is not fetched"));

    }, []);
    console.log(records);
    const borderStyle = {
        border: '3px solid black'
    }
    const HandleSearch = (e) => {
        setSearch(e.target.value);
    }
    // useEffect(()=>
    // {

    // },[])
    return (
        <div>
            <div>
                <label htmlFor="search">Search</label>
                <input id="search" name="search" onChange={HandleSearch}></input>
            </div>
            <table style={borderStyle}>
                <thead >
                    <th style={borderStyle}>ID</th>
                    <th style={borderStyle}>Title</th>
                    <th style={borderStyle}>Price</th>
                    <th style={borderStyle}>Description</th>
                    <th style={borderStyle}>Category</th>
                    <th style={borderStyle}>Image</th>
                    <th style={borderStyle}>Rating</th>
                    <th style={borderStyle}>Quantity</th>
                </thead>
                <tbody style={borderStyle}>

                    {records.map((record, index) => (
                        <tr key={index}>
                            <td style={borderStyle}>{record.id}</td>
                            <td style={borderStyle}>{record.title}</td>
                            <td style={borderStyle}>{record.price}</td>
                            <td style={borderStyle}>{record.description}</td>
                            <td style={borderStyle}>{record.category}</td>
                            <td style={borderStyle}><img src={record.image} alt="Product Image" style={{ width: '100px', height: '100px' }}></img></td>
                            <td style={borderStyle}>{record.rating.rate}</td>
                            <td style={borderStyle}>{record.rating.count}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default FakeStore;