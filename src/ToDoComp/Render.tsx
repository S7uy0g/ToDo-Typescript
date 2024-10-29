import React from 'react'
import { model } from '../Models/model';
interface props{
    toDos:model[];
}

const Render = ({toDos}:props) => {
  return (
    <div>
      {toDos.map((t)=>(<li key={t.id}>{t.toDo}</li>))}
    </div>
  )
}

export default Render
