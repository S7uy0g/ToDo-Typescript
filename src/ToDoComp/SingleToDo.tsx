import React, { useState } from 'react'
import { model } from '../Models/model';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
interface props{
    toDo:model;
    todos:model[];
    setToDos:React.Dispatch<React.SetStateAction<model[]>>;
}


const SingleToDo = ({toDo,todos,setToDos}:props) => {
  const [edit,setEdit]=useState<boolean>(false);
  const [editToDo,setEditToDo]=useState<string|number>(toDo.toDo);


  const handleDone=(id:number)=>{
    setToDos(
      todos.map((todo)=>
      todo.id===id?{...todo,done:!todo.done}:todo
    ))
  }
  const handleDelete=(id:number)=>{
    setToDos(todos.filter((toDo)=>toDo.id!==id))
  }
  const handleEdit=(e:React.FormEvent,id:number)=>{
    e.preventDefault();
    setToDos(todos.map((todo)=>todo.id===id?{...todo,toDo:editToDo}:todo))
    setEdit(false);
  }
  return (
    <div className='flex flex-col items-center'>
      <form action="" className="w-1/2 flex justify-around items-end flex-wrap text-wrap px-4 py-4 rounded-xl bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
      " onSubmit={(e)=>(handleEdit(e,toDo.id))}>
        {
          edit?(
            <input value={editToDo} onChange={(e)=>setEditToDo(e.target.value)} className='text-black'/>
          ):(
            toDo.done? (
              <s className='w-2/3 break-words'>{toDo.toDo}</s>
            ):(
              <span className='w-2/3 break-words'>
                {toDo.toDo}
              </span>
            )
          )
        }
        <div className='w-1/3 flex justify-between'>
            <span className='cursor-pointer hover:scale-125 transition duration-150 ease-in-out' onClick={()=>{if(!edit&&!toDo.done){setEdit(!edit);}}}><FaEdit/></span>
            <span className='cursor-pointer hover:scale-125 transition duration-150 ease-in-out' onClick={()=>handleDelete(toDo.id)}><MdDelete/></span>
            <span className='cursor-pointer hover:scale-125 transition duration-150 ease-in-out' onClick={()=>handleDone(toDo.id)}><FaCheck/></span>
        </div>
      </form>
    </div>
  )
}

export default SingleToDo
