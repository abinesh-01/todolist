import React from "react";


const TodoItems = (props) =>{
    return(
        <>
          <div className="todoItems" onClick={()=>{props.deleteItem(props.id)}}>
            <li>{props.text}</li>
          </div>        
        </>
    )
}
export default TodoItems;