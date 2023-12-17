import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import { TodoData } from '../../type/todosType';

function Todo({ item }: { item: TodoData }) {
    const { id, title, content, isDone } = item;
    return (
        <StTodoBox>
            <StTodoTitle>{title}</StTodoTitle>
            <StTodoContent><StTodoContentEl>{content}</StTodoContentEl></StTodoContent>
            <StTodoButtonBox>
                <Button buttonType="isDone" id={id} isDone={isDone} />
                <Button buttonType="삭제" id={id} isDone={isDone} />
            </StTodoButtonBox>
        </StTodoBox >
    )
}

export default Todo

const StTodoBox = styled.div`
    width: 15rem;
    height: 13rem;
    margin-left: 5%;
    border-radius: 10px;
    box-shadow: 0 0 5px 2px #555;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	flex-shrink: 0;
`

const StTodoTitle = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    padding-left: 5%;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
`

const StTodoContent = styled.div`
    width: 100%;
    flex: 1.5;
    font-size: 0.8rem;
    padding: 5%;
`
const StTodoContentEl = styled.div`
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    background-color: #ccc;
    display: flex;
    padding: 5%;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 10px;
`

const StTodoButtonBox = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    padding-top: 3%;
    align-items: flex-start;
    font-weight: bold;
`