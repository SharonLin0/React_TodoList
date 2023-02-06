import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../actions/todo'
import { Keyboard } from '../common/utils'
import iconDelete from '../assets/delete.png'
import iconEdit from '../assets/edit.png'

const Wrapper = styled.div`
  background-color: #fff;
  width: 280px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1.6px;
  padding: 0 20px;
  border: 1px solid #ddd;
  border-radius: 3px;

  @media (min-width: 1440px) {
    width: 600px;
    height: 75px;
  }
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

const TodoName = styled.div`
  display: ${(props) => (props.editing ? 'none' : 'block')};
  flex: 1;
  margin: 0 20px;
  font-size: 16px;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'auto')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Input = styled.input.attrs({type: 'text', autoFocus: true})`
  display: ${(props) => (props.editing ? 'inline-block' : 'none')};
  position: relative;
  flex-grow: 1;
  margin: 0 20px;
  font-size: 20px;
  line-height: 22px;
  border: 0;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  box-sizing: border-box;
`

const BtnEdit = styled.span`
  display: ${(props) => (props.editing ? 'none' : 'block')};
  margin-right: 16px;
  cursor: pointer;
`

const BtnDelete = styled.span`
  display: ${(props) => (props.editing ? 'none' : 'block')};
  cursor: pointer;
`

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [cacheTodo, setCacheTodo] = useState({ ...todo })
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = (event) => {
    setIsEditing(true)
  }

  const handleChange = (event) => {
    setCacheTodo({ ...cacheTodo, title: event.target.value })
  }

  const handleSubmit = () => {
    if (cacheTodo.title === '') {
      dispatch(actions.deleteTodo({ ...cacheTodo }))
    } else {
      cacheTodo.title = cacheTodo.title.trim()
      dispatch(actions.editTodo({ ...cacheTodo }))
    }
    setIsEditing(false)
  }

  const handleKeyDown = (event) => {
    const currentKey = event.which || event.keyCode || 0
    if (currentKey === Keyboard.ESCAPE) {
      setCacheTodo({ ...todo })
      setIsEditing(false)
    } else if (currentKey === Keyboard.ENTER) {
      handleSubmit()
    }
  }

  return (
    <Wrapper>
      <Checkbox
        checked={todo.isDone}
        onChange={() => dispatch(actions.toggleTodo(todo))}
      />
      <TodoName
        editing={isEditing}
        done={todo.isDone}
        onDoubleClick={handleEdit}
      >
        {todo.title}
      </TodoName>
      <Input
        editing={isEditing}
        value={cacheTodo.title}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <BtnEdit editing={isEditing}>
        <img src={iconEdit} onClick={handleEdit} alt="edit" />
      </BtnEdit>
      <BtnDelete editing={isEditing}>
        <img src={iconDelete} onClick={() => dispatch(actions.deleteTodo(todo))} alt="delete" />
      </BtnDelete>
    </Wrapper>
  )
}

export default TodoItem