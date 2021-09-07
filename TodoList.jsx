import React, {useState } from 'react';

const TodoList = () => {

    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num+1);
    }

    const decNum = () => {
        if(num>0){
            setNum(num-1);
        }
        else{
            setNum(0);
        }
     
    }
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(0);

    function calculateTotal(){
        setTotal(number1+number2);
    }

    function subtractTotal(){
        setTotal(number1-number2);
    }
    function multiplyTotal(){
        setTotal(number1*number2);
    }
    function divideTotal(){
        setTotal(number1/number2);
    }
    const [data, setData] = useState(null);
    function getData(val){
        setData(val.target.value)
        console.warn(val.target.value)
    }
    return (
        <>
           <div className = "main_div">
               <div className = "center_div">
                   <h1> {data} {total} </h1>
                   <input type = "text" onChange = {getData}></input>
                   <input type="number" value={number1} onChange={e => setNumber1(+e.target.value)} placeholder="0"/>
                   <input type="number" value={number2} onChange={e => setNumber2(+e.target.value)} placeholder="0"/>
                   <div className = "btn_div">
                       <button onClick = {calculateTotal}> Add Them! </button>
                       <button onClick = {subtractTotal}> subtract Them! </button>
                       <button onClick = {multiplyTotal}> multiply Them! </button>
                       <button onClick = {divideTotal}> divide Them! </button>
                       {//<button onClick = {incNum}> Incream </button>
                       //<button onClick = {decNum}> Decream </button>
                       }
                   </div>
               </div>
           </div>
        </>
    )
}
export default TodoList;