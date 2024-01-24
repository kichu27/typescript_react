import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import styles from '@/app/page.module.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Singletodo({ todo, todos, settodos }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleDone = (id: number) => {
    settodos(
      todos.map((t) =>
        t.id === id ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  const handleDelete = (id: number) => {
    settodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTodo(todo.todo);
  };

  const handleSaveEdit = () => {
    settodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, todo: editedTodo } : t
      )
    );
    setIsEditing(false);
  };

const inputref = useRef<HTMLInputElement>(null)

useEffect(()=>{

inputref.current?.focus()

} , [isEditing])

  return (
    <form className={`${styles.todos__single} ${todo.isDone ? styles.done : ''}`}>
      {isEditing ? (
        <>
          <input
          ref={inputref}
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <span className={styles.icon} onClick={handleSaveEdit}>
            <MdDone />
          </span>
          <span className={styles.icon} onClick={handleCancelEdit}>
            <AiFillDelete />
          </span>
        </>
      ) : (
        <>
          <span className={`todos__single--text ${todo.isDone ? styles.strikethrough : ''}`}>
            {todo.todo}
          </span>
          <div className={styles.icons}>
            <span className={styles.icon} onClick={handleEdit}>
              <AiFillEdit />
            </span>
            <span className={styles.icon} onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className={styles.icon} onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </>
      )}
    </form>
  );
}
