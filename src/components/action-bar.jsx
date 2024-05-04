import { useState } from 'react';
import { useRef } from 'react';
import { Plus } from 'lucide-react';
import TodosContainer from './todos-container';
export default function ActionBar() {
    const [todosArray, setTodosArray] = useState([])
    const inputRef = useRef("")
    const handleInput = () => {
        const inputValue = inputRef.current.value
        const inputValueObject = {
            title: inputValue,
            isCompleted: false,
            priority:"medium"
        }
        console.log( inputValue)
        setTodosArray([...todosArray, inputValueObject])
        
    }
    console.log(todosArray)
    
    return <>
    
       <div className='w-[70%] flex gap-10 items-center flex-col'>
         <div  className='flex h-[100px] justify-center items-center  gap-4 w-full bg-gray-700 rounded-md '> 
            <input ref={inputRef} type="text" name="add-task-input" className='w-[50%] text-black px-2 py-1' />
            <button className='flex px-4 py-2 bg-blue-950 rounded-md ' onClick={handleInput}>
                <span>Add</span>
                <Plus className='h-[24px]'  />
            </button>
            </div>
            
       <TodosContainer todosArray={todosArray} />
       </div>
       
    
    </>
}

