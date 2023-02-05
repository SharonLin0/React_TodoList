import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../actions/todo'
import { Text } from '../common/utils'
import iconAdd from '../assets/add.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  margin-bottom: 24px;
`

const Input = styled.input.attrs({ type: 'text' })`
  appearance: none;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #eee;
  color: #333;
  letter-spacing: .8px;
  font-size: 24px;
  padding: 8px 10px;
  margin: 0;
  transition: .4s;
`

const BtnAdd = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background-color: #76b5c5;
  color: #000;
  padding: 8px 16px;
  border-radius: 10px;
  margin-left: 16px;
  cursor: pointer;

  img {
    vertical-align: text-top;
    cursor: pointer;
  }
`

function TaskAdd() {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState('')

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleClick = (event) => {
    if (newTask === '') return
    dispatch(actions.addTask(newTask))
    setNewTask('')
  }

  return (
    <Wrapper>
      <Input
        value={newTask}
        placeholder={Text.INPUT_PLACEHOLDER}
        onChange={handleChange}
      />
      <BtnAdd onClick={handleClick}>
        <img src={iconAdd} alt="icon add" />
      </BtnAdd>
    </Wrapper>
  )
}

export default TaskAdd