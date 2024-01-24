"use client"
import { useState } from "react";
import InputField from "./components/InputField";
import styles from "./page.module.css";
import { Todo } from "./model";
import Todolist from "./components/Todolist";

export default function Home() {


const [todo , settodo] = useState<string>("")
const [todos , settodos] = useState<Todo[]>([])

const handleadd = (e: React.FormEvent) => {
  e.preventDefault();

if(todo)
{
  settodos([...todos , {id:Date.now() , todo , isDone:false}])
  settodo("")
}
};


  return (
    <div>
 
<div className={styles.d1}><h1>TASKIF<span className={styles.d1highlight}>Y</span></h1></div>

<InputField todo={todo} settodo={settodo} handleadd={handleadd}/>

<Todolist todos={todos} settodos={settodos} /> 
    </div>
  );
}
