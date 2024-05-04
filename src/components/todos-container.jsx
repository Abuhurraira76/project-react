export default function TodosContainer({ todosArray}) {
    return <>
     <div className='flex flex-col gap-2 w-[60%]'>
      {todosArray.map((todo, index) => (
          <div key={index} className=" px-4 py-2 rounded-md bg-slate-900"><span>{todo.title}</span>
              {todo.completed ? <span>Completed</span> : <span>Not Completed</span>}    
        <button className="bg-red-500"></button>
        
        
          </div>
      ))}
    </div>
    
    </>
}