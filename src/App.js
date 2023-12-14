  // App.js
import React, { useState } from 'react';
import Ass1 from './component/Ass1';

  const generateData = (count) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 30) + 20,
        country: ['USA', 'Canada', 'UK', 'Germany'][Math.floor(Math.random() * 4)],
        email: `user${i}@example.com`,
      });
    }
    return data;
  };

 
  const App = () => {
    const [data, setData] = useState(generateData(10));
    console.log(data);


    return (
      <div>
        <h1>Resizable Table Example</h1>
        <Ass1 data ={data}/>
      </div>
    );
  };

  export default App;
