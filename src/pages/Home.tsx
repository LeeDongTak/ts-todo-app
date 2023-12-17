import React from 'react'
import AddTodoInput from '../components/home/AddTodoInput'
import TodoList from '../components/TodoList'

function Home() {
    return (<>
        <AddTodoInput />
        <TodoList TodoStatus={false} />
        <TodoList TodoStatus={true} />
    </>
    )
}

export default Home