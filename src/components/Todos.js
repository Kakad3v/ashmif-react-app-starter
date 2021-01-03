
import React, { useState } from 'react'
import { HiTrash } from 'react-icons/hi';


export default function Todos() {

    const [newTodo, setNewTodo] = useState('');

    const [todos, setTodos] = useState([
        {id:1, text: 'Call my mum'},
        {id:2, text: 'Read my notes'},
        {id:3, text: 'Learn reaact native'},
        {id:4, text: 'Learn a foreign language'},
    ]);

    function handleNewTodoChange(e) {
        e.preventDefault()

        setNewTodo(e.target.value);
    }

    function handleNewTodo(e) {
        e.preventDefault()

        setTodos([...todos, { id: Date.now(), text: newTodo }])
        
        e.target.reset()
    }

   function deleteTodo(id){
        setTodos(todos.filter((todo) => todo.id != id))
    }

    return (
        <div className="flex flex-col justify-center min-h-screen items-center px-8 bg-yellow-400 text-white py-4">
            <h1 className="text-2xl">Another Todo App</h1>

            <form onSubmit={handleNewTodo} className="w-full sm:w-1/2">
                <input
                    className="outline-none focus:outline-none px-2 sm:py-1 py-2 text-gray-600 rounded-md w-full"
                    placeholder="Your todo"
                    onChange={handleNewTodoChange}
                />
            </form>

            <ul className="block w-full mt-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center space-x-2 w-full border-b border-dashed py-1 text-lg">
                        <span>{todo.text}</span>
                        <a href="#" onClick={() => deleteTodo(todo.id)} className="text-sm bg-red-400 w-5 h-5 flex items-center justify-around rounded-full">
                            <HiTrash />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
