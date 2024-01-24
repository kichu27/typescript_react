import React, { useRef } from 'react'
import styles from "@/app/page.module.css"
import { Console, log } from 'console';




interface Props {
todo :string  ; 
settodo : React.Dispatch<React.SetStateAction<string>> ; 
handleadd : (e: React.FormEvent)=> void ;
}


function InputField({todo,settodo , handleadd}:Props) {



  const inputref = useRef<HTMLInputElement>(null)

function handleinputchange(e:React.ChangeEvent<HTMLInputElement>)
{

settodo(e.target.value)

}




  return <form className={styles.input} onSubmit={(e)=>{
    handleadd(e) ; 
    inputref.current?.blur()
  }}>

<input ref={inputref} type='text' className={styles.input_box} placeholder='Enter a Task' value={todo} onChange={handleinputchange} /> 
<button type='submit' className={styles.input_submit}>GO</button>

  </form>
}

export default InputField