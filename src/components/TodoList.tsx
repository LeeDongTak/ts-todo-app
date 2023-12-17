import React from 'react'
import styled from 'styled-components'
import Todo from './home/Todo'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../api/todos'
import { TodoData } from '../type/todosType'
import useGetTodos from '../hooks/useGetTodos'


function TodoList({ TodoStatus }: { TodoStatus: boolean }) {
  const { data, isError, isLoading } = useGetTodos();

  return (
    <StTodoListWrapper>
      <StTodoTitle>{TodoStatus ? "완료한 일 ✅" : "해야할 일 🔥🔥🔥"}</StTodoTitle>
      <StTodoListBox>
        {isLoading
          ? <StLoading>로딩중...</StLoading>
          : data?.filter((item) => item.isDone === TodoStatus)
            .map((item) => (<Todo key={item.id} item={item} />))}
      </StTodoListBox>
    </StTodoListWrapper>
  )
}

export default TodoList

const StTodoListWrapper = styled.div`
    width: 100%;
    flex: 4;
`

const StTodoTitle = styled.div`
    width: 100%;
    height: 15%;
    font-size: 1.2rem;
    font-weight: bold;
    padding-left: 5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const StTodoListBox = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x:scroll;
    &::-webkit-scrollbar{
      display: none;
    }
`

const StLoading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
`