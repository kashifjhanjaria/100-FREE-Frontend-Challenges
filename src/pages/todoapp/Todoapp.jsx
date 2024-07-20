import React, { useEffect, useRef, useState } from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'

const Todoapp = () => {
    const [todos , setTodos] = useState("");
    const [todoList , setTodoList] = useState([]);
 const [removeitem , setRemoveItem] = useState(0);
//  const [gettolist , setGetTodoList] = useState();
const todoRef = useRef(null);
let gettolist  = JSON.parse(localStorage.getItem('todos'));
function handleAddTodo (e){
    e.preventDefault();
  
    if (todos != "") {
        setTodoList([...todoList, {id:Math.floor(Math.random() * 1000 +1) , todo:todos}])
        localStorage.setItem('todos' , JSON.stringify([...todoList, {id:Math.floor(Math.random() * 1000 +1) , todo:todos}]));
        todoRef.current.value =""
       todoRef.current.focus()
        console.log(todoRef.current.value ="" , 'Hkekeikeke');
        setTodos("")
       
    }
   
}
    function handleChangeTodo (e){
        setTodos(e.target.value);
      
       
    }
    
    function handleRemoveTodo (id){
        console.log(id);
        const filter = todoList.filter((item)=>{
            return item.id != id;
        });
        // localStorage.removeItem('todos');
        localStorage.setItem('todos' , JSON.stringify(filter));
        setTodoList(filter);
   
        setRemoveItem(removeitem + 1);
       
    }


   
   
  return (
    <>

      <div className="flex-grow flex flex-col">
        <div className="flex-grow">

          <div className="px-12 py-8 mx-auto max-w-4xl">
            <div>
              <div className="flex items-baseline justify-between">
                <div>
                  <Welcomeheading>
                    <h2 className="text-lg">
                      Welcome To 100 - Free - Frontend - Challengs
                    </h2>
                  </Welcomeheading>

                </div>

              </div>
              <Nameheader name="Todo App"/>
            </div>
            <div className="mt-4">
              <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                <div>

                  <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

                    <div className='w-auto h-auto '>
                      <div className='flex flex-col gap-2'>
                      








                      <div className="container mx-auto px-4">
      <h1 className="block w-full text-center text-gray-900 mb-6 mt-6">To-Do App</h1>
      <div className="flex p-4">
        <span className="flex-1 text-center text-teal-900">
            Item count:  <span id="item-count">{todoList ? todoList.length :" "}</span></span>
        <span className="flex-1 text-center text-teal-900">
            Remove Items: <span id="unchecked-count">{removeitem}</span></span>
      </div>
      <div className="flex shadow bg-white p-2">
        <form  className='flex gap-2'>
        <input value={todos} ref={todoRef} onInput={handleChangeTodo} id="todo-input" className="w-full rounded text-gray-700 p-2" 
        type="text" placeholder="Title..." maxLength="50" required/>
        <div className="bg-gray-500 hover:bg-gray-400 flex justify-center items-center rounded text-white  cursor-pointer">
          <button onClick={handleAddTodo} type='submit' 
          className="font-semibold  text-sm py-1 px-2 cursor-pointer">Add</button>
        </div>
        </form>
      </div>
     
        {
            todoList && todoList.map((item)=>{
                return(
                    <div  className='bg-gray-200 flex gap-3 flex-col p-2' key={item.id}>
                    <div className='bg-gray-400 p-2 flex justify-between' >
                        <span>{item.todo}</span>
                         <button className='py-.5 px-1 bg-red-600 text-white rounded-full ' 
                        onClick={()=>handleRemoveTodo(item.id)}>remove</button>
                    </div>
                    </div>
                )
            })
        }
    
    </div>


















                     

                     
                      </div>
                    </div>
                  </div>
                </div>
                <div>


                </div>




              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Todoapp