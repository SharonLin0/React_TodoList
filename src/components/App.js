import styled from 'styled-components'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DATABASE_NAME, Text } from '../common/utils'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const Wrapper = styled.div`
  min-height: 85vh;
  border-radius: 10px;
  background-color: #232931;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  margin: 16px;

  @media (min-width: 1440px) {
    min-height: 80vh;
    margin: 48px;
  }
`

const Title = styled.div`
  margin-bottom: 24px;
  color: #fff;
  font-size: 40px;
`

function App() {
  const filterStatus = useSelector((store) => store.filterReducer)
  const storedTodos = useSelector((store) => store.todoReducer)
  console.log()

  const store = () => {
    localStorage.setItem(DATABASE_NAME, JSON.stringify(storedTodos))
  }

  useEffect(() => { store(storedTodos) })

  return (
    <Wrapper>
      <Title>{Text.TITLE}</Title>
      <TodoAdd />
      <Routes>
        <Route path="/" element={<TodoList filter={filterStatus}/>} />
        <Route path="todo" element={<TodoList filter={filterStatus}/>} />
        <Route path="done" element={<TodoList filter={filterStatus}/>} />
      </Routes>
    </Wrapper>
  )
}

export default App
