import { useState } from 'react'
import './App.css'
import ToDo from './ToDoComp/ToDo';
import { model } from './Models/model';
import Render from './ToDoComp/Render';

const App:React.FC=() => {

  const [toDo,setToDo]=useState<string|number>("");
  const [toDos,setToDos]=useState<model[]>([]);

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if(toDo){
      setToDos([...toDos, { id: Date.now(), toDo, done: false }]);
      setToDo("");
    }
  }

  return (
    <div className='text-white'> 
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <ToDo toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
      <Render toDos={toDos} setToDos={setToDos}/>
    </div>
  )
}

export default App
