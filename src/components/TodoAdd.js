import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../actions/todo'
import { Text, Keyboard, generateUUID } from '../common/utils'
import iconAdd from '../assets/add.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  margin-bottom: 40px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`

const Input = styled.input.attrs({ type: 'text', autoFocus: true })`
  width: 250px;
  appearance: none;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #eee;
  color: #333;
  letter-spacing: .8px;
  font-size: 24px;
  padding: 8px 16px;
  margin: 0;
  transition: .4s;

  @media (min-width: 1440px) {
    width: 480px;
  }
`

const BtnAdd = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background-color: #76b5c5;
  color: #000;
  padding: 8px 16px;
  border-radius: 10px;
  margin-left: 6px;
  cursor: pointer;

  @media (min-width: 1440px) {
    max-width: 600px;
    margin-left: 16px;
  }

  img {
    vertical-align: text-top;
    cursor: pointer;
  }
`

function TodoAdd() {
  const dispatch = useDispatch()
  const defaultTodo = {
    title: '',
    isDone: false,
  }

  const [newTodo, setNewTodo] = useState(defaultTodo)

  const handleChange = (event) => {
    setNewTodo({ ...newTodo, title: event.target.value })
  }

  const handleSubmit = () => {
    if (newTodo.title === '') return
    newTodo.title = newTodo.title.trim()
    dispatch(actions.addTodo({ ...newTodo, id: generateUUID()}))
    setNewTodo(defaultTodo)
  }

  const handleKeyDown = (event) => {
    const currentKey = event.which || event.keyCode || 0
    if (currentKey === Keyboard.ENTER) handleSubmit()
  }

  return (
    <Wrapper>
      <Input
        value={newTodo.title}
        placeholder={Text.INPUT_PLACEHOLDER}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <BtnAdd onClick={handleSubmit}>
        <img src={iconAdd} alt="add" />
      </BtnAdd>
    </Wrapper>
  )
}

export default TodoAdd