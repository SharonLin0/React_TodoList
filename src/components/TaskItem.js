import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../actions/todo'
import iconCheck from '../assets/check.png'

const Wrapper = styled.div`
  background-color: #fff;
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1.6px;
  padding: 0 20px;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

const TaskName = styled.div`
  flex-grow: 1;
  margin: 0 20px;
  cursor: pointer;
`

const BtnDelete = styled.button`
  background-color: #dc143c;
  color: #eee;
  border: none;
  border-radius: 3px;
  padding: 6px 10px;
  border-radius: 3px;
  width: min-content;
  letter-spacing: 1.6px;
  cursor: pointer;
`

function TaskItem(props) {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Checkbox
        checked={props.task.isCompleted}
        onChange={() => dispatch(actions.toggleTask(props.task.idx))}
      />
      <TaskName
        onClick={() => dispatch(actions.toggleTask(props.task.idx))}>
        {props.task.name}
      </TaskName>
      <BtnDelete onClick={() => dispatch(actions.deleteTask(props.task.idx))}>
        Delete
      </BtnDelete>
    </Wrapper>
  )
}

export default TaskItem