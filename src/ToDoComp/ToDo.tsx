import React from 'react'

interface Props{
  toDo:string|number;
  setToDo:React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd:(e:React.FormEvent)=>void
}

const ToDo = ({toDo,setToDo,handleAdd}:Props) => {
  return (
    <div>
      <div className='text-4xl font-bold my-4 flex justify-center'>ToDoTASKS</div>
      <form className='flex justify-center my-5' onSubmit={handleAdd}>
        <div className='w-2/3 relative'>
            <input 
            type="text" 
            placeholder='Input Your Task' 
            className=' w-full px-4 py-[10px] rounded-3xl text-black'
            value={toDo}
            onChange={(e)=>setToDo(e.target.value)}/>

            <button type='submit' className='absolute right-1 top-[2px] bg-slate-800 rounded-full py-2 px-3 hover:opacity-50 transition ease-in-out delay-100'>GO</button>
        </div>
      </form>
    </div>
  )
}

export default ToDo
