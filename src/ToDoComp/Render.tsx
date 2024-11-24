import React from 'react'
import SingleToDo from './SingleToDo';
import { model } from '../Models/model';

interface props{
    toDos:model[];
    setToDos:React.Dispatch<React.SetStateAction<model[]>>;
}

const Render = ({toDos,setToDos}:props) => {
  return (
    <div>
      {toDos.map((t)=>(
        <SingleToDo 
        toDo={t} 
        key={t.id}
        todos={toDos}
        setToDos={setToDos}
        />
      ))}
    </div>
  )
}

export default Render
