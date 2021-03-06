import React from 'react'
import Todo from './Todo'



const List = ({ name, todos, todoClick }) => (

    <div>
      <h2>{name}</h2>
      <ul>
        { todos.map( item => 
            <Todo 
              key={item.id}
              {...item} 
              todoClick={todoClick}
            /> 
          ) 
        }
      </ul>
    </div>
  )
  
  export default List
