import React from 'react'
import styled from 'styled-components'
import useMutationTodo from '../../hooks/useMutationTodo'
import { TodoData } from '../../type/todosType'
import useInput from '../../hooks/useInput'

type buttonProps = {
    buttonType?: string,
    titleText?: string,
    contentText?: string,
    titleHandler?: any,
    contentHandler?: any,
    id?: string,
    isDone?: boolean
}

function Button({ buttonType, titleText, contentText, titleHandler, contentHandler, id, isDone }: buttonProps) {
    const { addMutate, updateMutate, deleteMutate } = useMutationTodo();
    type TodoOmitType = Omit<TodoData, 'id'>;
    type updTodoOmitType = Omit<TodoData, 'title' | 'content'>;
    const newTodo: TodoOmitType = {
        title: titleText,
        content: contentText,
        isDone: false
    }

    const updTodo: updTodoOmitType = {
        id,
        isDone
    }
    switch (buttonType) {
        case "추가하기":
            return <StButton onClick={(e) => {
                addMutate(newTodo)
                titleHandler(e, '')
                contentHandler(e, '')
            }}>추가하기</StButton>
        case "isDone":
            return <StButton $btnType="isDone" onClick={() => { updateMutate(updTodo) }}>{isDone ? "취소" : "완료"}</StButton>
        case "삭제":
            return <StButton $btnType="close" onClick={() => { deleteMutate(id) }}>삭제</StButton>
        default:
            return <></>
            break;
    }
}

export default Button


const StButton = styled.button<{ $btnType?: string }>`
    font-size: ${({ $btnType }) => $btnType === "isDone" || "close" ? "0.8rem" : "1.1rem"};  
    margin: ${({ $btnType }) => $btnType === "isDone" || "close" ? "0 7%" : "0"};  
    padding: ${({ $btnType }) => $btnType === "isDone" || "close" ? "3% 10%" : "3% 13%"};  
    font-weight: bold;
    border-radius: 10px;
    border: 0;
    background-color: #000;
    color: #fff;
    transition: 0.1s;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
`