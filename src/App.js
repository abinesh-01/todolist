import React, { useState } from "react";
import From from "./todoform";
import TodoItems from "./todoitem";
import "./App.css"



function App() {

  const [item, setItem] = useState([]);

  const AddItems = (input) =>{
    setItem((previous) =>{
      return [...previous,input]
    })
  };

  const deleteItem = (id) =>{
    setItem((previous) =>{
      return previous.filter((item,index) =>{
        return index!==id;
      });
    });
  };

  
    return (
    <div className="App">
       <div className="container">
        <div className="heading">
            <h1>To Do list</h1>
        </div>
           <From AddItems={AddItems}/>
           <div className="list">
        <ul>
          {
               item.map((items,index) =>{
                   return(<TodoItems text={items} key={index} deleteItem={deleteItem} id={index}/>)
               })
          }
        </ul>
       </div>
       </div>
     
    </div>
  );
}

export default App;
