import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import useInput from '../../hooks/useInput'

function AddTodoInput() {
    const [titleText, titleHandler] = useInput();
    const [contentText, contentHandler] = useInput();
    return (
        <StInputWrapper>
            <StAddTodoBox>
                <StAddTodoInput value={titleText} onChange={(e) => { titleHandler(e) }} type="text" placeholder='제목을 입력해 주세요' />
            </StAddTodoBox>
            <StAddTodoBox>
                <StAddTodoInput value={contentText} onChange={(e) => { contentHandler(e) }} type="text" placeholder='내용을 입력해 주세요' />
            </StAddTodoBox>
            <StAddTodoBox $boxType="button">
                <Button buttonType="추가하기" titleText={titleText} contentText={contentText} titleHandler={titleHandler} contentHandler={contentHandler} />
            </StAddTodoBox>
        </StInputWrapper>
    )
}
export default AddTodoInput

const StInputWrapper = styled.div`
    width: 100%;
    height: 100px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StAddTodoBox = styled.div<{ $boxType?: string }>`
    flex: ${({ $boxType }) => $boxType === "button" ? 1 : 2};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StAddTodoInput = styled.input`
    font-size: 1.2rem;
    border: 0;
    border-bottom: 1px solid #000;
    &:focus{
        outline: none;
        border-bottom: 2px solid #000;
    }
`
