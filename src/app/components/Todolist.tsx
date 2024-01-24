import React from 'react'
import { Todo } from '../model';
import Singletodo from './Singletodo';

interface props {

    todos : Todo[] ; 
    settodos : React.Dispatch<React.SetStateAction<Todo[]>> ;

}


export default function Todolist({todos , settodos}:props) {
  return   <div className='todos'>
        
       {

todos.map((todo)=>{

return <Singletodo  key={todo.id} todo={todo} todos={todos} settodos={settodos}  />

})


        }
        
        
        </div>
  
};
