import React, { useState } from 'react'

function Ass1({data}) {
    console.log("main",data);
    let [cData,setCData]= useState(data)

    console.log("copy",cData);

    function tHandler(){
        let x = data.sort((a,b)=> a.age-b.age)
        setCData(x)
    }
    function cHandler(){
        let x = data.sort((a,b)=> a.age-b.age)
        setCData(x)
    }

    function sHandler(e){
        let x = data.filter((data)=>{
            if(data.name.toLowerCase().includes(e.target.value.toLowerCase())) return data
          })
      setCData(x)
    }
    function rHandler(){
    //     console.log("dfg");
    //  setCData(data)
    }
   
  return (
    <div>
        <p>Search user</p>
        <input type="text"  onChange={sHandler}/><hr />
        <p>For Tabel sort on the basis of age</p><button onClick={tHandler}>tSort</button><hr />
        <table border="1px" style={{borderCollapse:"collapse"}}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>user</th>
                    <th>age <button onClick={cHandler}>cSort</button></th>
                    <th>country</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
            {cData.map((data)=>{
            return(
               <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.country}</td>
                <td>{data.email}</td>
               </tr>
            )
        })}
            </tbody>
        </table>
        
        <button onClick={rHandler}>ReSet</button>
    </div>
  )
}

export default Ass1